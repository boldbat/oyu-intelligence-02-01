import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'mn', 'ja'];
const defaultLocale = 'en';

function getLocaleFromHeader(request: NextRequest): string {
  const acceptLanguage = request.headers.get('Accept-Language');
  if (!acceptLanguage) return defaultLocale;

  // Parse Accept-Language header and find first matching locale
  const preferredLocales = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
    .map(lang => lang.split('-')[0]); // Get primary language code

  for (const lang of preferredLocales) {
    if (locales.includes(lang)) {
      return lang;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Static files like .ico, .png, etc.
  ) {
    return NextResponse.next();
  }

  // Get locale from cookie or header
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = localeCookie && locales.includes(localeCookie) 
    ? localeCookie 
    : getLocaleFromHeader(request);

  // Redirect to locale-prefixed path
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  const response = NextResponse.redirect(newUrl);
  
  // Set locale cookie with 1-year expiration
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and API
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};

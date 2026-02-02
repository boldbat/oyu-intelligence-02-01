import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function RootPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  const locale = localeCookie?.value || 'en';
  
  // Validate locale
  const validLocales = ['en', 'mn', 'ja'];
  const validLocale = validLocales.includes(locale) ? locale : 'en';
  
  redirect(`/${validLocale}`);
}

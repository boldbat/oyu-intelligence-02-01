import { Author, BlogPost, Category, Locale } from '@/types/blog';
import { LEGACY_BLOG_POSTS } from '@/lib/legacy-blog-source';

type LegacyTranslation = {
  title?: string;
  excerpt?: string;
  content?: string;
  category?: string;
  date?: string;
  readTime?: string;
};

type LegacyPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author?: string;
  date: string;
  category: string;
  readTime?: string;
  translations?: Partial<Record<Locale, LegacyTranslation>>;
};

const LOCALES: Locale[] = ['en', 'mn', 'ja'];

const CATEGORY_PRESETS: Record<'ai' | 'tech' | 'news' | 'insight', Category> = {
  ai: { id: '1', name: 'Artificial Intelligence', slug: 'ai', color: 'bg-indigo-500' },
  tech: { id: '2', name: 'Technology', slug: 'technology', color: 'bg-blue-500' },
  news: { id: '3', name: 'Company News', slug: 'news', color: 'bg-emerald-500' },
  insight: { id: '4', name: 'Insights', slug: 'insights', color: 'bg-purple-500' },
};

const AI_2025_REPORT_PDF = '/blog/2025%20%D0%9E%D0%9D%D0%AB%20%D0%A5%D0%98%D0%99%D0%9C%D0%AD%D0%9B%20%D0%9E%D0%AE%D0%A3%D0%9D%20%D0%A3%D0%A5%D0%90%D0%90%D0%9D%D0%AB%20%D0%A2%D3%A8%D0%9B%D3%A8%D0%92%20%D0%91%D0%90%D0%99%D0%94%D0%90%D0%9B.pdf';

const normalizeText = (value: unknown): string =>
  String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\uFFFD/g, '')
    .trim();

const parseDateToIso = (value: string): string => {
  const source = normalizeText(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(source)) {
    return source;
  }

  const monthMap: Record<string, string> = {
    jan: '01',
    feb: '02',
    mar: '03',
    apr: '04',
    may: '05',
    jun: '06',
    jul: '07',
    aug: '08',
    sep: '09',
    oct: '10',
    nov: '11',
    dec: '12',
  };

  const english = source.match(/^([A-Za-z]{3})\s+(\d{1,2}),\s*(\d{4})$/);
  if (english) {
    const month = monthMap[english[1].toLowerCase()] ?? '01';
    const day = String(english[2]).padStart(2, '0');
    return `${english[3]}-${month}-${day}`;
  }

  const localized = source.match(/(\d{4}).*?(\d{1,2}).*?(\d{1,2})/);
  if (localized) {
    const month = String(localized[2]).padStart(2, '0');
    const day = String(localized[3]).padStart(2, '0');
    return `${localized[1]}-${month}-${day}`;
  }

  return new Date().toISOString().slice(0, 10);
};

const mapCategory = (rawCategory: string): Category => {
  const normalized = normalizeText(rawCategory).toLowerCase();

  if (/(ai|automation|cyber|security|safety|research)/.test(normalized)) {
    return CATEGORY_PRESETS.ai;
  }

  if (/(mobile|web|development|technology)/.test(normalized)) {
    return CATEGORY_PRESETS.tech;
  }

  if (/(event|achievement|news)/.test(normalized)) {
    return CATEGORY_PRESETS.news;
  }

  return CATEGORY_PRESETS.insight;
};

const mapAuthor = (rawName: string | undefined): Author => {
  const name = normalizeText(rawName) || 'Oyu Intelligence';
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'oyu-intelligence';

  return {
    id: `legacy-${slug}`,
    name,
    avatar: '/oyu-intelligence/mainlogo.png',
    role: /boldbat/i.test(name)
      ? 'Founder & CEO'
      : /oyu intelligence/i.test(name)
      ? 'Editorial Team'
      : 'Guest Contributor',
  };
};

const normalizeCoverImage = (value: string): string => {
  const image = normalizeText(value);
  if (!image) {
    return '/blog/ai-business.jpg';
  }
  if (/^https?:\/\//i.test(image)) {
    return image;
  }
  return image.startsWith('/') ? image : `/${image}`;
};

const normalizeMarkdown = (rawContent: string, slug: string): string => {
  let content = normalizeText(rawContent);

  content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, source) => {
    const src = String(source).trim();
    if (/^https?:\/\//i.test(src) || src.startsWith('/')) {
      return match;
    }
    if (src.startsWith('blog/')) {
      return `![${alt}](/${src})`;
    }
    return match;
  });

  content = content.replace(/\]\((?:https?:\/\/www\.oyu-intelligence\.com)?\/blog\/([a-z0-9-]+)\)/gi, '](./$1)');

  if (slug === 'ai-landscape-2025-comprehensive-overview') {
    content = content.replace(/\[[^\]]*PDF[^\]]*\]\(\/blog\/[^)]+\.pdf\)/gi, `[Download our comprehensive AI research document (PDF)](${AI_2025_REPORT_PDF})`);

    if (!content.includes(AI_2025_REPORT_PDF)) {
      content += `\n\n[Download our comprehensive AI research document (PDF)](${AI_2025_REPORT_PDF})`;
    }
  }

  return content;
};

const buildTags = (rawCategory: string, fallbackCategoryName: string): string[] => {
  const tags = Array.from(
    new Set(
      normalizeText(rawCategory)
        .split(/[,&/]/)
        .map(tag => tag.trim())
        .filter(Boolean)
    )
  );

  return tags.length > 0 ? tags : [fallbackCategoryName];
};

const mapLegacyPost = (legacyPost: LegacyPost, locale: Locale): BlogPost => {
  const translated = legacyPost.translations?.[locale];
  const categoryText = normalizeText(translated?.category) || normalizeText(legacyPost.category);
  const category = mapCategory(categoryText);

  const title = normalizeText(translated?.title) || normalizeText(legacyPost.title);
  const excerpt = normalizeText(translated?.excerpt) || normalizeText(legacyPost.excerpt);
  const content = normalizeMarkdown(
    normalizeText(translated?.content) || normalizeText(legacyPost.content),
    legacyPost.slug
  );

  return {
    id: `${legacyPost.id}-${locale}`,
    slug: normalizeText(legacyPost.slug),
    locale,
    title,
    excerpt,
    content,
    coverImage: normalizeCoverImage(legacyPost.image),
    date: parseDateToIso(normalizeText(translated?.date) || normalizeText(legacyPost.date)),
    author: mapAuthor(legacyPost.author),
    category,
    featured: false,
    readingTime: normalizeText(translated?.readTime) || normalizeText(legacyPost.readTime),
    tags: buildTags(categoryText, category.name),
  };
};

const dedupePosts = (source: BlogPost[]): BlogPost[] => {
  const deduped = new Map<string, BlogPost>();

  source.forEach(post => {
    const key = `${post.locale}:${post.slug}`;
    const existing = deduped.get(key);

    if (!existing || post.content.length > existing.content.length) {
      deduped.set(key, post);
    }
  });

  return [...deduped.values()];
};

const buildMigratedPosts = (): BlogPost[] => {
  const legacyPosts = LEGACY_BLOG_POSTS as LegacyPost[];

  const localized = legacyPosts.flatMap(post => LOCALES.map(locale => mapLegacyPost(post, locale)));

  const deduped = dedupePosts(localized).sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return a.slug.localeCompare(b.slug);
  });

  LOCALES.forEach(locale => {
    const firstInLocale = deduped.find(post => post.locale === locale);
    if (firstInLocale) {
      firstInLocale.featured = true;
    }
  });

  return deduped;
};

const posts: BlogPost[] = buildMigratedPosts();

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getFeaturedPosts(locale: Locale): Promise<BlogPost[]> {
  await delay(100);
  return posts.filter(post => post.locale === locale && post.featured);
}

export async function getLatestPosts(locale: Locale): Promise<BlogPost[]> {
  await delay(100);
  return posts.filter(post => post.locale === locale && !post.featured);
}

export async function getAllPosts(locale: Locale): Promise<BlogPost[]> {
  await delay(100);
  return posts.filter(post => post.locale === locale);
}

export async function getPostBySlug(slug: string, locale: Locale): Promise<BlogPost | undefined> {
  await delay(100);
  return posts.find(post => post.slug === slug && post.locale === locale);
}

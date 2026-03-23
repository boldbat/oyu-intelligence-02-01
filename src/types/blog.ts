export type Locale = 'en' | 'mn' | 'ja';

export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string; // e.g., 'bg-blue-500'
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML
  coverImage: string;
  date: string;
  author: Author;
  category: Category;
  locale: Locale;
  featured?: boolean;
  tags?: string[];
  readingTime?: string;
}

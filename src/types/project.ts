export interface ProjectGalleryItem {
  id: string;
  url: string;
  caption?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export type ProjectLocale = 'en' | 'mn' | 'ja';

export interface Project {
  id: string;
  slug: string;
  locale: ProjectLocale;
  title: string;
  description: string;
  longDescription?: string;
  thumbnailImage: string;
  heroImage: string;
  category: string;
  tags: string[];
  client?: string;
  year: string;
  techStack: string[];
  features: ProjectFeature[];
  gallery: ProjectGalleryItem[];
  featured?: boolean;
}

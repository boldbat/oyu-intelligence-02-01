import { getPostBySlug, getAllPosts } from '@/lib/blog-service';
import { Locale } from '@/types/blog';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, MessageCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
    // Generate params for all locales + slugs
    const locales: Locale[] = ['en', 'mn', 'ja'];
    let params: { locale: string; slug: string }[] = [];

    for (const locale of locales) {
        const posts = await getAllPosts(locale);
        const localeParams = posts.map(post => ({
            locale,
            slug: post.slug
        }));
        params = [...params, ...localeParams];
    }
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (['en', 'mn', 'ja'].includes(locale) ? locale : 'en') as Locale;
  const post = await getPostBySlug(slug, validLocale);

  if (!post) {
      return {
          title: 'Not Found | Oyu Intelligence',
      }
  }

  return {
    title: `${post.title} | Oyu Intelligence`,
    description: post.excerpt,
    openGraph: {
        images: [post.coverImage],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const validLocale = (['en', 'mn', 'ja'].includes(locale) ? locale : 'en') as Locale;
  const post = await getPostBySlug(slug, validLocale);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30">
        <Navigation />
        
        {/* Progress bar placeholder (could be added later) */}

        <article className="pt-32 pb-20">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
                 <Link href={`/${locale}/blog`} className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors text-sm font-medium hover-trigger">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {validLocale === 'mn' ? 'Блог руу буцах' : validLocale === 'ja' ? 'ブログに戻る' : 'Back to Blog'}
                 </Link>
                 
                 <div className="flex items-center justify-center gap-4 mb-6">
                    <span className={`${post.category.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                        {post.category.name}
                    </span>
                 </div>

                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight heading-font">
                    {post.title}
                 </h1>

                 <div className="flex items-center justify-center gap-6 text-neutral-500 text-sm mono-font border-t border-b border-white/10 py-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                    </div>
                 </div>
            </div>

            {/* Hero Image */}
            <div className="max-w-6xl mx-auto px-6 mb-16">
                <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-neutral-900 border border-white/10">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Content & Sidebar */}
            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 relative">
                
                {/* Main Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:heading-font prose-li:marker:text-blue-500 prose-a:text-blue-400 hover:prose-a:text-blue-300">
                    <Markdown>{post.content}</Markdown>
                </div>

                {/* Sticky Sidebar (Socials) */}
                <div className="hidden lg:flex flex-col gap-6 sticky top-32 h-fit">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest text-center">Share</p>
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all hover-trigger" title="Share">
                        <Share2 className="w-4 h-4" />
                    </button>
                     <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all hover-trigger" title="Comments">
                        <MessageCircle className="w-4 h-4" />
                    </button>
                </div>
            </div>
            
            {/* Author Block */}
             <div className="max-w-3xl mx-auto px-6 mt-20 pt-10 border-t border-white/10">
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full bg-neutral-800 overflow-hidden">
                        {/* Placeholder avatar if image fails or is empty, realistically mock data has urls */}
                         <div className="w-full h-full flex items-center justify-center text-xs font-bold bg-blue-900 text-blue-200">
                             {post.author.name.substring(0,2).toUpperCase()}
                         </div>
                    </div>
                    <div>
                        <p className="text-white font-bold">{post.author.name}</p>
                        <p className="text-neutral-500 text-sm">{post.author.role}</p>
                    </div>
                </div>
             </div>

        </article>

        <Footer />
    </main>
  );
}

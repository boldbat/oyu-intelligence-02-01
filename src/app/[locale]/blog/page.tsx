import { getAllPosts, getFeaturedPosts } from '@/lib/blog-service';
import { Locale } from '@/types/blog';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogCard from '@/components/blog/BlogCard';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isMn = locale === 'mn';
  const isJa = locale === 'ja';
  
  return {
    title: isMn ? 'Oyu Intelligence | Блог' : isJa ? 'Oyu Intelligence | ブログ' : 'Oyu Intelligence | Blog',
    description: isMn 
      ? 'Технологи, хиймэл оюун ухаан, программ хангамжийн хөгжүүлэлтийн талаарх мэдээлэл.' 
      : isJa 
        ? 'テクノロジー、AI、ソフトウェア開発に関する最新の洞察。' 
        : 'Latest insights on technology, AI, and software development.',
  };
}

export default async function BlogListingPage({ params }: Props) {
  const { locale } = await params;
  const validLocale = (['en', 'mn', 'ja'].includes(locale) ? locale : 'en') as Locale;

  const featuredPosts = await getFeaturedPosts(validLocale);
  const allPosts = await getAllPosts(validLocale);
  const mainFeatured = featuredPosts[0] || allPosts[0];
  const gridPosts = allPosts.filter(p => p.id !== mainFeatured?.id);

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30">
        <Navigation />
        
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <header className="mb-20 text-center">
                 <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-font tracking-tight">
                    {validLocale === 'mn' ? 'Мэдээлэл & Нийтлэл' : validLocale === 'ja' ? 'ブログ & ニュース' : 'Insights & News'}
                 </h1>
                 <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    {validLocale === 'mn' 
                        ? 'Манай багийн технологийн ертөнц дэх хамгийн сүүлийн үеийн мэдээлэл, судалгаа, бодол.' 
                        : validLocale === 'ja'
                        ? 'テクノロジーの世界に関する私たちのチームからの最新の洞察、研究、考え。'
                        : 'Latest thoughts, research, and insights from our team on the world of technology.'}
                 </p>
            </header>

            {mainFeatured && <FeaturedPost post={mainFeatured} />}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {gridPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>

        <Footer />
    </main>
  );
}

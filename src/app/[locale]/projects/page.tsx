import { getProjects, isProjectLocale } from '@/lib/project-service';
import ProjectCard from '@/components/projects/ProjectCard';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isMn = locale === 'mn';
  const isJa = locale === 'ja';
  
  return {
    title: isMn ? 'Oyu Intelligence | Төслүүд' : isJa ? 'Oyu Intelligence | プロジェクト' : 'Oyu Intelligence | Projects',
    description: isMn 
      ? 'Бидний хөгжүүлсэн шилдэг AI болон технологийн шийдлүүд.' 
      : isJa 
        ? '当社が開発した最先端のAIおよびテクノロジーソリューション。' 
        : 'Cutting-edge AI and technology solutions developed by our team.',
  };
}

export default async function ProjectsListingPage({ params }: Props) {
  const { locale } = await params;

  if (!isProjectLocale(locale)) {
    notFound();
  }

  const allProjects = await getProjects(locale);

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
        <Navigation />
        
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <header className="mb-20 text-center">
                 <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-font tracking-tight">
                    {locale === 'mn' ? 'Бидний Бүтээл' : locale === 'ja' ? '制作実績' : 'Selected Output'}
                 </h1>
                 <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    {locale === 'mn' 
                        ? 'Хиймэл оюун ухаан, дизайн, хөгжүүлэлтийн огтлолцол дээр бүтээгдсэн дижитал туршлагууд.' 
                        : locale === 'ja'
                        ? 'AI、デザイン、開発の交差点で構築されたデジタル体験。'
                        : 'Digital experiences built at the intersection of AI, design, and performance development.'}
                 </p>
            </header>

            {/* Grid for all projects (including featured for consistency in this layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

        <Footer />
    </main>
  );
}

import { getProjectBySlug, getProjectPaths, getRelatedProjects, isProjectLocale } from '@/lib/project-service';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/projects/ProjectCard';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, User, Tag, Cpu, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getProjectPaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isProjectLocale(locale)) {
    return { title: 'Project Not Found | Oyu Intelligence' };
  }

  const project = await getProjectBySlug(slug, locale);
  
  if (!project) {
    return {
      title: 'Project Not Found | Oyu Intelligence',
      description: 'The requested project detail page could not be found.',
    };
  }
  
  return {
    title: `Oyu Intelligence | ${project.title}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isProjectLocale(locale)) {
    notFound();
  }

  const project = await getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(slug, locale);

  return (
    <main className="min-h-screen bg-[#030303] text-white">
        <Navigation />
        
        {/* Back Button */}
        <div className="pt-32 px-6 max-w-7xl mx-auto">
            <Link 
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group mb-8 mono-font text-xs uppercase tracking-widest"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {locale === 'mn' ? 'Буцах' : locale === 'ja' ? '戻る' : 'Back to Projects'}
            </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-white/5">
                <Image 
                  src={project.heroImage} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
            </div>
        </section>

        {/* Info Grid */}
        <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
            {/* Left: Main Content */}
            <div className="lg:col-span-8">
                <div className="mb-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] mono-font uppercase tracking-widest mb-4">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold heading-font mb-8">
                        {project.title}
                    </h1>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                            {project.description}
                        </p>
                        <div className="text-neutral-400 leading-relaxed whitespace-pre-wrap">
                            {project.longDescription}
                        </div>
                    </div>
                </div>

                {/* Features List */}
                <div className="border-t border-white/5 pt-12 mt-12">
                    <h2 className="text-2xl font-bold heading-font mb-8">
                        {locale === 'mn' ? 'Үндсэн Боломжууд' : locale === 'ja' ? '主な機能' : 'Key Features'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Sidebar Meta */}
            <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                    <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 space-y-6">
                        <div className="flex items-center gap-4">
                            <User className="w-5 h-5 text-neutral-500" />
                            <div>
                                <p className="text-[10px] mono-font text-neutral-500 uppercase tracking-wider">{locale === 'mn' ? 'Захиалагч' : locale === 'ja' ? 'クライアント' : 'Client'}</p>
                                <p className="text-sm font-medium">{project.client}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Calendar className="w-5 h-5 text-neutral-500" />
                            <div>
                                <p className="text-[10px] mono-font text-neutral-500 uppercase tracking-wider">{locale === 'mn' ? 'Жил' : locale === 'ja' ? '年' : 'Year'}</p>
                                <p className="text-sm font-medium">{project.year}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Tag className="w-5 h-5 text-neutral-500" />
                            <div>
                                <p className="text-[10px] mono-font text-neutral-500 uppercase tracking-wider">{locale === 'mn' ? 'Ангилал' : locale === 'ja' ? 'カテゴリー' : 'Category'}</p>
                                <p className="text-sm font-medium">{project.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Cpu className="w-5 h-5 text-neutral-500" />
                            <div>
                                <p className="text-[10px] mono-font text-neutral-500 uppercase tracking-wider">{locale === 'mn' ? 'Технологи' : locale === 'ja' ? '技術スタック' : 'Tech Stack'}</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-neutral-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact/CTA */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 text-center">
                        <h3 className="font-bold heading-font mb-4">
                            {locale === 'mn' ? 'Төсөл эхлүүлэх үү?' : locale === 'ja' ? 'プロジェクトを始めませんか？' : 'Start a project?'}
                        </h3>
                        <p className="text-sm text-neutral-400 mb-6">
                            {locale === 'mn' ? 'Бид таны санааг бодит болгоход бэлэн байна.' : locale === 'ja' ? 'あなたのアイデアを現実にしましょう。' : 'Let’s turn your vision into a reality with AI-powered solutions.'}
                        </p>
                        <button className="w-full py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors text-sm font-bold tracking-wide">
                            {locale === 'mn' ? 'Холбоо барих' : locale === 'ja' ? 'お問い合わせ' : 'Contact Us'}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Image Gallery */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
             <h2 className="text-3xl font-bold heading-font mb-12 text-center">
                {locale === 'mn' ? 'Төслийн Зургууд' : locale === 'ja' ? 'プロジェクトギャラリー' : 'Gallery'}
             </h2>
             <div className="grid grid-cols-1 gap-8">
                 {project.gallery.map((item) => (
                     <div key={item.id} className="relative aspect-video rounded-3xl overflow-hidden border border-white/5">
                         <Image src={item.url} alt={item.caption || project.title} fill className="object-cover" />
                     </div>
                 ))}
             </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
            <section className="px-6 max-w-7xl mx-auto pb-32">
                <h2 className="text-3xl font-bold heading-font mb-12">
                     {locale === 'mn' ? 'Төстэй Төслүүд' : locale === 'ja' ? '関連プロジェクト' : 'Related Projects'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedProjects.map(proj => (
                        <ProjectCard key={proj.id} project={proj} />
                    ))}
                </div>
            </section>
        )}

        <Footer />
    </main>
  );
}

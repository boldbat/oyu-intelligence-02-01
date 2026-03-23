import { Project, ProjectLocale } from '@/types/project';

const projects: Project[] = [
  // --- ENGLISH PROJECTS ---
  {
    id: '1',
    slug: 'oyu-ai-platform',
    locale: 'en',
    title: 'Oyu AI: Enterprise Intelligence',
    description: 'An advanced AI ecosystem designed for real-time data analysis and autonomous decision-making in large-scale enterprises.',
    longDescription: `Oyu AI is our flagship platform that bridges the gap between raw data and actionable intelligence. By leveraging custom-trained LLMs and agentic workflows, Oyu AI automates the most complex parts of the enterprise value chain. From predictive maintenance to automated financial reporting, this platform scales with the velocity of your business.`,
    thumbnailImage: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop',
    category: 'AI AGENT',
    tags: ['AI Agents', 'Enterprise', 'Scalable'],
    client: 'Strategic Partners',
    year: '2024',
    techStack: ['Next.js', 'PyTorch', 'Supabase', 'FastAPI'],
    features: [
      { title: 'Autonomous Agents', description: 'Self-correcting AI loops that handle multi-step tasks.' },
      { title: 'Real-time Analytics', description: 'Processing gigabytes of data with sub-second latency.' },
      { title: 'Zero-trust Security', description: 'Enterprise-grade encryption and data isolation.' }
    ],
    gallery: [
      { id: '1-1', url: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop' }
    ],
    featured: true
  },
  {
    id: '2',
    slug: 'astro-ai-analytics',
    locale: 'en',
    title: 'Astro AI: Celestial Data Engine',
    description: 'Processing vast astronomical datasets with neural networks to identify patterns and celestial events with unprecedented accuracy.',
    longDescription: `Astro AI was developed to handle the sheer volume of data produced by modern astronomical surveys. Using specialized convolutional neural networks (CNNs), the platform identifies anomalies, classifies celestial bodies, and predicts astronomical events. It is a testament to how Oyu Intelligence can handle massive, structured and unstructured datasets.`,
    thumbnailImage: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop',
    category: 'DATA SCIENCE',
    tags: ['SpaceTech', 'Big Data', 'Neural Networks'],
    client: 'Stellar Research Lab',
    year: '2023',
    techStack: ['Python', 'TensorFlow', 'PostgreSQL', 'Grafana'],
    features: [
      { title: 'High-Throughput Processing', description: 'Parallelized data ingestion for petabyte-scale datasets.' },
      { title: 'Pattern Recognition', description: 'Advanced CNNs for celestial object classification.' },
      { title: 'Collaborative Workspace', description: 'Tools for astronomers to share insights in real-time.' }
    ],
    gallery: [
      { id: '2-1', url: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop' }
    ]
  },
  {
    id: '3',
    slug: 'lookluxe-ai-fashion',
    locale: 'en',
    title: 'LookLuxe AI: Personalized Style',
    description: 'A premium fashion recommendation engine that uses visual AI to curate highly personalized style suggestions for luxury consumers.',
    longDescription: `LookLuxe AI redefines the luxury retail experience. By analyzing user preferences, body types, and current trends through visual recognition, the engine provides an ultra-personalized shopping journey. It integrates seamlessly with high-end e-commerce platforms, increasing engagement and conversion rates through the power of "Visual Desire" mapping.`,
    thumbnailImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop',
    category: 'E-COMMERCE',
    tags: ['Fashion', 'Visual AI', 'Luxury'],
    client: 'Luxe Retail Group',
    year: '2023',
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'OpenCV'],
    features: [
      { title: 'Visual DNA Mapping', description: 'Understanding style through color, texture, and silhouette analysis.' },
      { title: 'Personalized Curation', description: 'AI-driven recommendations that adapt to evolving tastes.' },
      { title: 'Inventory Integration', description: 'Real-time syncing with global luxury inventory systems.' }
    ],
    gallery: [
      { id: '3-1', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop' }
    ]
  },

  // --- MONGOLIAN PROJECTS ---
  {
    id: '4',
    slug: 'oyu-ai-platform',
    locale: 'mn',
    title: 'Oyu AI: Энтерпрайз Оюун Ухаан',
    description: 'Томоохон аж ахуйн нэгжүүдэд зориулсан бодит цагийн өгөгдлийн шинжилгээ, бие даасан шийдвэр гаргах дэвшилтэт AI экосистем.',
    longDescription: `Oyu AI нь түүхий өгөгдөл болон хэрэгжих боломжтой оюун ухааны хоорондох зайг нөхдөг бидний тэргүүлэх платформ юм. Тусгайлан сургасан LLM болон агент ажлын урсгалыг ашиглан Oyu AI нь бизнесийн хамгийн нарийн төвөгтэй хэсгүүдийг автоматжуулдаг.`,
    thumbnailImage: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop',
    category: 'AI АГЕНТ',
    tags: ['AI Агентууд', 'Байгууллага', 'Өргөжих боломжтой'],
    client: 'Стратегийн Түншүүд',
    year: '2024',
    techStack: ['Next.js', 'PyTorch', 'Supabase', 'FastAPI'],
    features: [
      { title: 'Бие даасан агентууд', description: 'Олон шатлалт даалгавруудыг гүйцэтгэдэг өөрийгөө засдаг AI.' },
      { title: 'Бодит цагийн шинжилгээ', description: 'Гигабайт өгөгдлийг секундээс бага хугацаанд боловсруулах.' },
      { title: 'Зиро-Траст аюулгүй байдал', description: 'Байгууллагын түвшний шифрлэлт болон өгөгдөл тусгаарлалт.' }
    ],
    gallery: [
      { id: '4-1', url: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop' }
    ],
    featured: true
  },
  {
    id: '5',
    slug: 'astro-ai-analytics',
    locale: 'mn',
    title: 'Astro AI: Одон орны өгөгдлийн систем',
    description: 'Сансар огторгуйн асар их өгөгдлийг нейрон сүлжээгээр боловсруулж, одон орны үзэгдлүүдийг урьд өмнө байгаагүй нарийвчлалтайгаар тодорхойлох.',
    longDescription: `Astro AI нь орчин үеийн одон орны судалгаанаас гарч буй асар их хэмжээний өгөгдлийг боловсруулахад зориулагдсан. Тусгай нейрон сүлжээг ашиглан платформ нь гажгийг илрүүлж, селестиел биетүүдийг ангилдаг.`,
    thumbnailImage: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop',
    category: 'ӨГӨГДЛИЙН ШИНЖЛЭХ УХААН',
    tags: ['SpaceTech', 'Big Data', 'Нейрон сүлжээ'],
    client: 'Stellar Судалгааны Лаборатори',
    year: '2023',
    techStack: ['Python', 'TensorFlow', 'PostgreSQL', 'Grafana'],
    features: [
      { title: 'Өндөр хүчин чадалтай боловсруулалт', description: 'Петабайт хэмжээний өгөгдлийг боловсруулах зэрэгцээ систем.' },
      { title: 'Хэв шинж таних', description: 'Оддыг ангилахад зориулсан дэвшилтэт CNN сүлжээ.' },
      { title: 'Хамтын ажиллагааны орчин', description: 'Одон орон судлаачдад зориулсан бодит цагийн хэрэгслүүд.' }
    ],
    gallery: [
      { id: '5-1', url: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop' }
    ]
  },
  {
    id: '6',
    slug: 'lookluxe-ai-fashion',
    locale: 'mn',
    title: 'LookLuxe AI: Хувийн Хэв Маяг',
    description: 'Харааны AI ашиглан тансаг зэрэглэлийн хэрэглэгчдэд зориулан хувийн хэв маягийг санал болгодог загварын систем.',
    longDescription: `LookLuxe AI нь тансаг зэрэглэлийн жижиглэн худалдааны туршлагыг шинээр тодорхойлж байна. Хэрэглэгчийн сонголт, биеийн галбир болон өнөөгийн чиг хандлагад дүн шинжилгээ хийснээр систем нь хамгийн тохиромжтой худалдан авалтын аяллыг санал болгодог.`,
    thumbnailImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop',
    category: 'E-COMMERCE',
    tags: ['Загвар', 'Visual AI', 'Тансаг зэрэглэл'],
    client: 'Luxe Жижиглэн Худалдааны Групп',
    year: '2023',
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'OpenCV'],
    features: [
      { title: 'Харааны ДНХ зураглал', description: 'Өнгө, бүтэц, хэлбэр дүрсийг шинжлэх замаар хэв маягийг ойлгох.' },
      { title: 'Хувь хүнд тохирсон санал', description: 'Хэрэглэгчийн таашаалд нийцэх AI-д суурилсан зөвлөмж.' },
      { title: 'Барааны нөөцийн интеграц', description: 'Дэлхийн нөөцийн системтэй бодит цаг хугацаанд синхрончлох.' }
    ],
    gallery: [
      { id: '6-1', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop' }
    ]
  },

  // --- JAPANESE PROJECTS ---
  {
    id: '7',
    slug: 'oyu-ai-platform',
    locale: 'ja',
    title: 'Oyu AI: エンタープライズ・インテリジェンス',
    description: '大規模企業向けに設計された、リアルタイムデータ分析と自律的な意思決定を可能にする先進的なAIエコシステム。',
    longDescription: `Oyu AIは、生データと実行可能なインテリジェンスの間のギャップを埋める当社のフラッグシッププラットフォームです。カスタムトレーニングされたLLMとエージェントワークフローを活用することで、企業価値チェーンの最も複雑な部分を自動化します。`,
    thumbnailImage: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop',
    category: 'AIエージェント',
    tags: ['AIエージェント', 'エンタープライズ', 'スケーラブル'],
    client: '戦略的パートナー',
    year: '2024',
    techStack: ['Next.js', 'PyTorch', 'Supabase', 'FastAPI'],
    features: [
      { title: '自律型エージェント', description: '多段階のタスクを処理する自己修正AIループ。' },
      { title: 'リアルタイム分析', description: 'ギガバイト単位のデータをミリ秒単位のレイテンシで処理。' },
      { title: 'ゼロトラストセキュリティ', description: 'エンタープライズ級の暗号化とデータ分離。' }
    ],
    gallery: [
      { id: '7-1', url: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop' }
    ],
    featured: true
  },
  {
    id: '8',
    slug: 'astro-ai-analytics',
    locale: 'ja',
    title: 'Astro AI: 天体データエンジン',
    description: '膨大な天文データセットをニューラルネットワークで処理し、前例のない精度で天文現象やパターンを特定。',
    longDescription: `Astro AIは、現代の天文調査によって生成される膨大なデータ量を処理するために開発されました。CNN（畳み込みニューラルネットワーク）を使用して、異常の特定や天体の分類、天文イベントの予測を行います。`,
    thumbnailImage: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop',
    category: 'データサイエンス',
    tags: ['宇宙技術', 'ビッグデータ', 'ニューラルネットワーク'],
    client: 'ステラ研究ラボ',
    year: '2023',
    techStack: ['Python', 'TensorFlow', 'PostgreSQL', 'Grafana'],
    features: [
      { title: '高スループット処理', description: 'ペタバイト規模のデータセットに対応する並列処理。' },
      { title: 'パターン認識', description: '天体分類のための高度なCNN。' },
      { title: '共同作業スペース', description: '天文学者がリアルタイムで知見を共有するためのツール。' }
    ],
    gallery: [
      { id: '8-1', url: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop' }
    ]
  },
  {
    id: '9',
    slug: 'lookluxe-ai-fashion',
    locale: 'ja',
    title: 'LookLuxe AI: パーソナライズド・スタイル',
    description: '視覚AIを使用してラグジュアリー層の消費者に高度にパーソナライズされたスタイル提案を行う、プレミアムファッション推奨エンジン。',
    longDescription: `LookLuxe AIは、ラグジュアリー小売体験を再定義します。ユーザーの好み、体型、最新のトレンドを視覚認識によって分析することで、究極のパーソナライズされたショッピング体験を提供します。`,
    thumbnailImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop',
    category: 'Eコマース',
    tags: ['ファッション', '視覚AI', 'ラグジュアリー'],
    client: 'リュクスリテールグループ',
    year: '2023',
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'OpenCV'],
    features: [
      { title: '視覚DNAマッピング', description: '色、質感、シルエットの分析を通じてスタイルを理解。' },
      { title: 'パーソナライズされた選定', description: '好みの変化に適応するAI駆動のレコメンデーション。' },
      { title: '在庫連携', description: 'グローバルな高級在庫システムとのリアルタイム同期。' }
    ],
    gallery: [
      { id: '9-1', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop' }
    ]
  }
];

export function isProjectLocale(locale: string): locale is ProjectLocale {
  return locale === 'en' || locale === 'mn' || locale === 'ja';
}

export function getProjectLocales(): ProjectLocale[] {
  return ['en', 'mn', 'ja'];
}

export async function getProjects(locale: ProjectLocale): Promise<Project[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return projects.filter(p => p.locale === locale);
}

export async function getFeaturedProject(locale: ProjectLocale): Promise<Project | undefined> {
  const localeProjects = projects.filter(p => p.locale === locale);
  return localeProjects.find(p => p.featured) || localeProjects[0];
}

export async function getProjectBySlug(slug: string, locale: ProjectLocale): Promise<Project | undefined> {
  return projects.find(p => p.slug === slug && p.locale === locale);
}

export async function getRelatedProjects(slug: string, locale: ProjectLocale, limit = 2): Promise<Project[]> {
  return projects
    .filter(p => p.slug !== slug && p.locale === locale)
    .slice(0, limit);
}

export async function getProjectPaths(): Promise<Array<{ locale: ProjectLocale; slug: string }>> {
  return projects.map(({ locale, slug }) => ({ locale, slug }));
}

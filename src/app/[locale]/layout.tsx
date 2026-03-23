import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Noto_Sans_JP, Poppins, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import { LanguageProvider, Locale } from "@/contexts/LanguageContext";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-4",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: "Oyu Intelligence - AI & Digital Solutions",
    mn: "Оюу Интеллиженс - AI & Дижитал Шийдэл",
    ja: "Oyu Intelligence - AI & デジタルソリューション",
  };

  const descriptions: Record<string, string> = {
    en: "Innovating high-quality digital solutions to help businesses grow technologically. AI Automation, Mobile Apps, and Web Development.",
    mn: "Бизнесийг технологийн хувьд өсөхөд туслах өндөр чанартай дижитал шийдлүүдийг бүтээж байна. AI Автоматжуулалт, Мобайл Апп, Веб Хөгжүүлэлт.",
    ja: "ビジネスの技術的成長を支援する高品質なデジタルソリューションを革新。AI自動化、モバイルアプリ、Web開発。",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'mn' }, { locale: 'ja' }];
}

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = ['en', 'mn', 'ja'].includes(locale) ? locale as Locale : 'en';

  return (
    <html lang={validLocale} className="antialiased">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${notoSansJP.variable} ${poppins.variable} ${sourceSerif4.variable}`}
        style={{ fontFamily: 'var(--font-inter), var(--font-noto-sans-jp), Inter, sans-serif' }}
      >
        <LanguageProvider initialLocale={validLocale}>
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

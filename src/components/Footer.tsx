'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/10 text-center bg-[#030303] relative z-20">
      <Link 
        href="mailto:oyu.intelligence@icloud.com" 
        className="block text-[13vw] font-bold leading-none text-[#111] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-white hover:to-neutral-500 transition-all duration-700 cursor-pointer hover-trigger heading-font tracking-tight"
      >
        OYU INTELLIGENCE
      </Link>
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto mt-20 text-xs mono-font text-neutral-600 gap-6">
        <div className="flex gap-4">
          <span>© 2024 OYU INTELLIGENCE LLC</span>
          <span className="text-neutral-800">/</span>
          <span className="text-green-500">SYSTEMS OPERATIONAL</span>
        </div>
        <div className="flex gap-8 justify-center md:justify-end">
          <Link href="#" className="hover:text-white transition-colors hover-trigger">TWITTER</Link>
          <Link href="#" className="hover:text-white transition-colors hover-trigger">LINKEDIN</Link>
          <Link href="#" className="hover:text-white transition-colors hover-trigger">INSTAGRAM</Link>
        </div>
      </div>
    </footer>
  );
}

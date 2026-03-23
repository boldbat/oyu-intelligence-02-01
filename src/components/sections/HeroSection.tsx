'use client';

import Image from 'next/image';
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  Plus,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex font-display overflow-hidden">
      {/* ── Video Background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Content Layer ── */}
      <div className="relative z-10 flex w-full min-h-screen">
        {/* ════════════════════════════════════════════
            LEFT PANEL (52%)
        ════════════════════════════════════════════ */}
        <div className="w-full lg:w-[52%] relative flex flex-col p-4 lg:p-6">
          {/* Glass overlay */}
          <div className="liquid-glass-strong absolute inset-4 lg:inset-6 rounded-3xl" />

          {/* Nav */}
          <nav className="relative z-10 flex items-center justify-between px-6 pt-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Bloom" width={32} height={32} />
              <span className="text-2xl font-semibold tracking-tighter text-white">
                bloom
              </span>
            </div>
            <button className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-white text-sm hover:scale-105 transition-transform active:scale-95">
              <Menu className="w-4 h-4" />
              Menu
            </button>
          </nav>

          {/* Hero Center */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 lg:px-12">
            <Image
              src="/logo.png"
              alt="Bloom Logo"
              width={80}
              height={80}
              className="mb-8"
            />

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-white text-center leading-[1.1] mb-8">
              Innovating the
              <br />
              <em className="font-serif italic text-white/80 not-italic" style={{ fontStyle: 'italic' }}>
                spirit of{' '}
              </em>
              bloom AI
            </h1>

            {/* CTA Button */}
            <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-3 text-white text-sm font-medium hover:scale-105 active:scale-95 transition-transform mb-8">
              Explore Now
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <Download className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {['Artistic Gallery', 'AI Generation', '3D Structures'].map(
                (label) => (
                  <span
                    key={label}
                    className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80"
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="relative z-10 px-8 lg:px-12 pb-8">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-3">
              VISIONARY DESIGN
            </p>
            <p className="text-base lg:text-lg text-white/80 mb-3">
              <span className="font-display">&ldquo;We imagined </span>
              <span className="font-serif italic">a realm </span>
              <span className="font-display">with no ending.&rdquo;</span>
            </p>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-white/50">
              <div className="h-px flex-1 bg-white/20" />
              <span>MARCUS AURELIO</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            RIGHT PANEL (48%) — Desktop only
        ════════════════════════════════════════════ */}
        <div className="hidden lg:flex w-[48%] flex-col p-6 pt-20 gap-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            {/* Social Icons */}
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-3">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </span>
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </span>
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </span>
              </a>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            {/* Account Button */}
            <button className="liquid-glass rounded-full p-3 hover:scale-105 transition-transform text-white">
              <Sparkles className="w-5 h-5" />
            </button>
          </div>

          {/* Community Card */}
          <div className="flex justify-end">
            <div className="liquid-glass rounded-2xl p-5 w-56">
              <h3 className="text-sm font-medium text-white mb-1">
                Enter our ecosystem
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Join a thriving community of creators, designers, and AI
                enthusiasts building the future of floral art.
              </p>
            </div>
          </div>

          {/* Bottom Feature Section */}
          <div className="mt-auto">
            <div className="liquid-glass rounded-[2.5rem] p-4">
              {/* Two side-by-side cards */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* Processing Card */}
                <div className="liquid-glass rounded-3xl p-5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3 text-white">
                    <Wand2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">
                    Processing
                  </h4>
                  <p className="text-xs text-white/50">
                    Real-time AI-powered generation and rendering.
                  </p>
                </div>

                {/* Growth Archive Card */}
                <div className="liquid-glass rounded-3xl p-5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3 text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">
                    Growth Archive
                  </h4>
                  <p className="text-xs text-white/50">
                    Curate and track your botanical designs.
                  </p>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="liquid-glass rounded-3xl p-4 flex items-center gap-4">
                {/* Flower thumbnail */}
                <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 relative bg-gradient-to-br from-emerald-900/60 via-rose-900/40 to-amber-900/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M12 6c-2 0-3.5 2-3.5 4.5S10 15 12 17c2-2 3.5-4 3.5-6.5S14 6 12 6z" />
                      <path d="M12 6c0 2-2 3.5-4.5 3.5S3 10 3 12" />
                      <path d="M12 6c0 2 2 3.5 4.5 3.5S21 10 21 12" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-white mb-0.5">
                    Advanced Plant Sculpting
                  </h4>
                  <p className="text-xs text-white/50 truncate">
                    Shape and refine botanical creations with precision AI tools.
                  </p>
                </div>
                <button className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform flex-shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

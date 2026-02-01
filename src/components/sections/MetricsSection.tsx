'use client';

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-32 px-6 md:px-12 bg-[#030303] border-b border-neutral-900/50">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900/50 border border-neutral-800/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Metric 1 */}
                <div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <span className="text-[10px] mono-font uppercase text-emerald-500/70 tracking-widest border border-emerald-900/30 px-2 py-0.5 rounded bg-emerald-900/10">Uptime</span>
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                    </div>
                    <div className="text-4xl mono-font text-white mb-6 group-hover:text-emerald-200 transition-colors">99.99%</div>
                    <svg className="w-full h-10 text-emerald-900/50 group-hover:text-emerald-500 transition-colors duration-500 sparkline" stroke="currentColor" fill="none" strokeWidth="1.5">
                        <path d="M0 25 L10 25 L20 15 L30 20 L40 5 L50 15 L60 25 L70 25 L80 20 L90 25 L100 25"></path>
                    </svg>
                </div>
                {/* Metric 2 */}
                <div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <span className="text-[10px] mono-font uppercase text-indigo-500/70 tracking-widest border border-indigo-900/30 px-2 py-0.5 rounded bg-indigo-900/10">Latency</span>
                        <span className="text-[10px] text-neutral-600 mono-font">MS</span>
                    </div>
                    <div className="text-4xl mono-font text-white mb-6 group-hover:text-indigo-200 transition-colors">18ms</div>
                    <svg className="w-full h-10 text-indigo-900/50 group-hover:text-indigo-500 transition-colors duration-500 sparkline" stroke="currentColor" fill="none" strokeWidth="1.5">
                        <path d="M0 20 L15 20 L25 10 L35 20 L50 20 L60 25 L75 20 L85 15 L100 20"></path>
                    </svg>
                </div>
                {/* Metric 3 */}
                <div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <span className="text-[10px] mono-font uppercase text-cyan-500/70 tracking-widest border border-cyan-900/30 px-2 py-0.5 rounded bg-cyan-900/10">Commits</span>
                        <span className="text-[10px] text-neutral-600 mono-font">Wk</span>
                    </div>
                    <div className="text-4xl mono-font text-white mb-6 group-hover:text-cyan-200 transition-colors">482</div>
                    <div className="flex gap-1.5 h-10 items-end">
                        <div className="w-1.5 rounded-t-sm bg-neutral-800 h-[40%] group-hover:bg-cyan-900 transition-colors duration-300"></div>
                        <div className="w-1.5 rounded-t-sm bg-neutral-800 h-[70%] group-hover:bg-cyan-700 transition-colors duration-300 delay-75"></div>
                        <div className="w-1.5 rounded-t-sm bg-neutral-800 h-[50%] group-hover:bg-cyan-800 transition-colors duration-300 delay-100"></div>
                        <div className="w-1.5 rounded-t-sm bg-neutral-800 h-[90%] group-hover:bg-cyan-500 transition-colors duration-300 delay-150"></div>
                        <div className="w-1.5 rounded-t-sm bg-neutral-800 h-[60%] group-hover:bg-cyan-600 transition-colors duration-300 delay-200"></div>
                        <div className="w-1.5 rounded-t-sm bg-neutral-800 h-[80%] group-hover:bg-cyan-400 transition-colors duration-300 delay-300"></div>
                        <div className="w-1.5 rounded-t-sm bg-neutral-800 h-[100%] group-hover:bg-cyan-300 transition-colors duration-300 delay-500"></div>
                    </div>
                </div>
                {/* Metric 4 */}
                <div className="bg-[#050505] p-8 group hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <span className="text-[10px] mono-font uppercase text-rose-500/70 tracking-widest border border-rose-900/30 px-2 py-0.5 rounded bg-rose-900/10">Requests</span>
                        <span className="text-[10px] text-neutral-600 mono-font">/s</span>
                    </div>
                    <div className="text-4xl mono-font text-white mb-6 group-hover:text-rose-200 transition-colors">4.2k</div>
                    <svg className="w-full h-10 text-rose-900/50 group-hover:text-rose-500 transition-colors duration-500 sparkline" stroke="currentColor" fill="none" strokeWidth="1.5">
                        <path d="M0 28 L10 25 L20 28 L30 20 L40 22 L50 15 L60 10 L70 15 L80 5 L90 8 L100 2"></path>
                    </svg>
                </div>
            </div>
        </div>
    </section>
  );
}

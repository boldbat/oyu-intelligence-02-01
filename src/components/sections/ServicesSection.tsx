'use client';

import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesSection() {
    useEffect(() => {
        const gridCells = document.querySelectorAll('.grid-cell');
        gridCells.forEach(cell => {
            ScrollTrigger.create({
                trigger: cell,
                start: "top 85%",
                onEnter: () => cell.classList.add('active')
            });
        });
    }, []);

    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-[#030303] relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between mb-20 items-end">
                    <h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white glow-text">
                        Core Modules
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-neutral-800"></div>
                        <p className="text-sm mono-font text-neutral-500 uppercase mt-4 md:mt-0">
                            [ 01 - 06 ]
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-l border-neutral-800/50">
                    {/* Service 1 */}
                    <div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-24 flex justify-between relative z-10">
                            <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path>
                                </svg>
                            </div>
                            <span className="text-xs mono-font text-neutral-600 group-hover:text-indigo-400">01</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">AI Automation</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                            Automating repetitive tasks, analyzing data, and making intelligent decisions with AI models.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-24 flex justify-between relative z-10">
                             <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
                                </svg>
                            </div>
                            <span className="text-xs mono-font text-neutral-600 group-hover:text-cyan-400">02</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Mobile Apps</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                            Developing beautiful, high-performance iOS and Android applications with Flutter & React Native.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-24 flex justify-between relative z-10">
                            <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                            <span className="text-xs mono-font text-neutral-600 group-hover:text-emerald-400">03</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Web Design</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                            Modern, responsive websites that perfectly represent your brand identity.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-24 flex justify-between relative z-10">
                             <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <span className="text-xs mono-font text-neutral-600 group-hover:text-rose-400">04</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Social Media</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                            Enhancing social presence and connecting with customers through strategic content.
                        </p>
                    </div>

                    {/* Service 5 */}
                    <div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-24 flex justify-between relative z-10">
                            <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <span className="text-xs mono-font text-neutral-600 group-hover:text-purple-400">05</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">SaaS Products</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                            Developing B2B/B2C platforms like Oyu AI, Astro AI, and LookLuxe AI.
                        </p>
                    </div>

                    {/* Service 6 */}
                    <div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-24 flex justify-between relative z-10">
                             <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                </svg>
                            </div>
                            <span className="text-xs mono-font text-neutral-600 group-hover:text-orange-400">06</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">Data Intelligence</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                            Helping businesses understand data patterns and trends with AI algorithms.
                        </p>
                    </div>
            </div>
        </div>
    </section>
    );
}

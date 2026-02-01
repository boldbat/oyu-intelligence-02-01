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
        <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-[#030303] relative">
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
                    <div className="grid-cell p-6 md:p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-12 md:mb-24 flex justify-between relative z-10">
                            <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z opacity-50"></path>
                                    <path d="M12 6v6l4 2"></path>
                                    <path d="M12 2v4"></path>
                                    <circle cx="12" cy="12" r="4" className="opacity-50"></circle>
                                    <path d="M8 12h8" strokeLinecap="round" strokeDasharray="2 2"></path>
                                    <path d="M9.5 9.5L7 7" className="opacity-50"></path>
                                    <path d="M14.5 9.5L17 7" className="opacity-50"></path>
                                    <path d="M14.5 14.5L17 17" className="opacity-50"></path>
                                    <path d="M9.5 14.5L7 17" className="opacity-50"></path>
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
                        <div className="mb-12 md:mb-24 flex justify-between relative z-10">
                             <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
                                    <path d="M12 18h.01"></path>
                                    <path d="M8 6h8" className="opacity-50"></path>
                                    <rect x="9" y="10" width="6" height="4" rx="1" className="opacity-50"></rect>
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
                        <div className="mb-12 md:mb-24 flex justify-between relative z-10">
                            <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M8 21h8"></path>
                                    <path d="M12 17v4"></path>
                                    <path d="M7 8h10" className="opacity-50"></path>
                                    <path d="M7 12h5" className="opacity-50"></path>
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
                        <div className="mb-12 md:mb-24 flex justify-between relative z-10">
                             <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" className="opacity-50"></path>
                                    <path d="M16 16l4 4"></path>
                                    <path d="M20 16l-4 4"></path>
                                </svg>
                            </div>
                            <span className="text-xs mono-font text-neutral-600 group-hover:text-rose-400">04</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 heading-font group-hover:translate-x-2 transition-transform duration-300">AI Content &amp; Automation</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs group-hover:text-neutral-400">
                            Generative AI for video, image, &amp; game assets. Intelligent chatbots &amp; n8n workflow automation.
                        </p>
                    </div>

                    {/* Service 5 */}
                    <div className="grid-cell p-12 border-r border-b border-neutral-800/50 hover:bg-neutral-900/20 transition-colors group hover-trigger cursor-none relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-12 md:mb-24 flex justify-between relative z-10">
                            <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" className="opacity-50"></rect>
                                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
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
                        <div className="mb-12 md:mb-24 flex justify-between relative z-10">
                             <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-300">
                                <svg className="w-6 h-6 text-neutral-400 group-hover:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 20V10"></path>
                                    <path d="M12 20V4"></path>
                                    <path d="M6 20v-6"></path>
                                    <line x1="6" y1="20" x2="18" y2="20" className="opacity-50"></line>
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

'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TerminalSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 md:px-12 bg-[#030303] flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-[#0f0f0f]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="ml-4 text-xs mono-font text-neutral-500 flex-1 text-center">{t('terminal.header')}</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-8 mono-font text-xs md:text-sm text-neutral-300 leading-relaxed min-h-[340px]">
            <div className="mb-4">
              <span className="text-emerald-500">➜</span> <span className="text-indigo-400">~</span> <span className="text-neutral-400">{t('terminal.command')}</span>
            </div>
            <div className="mb-2">
              <span className="text-neutral-600">[14:20:01]</span> <span className="text-white">{t('terminal.loadingSwarm')}</span>
            </div>
            <div className="mb-2 pl-4 border-l border-neutral-800">
              <span className="text-neutral-500">{t('terminal.loading')}:</span> <span className="text-yellow-500">{t('terminal.neuralCore')}</span><br />
              <span className="text-neutral-500">{t('terminal.loading')}:</span> <span className="text-yellow-500">{t('terminal.multiAgentGrid')}</span><br />
              <span className="text-neutral-500">{t('terminal.loading')}:</span> <span className="text-yellow-500">{t('terminal.knowledgeBase')}</span>
            </div>
            <div className="mb-2 mt-4">
              <span className="text-neutral-600">[14:20:04]</span> {t('terminal.connectingRAG')} <span className="text-emerald-500">{t('terminal.connected')}</span>
            </div>
            <div className="mb-2">
              <span className="text-neutral-600">[14:20:05]</span> {t('terminal.optimizingNeural')} <span className="text-emerald-500">{t('terminal.done')}</span>
            </div>
            <div className="mb-6 mt-4">
              <span className="text-neutral-600">[14:20:08]</span> <span className="text-indigo-400 bg-indigo-900/20 px-2 py-0.5 rounded">{t('terminal.systemReady')}</span>
            </div>
            <div className="flex items-center">
              <span className="text-emerald-500 mr-2">➜</span> <span className="text-indigo-400 mr-2">~</span> <span className="animate-blink inline-block w-2.5 h-5 bg-neutral-400"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionTitleLookism from '../components/SectionTitleLookism';
import ComicPanel from '../components/ComicPanel';
import { LOOKISM_SECTIONS, SFX_LABELS } from '../theme/lookismTheme';

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitleLookism 
          episode={LOOKISM_SECTIONS.AWARDS.episode} 
          title={LOOKISM_SECTIONS.AWARDS.title}
        />

        <ComicPanel sfx={SFX_LABELS.IMPACT} glowColor="yellow" className="relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-lookism-accent-yellow opacity-5 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            {/* Trophy Icon */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 bg-gradient-to-br from-lookism-accent-yellow to-lookism-accent-pink flex items-center justify-center text-6xl border-3 border-lookism-accent-yellow animate-pulse-slow">
                🏆
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-lookism-text-main uppercase mb-2">
                    Best Enlistee Award
                  </h3>
                  <div className="inline-block px-4 py-2 bg-lookism-accent-yellow text-lookism-bg-dark font-bold uppercase tracking-wide">
                    Singapore Armed Forces – Combat Engineers
                  </div>
                </div>
                <div className="px-4 py-2 bg-lookism-bg-dark border-3 border-lookism-accent-yellow text-lookism-accent-yellow font-bold uppercase tracking-wide">
                  2023
                </div>
              </div>

              <div className="lookism-speech">
                <p className="text-lg text-lookism-text-main leading-relaxed">
                  Recognized for <span className="font-bold text-lookism-accent-yellow">outstanding performance</span> during 
                  National Service training in the Singapore Armed Forces Combat Engineers unit.
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-lookism-bg-dark border-3 border-lookism-accent-yellow p-4 text-center">
                  <div className="text-3xl mb-2">💪</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-lookism-text-main">Top Training</div>
                </div>
                <div className="bg-lookism-bg-dark border-3 border-lookism-accent-cyan p-4 text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-lookism-text-main">Discipline</div>
                </div>
                <div className="bg-lookism-bg-dark border-3 border-lookism-accent-pink p-4 text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-lookism-text-main">Teamwork</div>
                </div>
                <div className="bg-lookism-bg-dark border-3 border-lookism-accent-purple p-4 text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-lookism-text-main">Initiative</div>
                </div>
              </div>

              <div className="p-4 border-l-6 border-lookism-accent-yellow bg-lookism-bg-dark/50">
                <p className="text-sm text-lookism-text-muted italic">
                  Excellence in both individual contribution and collaborative efforts within a demanding military environment.
                </p>
              </div>
            </div>
          </div>
        </ComicPanel>
      </div>
    </section>
  );
}

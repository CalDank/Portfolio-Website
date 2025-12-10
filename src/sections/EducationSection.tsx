import SectionTitleLookism from '../components/SectionTitleLookism';
import ComicPanel from '../components/ComicPanel';
import NeonAccentText from '../components/NeonAccentText';
import { LOOKISM_SECTIONS, SFX_LABELS } from '../theme/lookismTheme';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitleLookism 
          episode={LOOKISM_SECTIONS.EDUCATION.episode} 
          title={LOOKISM_SECTIONS.EDUCATION.title}
        />

        <ComicPanel sfx={SFX_LABELS.FOCUS} glowColor="yellow">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-lookism-accent-cyan text-lookism-bg-dark flex items-center justify-center text-5xl font-display font-bold">
                🎓
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-lookism-text-main uppercase mb-2">
                    Diploma in Information Technology
                  </h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-lookism-accent-pink to-lookism-accent-purple text-white font-bold uppercase tracking-wide">
                    UI/UX Specialization
                  </div>
                </div>
                <div className="px-4 py-2 bg-lookism-bg-dark border-3 border-lookism-accent-yellow text-lookism-accent-yellow font-bold uppercase tracking-wide whitespace-nowrap">
                  2024 – 2027
                </div>
              </div>

              <div className="lookism-speech">
                <p className="text-lg text-lookism-text-main mb-2">
                  <span className="font-bold text-2xl">Singapore Polytechnic</span>
                </p>
                <p className="text-lookism-text-muted">
                  Comprehensive program covering <NeonAccentText color="cyan">user experience design</NeonAccentText>, 
                  interface design principles, <NeonAccentText color="pink">frontend and backend development</NeonAccentText>, 
                  database management, and software engineering best practices.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-lg font-bold uppercase text-lookism-text-main">Training Progress</span>
                  <span className="font-display text-2xl font-bold text-lookism-accent-cyan">Year 2 / 3</span>
                </div>
                <div className="relative h-8 bg-lookism-bg-dark border-3 border-lookism-border-muted overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-lookism-accent-cyan via-lookism-accent-pink to-lookism-accent-yellow flex items-center justify-end pr-4"
                    style={{ width: '66%' }}
                  >
                    <span className="font-display text-xl font-bold text-lookism-bg-dark">66%</span>
                  </div>
                  <div className="absolute inset-0 speed-lines opacity-20"></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="stat-box-lookism text-center">
                  <div className="font-display text-3xl font-bold text-lookism-accent-cyan mb-1">2/3</div>
                  <div className="text-xs uppercase tracking-wide text-lookism-text-muted">Years</div>
                </div>
                <div className="stat-box-lookism border-lookism-accent-pink text-center">
                  <div className="font-display text-3xl font-bold text-lookism-accent-pink mb-1">UI/UX</div>
                  <div className="text-xs uppercase tracking-wide text-lookism-text-muted">Spec</div>
                </div>
                <div className="stat-box-lookism border-lookism-accent-cyan text-center">
                  <div className="font-display text-3xl font-bold text-lookism-accent-cyan mb-1">IT</div>
                  <div className="text-xs uppercase tracking-wide text-lookism-text-muted">Diploma</div>
                </div>
              </div>
            </div>
          </div>
        </ComicPanel>
      </div>
    </section>
  );
}

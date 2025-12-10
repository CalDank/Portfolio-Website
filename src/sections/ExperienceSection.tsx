import SectionTitleLookism from '../components/SectionTitleLookism';
import ComicPanel from '../components/ComicPanel';
import NeonAccentText from '../components/NeonAccentText';
import { LOOKISM_SECTIONS, SFX_LABELS } from '../theme/lookismTheme';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitleLookism 
          episode={LOOKISM_SECTIONS.EXPERIENCE.episode} 
          title={LOOKISM_SECTIONS.EXPERIENCE.title}
        />

        <ComicPanel sfx={SFX_LABELS.LEVEL_UP} glowColor="pink">
          <div className="space-y-6">
            {/* Job Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 pb-6 border-b-2 border-lookism-border-muted">
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-lookism-text-main uppercase mb-2">
                  Business & Operations Intern
                </h3>
                <div className="inline-block px-4 py-2 bg-lookism-accent-cyan text-lookism-bg-dark font-bold uppercase tracking-wide">
                  Consensusbiz (MM2H) Sdn Bhd
                </div>
              </div>
              <div className="px-4 py-2 bg-lookism-bg-dark border-3 border-lookism-accent-yellow text-lookism-accent-yellow font-bold uppercase tracking-wide">
                Jan 2025 – Present
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-lookism-accent-cyan text-lookism-bg-dark font-display text-2xl font-bold flex items-center justify-center">
                  01
                </div>
                <div className="flex-1 lookism-speech">
                  <p className="text-lookism-text-main">
                    <NeonAccentText color="cyan">Digitized paper-based client records</NeonAccentText> into 
                    structured Google Sheets, establishing a centralized system for managing MM2H application data 
                    and improving data accessibility across the team.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-lookism-accent-pink text-lookism-bg-dark font-display text-2xl font-bold flex items-center justify-center">
                  02
                </div>
                <div className="flex-1 lookism-speech">
                  <p className="text-lookism-text-main">
                    <NeonAccentText color="pink">Improved client information tracking</NeonAccentText> and 
                    document retrieval processes, reducing time spent searching for files and minimizing errors 
                    in record-keeping.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-lookism-accent-yellow text-lookism-bg-dark font-display text-2xl font-bold flex items-center justify-center">
                  03
                </div>
                <div className="flex-1 lookism-speech">
                  <p className="text-lookism-text-main">
                    <NeonAccentText color="yellow">Focused on internal workflow optimization</NeonAccentText>, 
                    implementing systematic approaches to reduce operational errors and increase efficiency in 
                    day-to-day business processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Used */}
            <div className="mt-8 pt-6 border-t-2 border-lookism-border-muted">
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-bold text-lookism-text-muted uppercase tracking-wide mr-2">Tools:</span>
                {['Google Sheets', 'Process Documentation', 'Data Management'].map((tool) => (
                  <span key={tool} className="skill-badge-lookism">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ComicPanel>

        {/* Future placeholder */}
        <div className="mt-8">
          <ComicPanel className="text-center py-12 border-dashed">
            <div className="text-6xl mb-4">⏳</div>
            <p className="font-heading text-2xl font-bold uppercase text-lookism-text-muted">
              To Be Continued...
            </p>
          </ComicPanel>
        </div>
      </div>
    </section>
  );
}

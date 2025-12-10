import SectionTitleLookism from '../components/SectionTitleLookism';
import ComicPanel from '../components/ComicPanel';
import NeonAccentText from '../components/NeonAccentText';
import DynamicDivider from '../components/DynamicDivider';
import { LOOKISM_SECTIONS, SFX_LABELS } from '../theme/lookismTheme';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitleLookism 
          episode={LOOKISM_SECTIONS.ABOUT.episode} 
          title={LOOKISM_SECTIONS.ABOUT.title}
        />

        <ComicPanel sfx={SFX_LABELS.FOCUS} glowColor="cyan">
          <div className="space-y-6">
            {/* Main narration */}
            <div className="lookism-speech">
              <p className="text-lg md:text-xl text-lookism-text-main leading-relaxed">
                I'm currently in my <NeonAccentText color="cyan">second year</NeonAccentText> at{' '}
                <span className="font-bold">Singapore Polytechnic</span>, pursuing a{' '}
                <NeonAccentText color="pink">Diploma in Information Technology</NeonAccentText> with 
                specialization in <span className="font-bold text-lookism-accent-yellow">UI/UX</span>.
              </p>
            </div>

            <div className="lookism-speech">
              <p className="text-lg md:text-xl text-lookism-text-main leading-relaxed">
                My journey isn't just about learning design and code—it's about understanding how systems work 
                and making them <NeonAccentText color="cyan">better</NeonAccentText>, more{' '}
                <NeonAccentText color="pink">efficient</NeonAccentText>, and more{' '}
                <NeonAccentText color="yellow">user-friendly</NeonAccentText>.
              </p>
            </div>

            <DynamicDivider variant="simple" />

            {/* Character traits grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-lookism-bg-dark border-l-6 border-lookism-accent-cyan p-6">
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-heading text-xl font-bold text-lookism-text-main uppercase mb-2">Approach</div>
                <p className="text-sm text-lookism-text-muted">
                  Combining user-centered design with practical full-stack development skills
                </p>
              </div>

              <div className="bg-lookism-bg-dark border-l-6 border-lookism-accent-pink p-6">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-heading text-xl font-bold text-lookism-text-main uppercase mb-2">Mindset</div>
                <p className="text-sm text-lookism-text-muted">
                  Operations-focused from real-world business experience at MM2H consultancy
                </p>
              </div>

              <div className="bg-lookism-bg-dark border-l-6 border-lookism-accent-yellow p-6">
                <div className="text-4xl mb-3">🚀</div>
                <div className="font-heading text-xl font-bold text-lookism-text-main uppercase mb-2">Drive</div>
                <p className="text-sm text-lookism-text-muted">
                  Rapid prototyping, iterative feedback, and systematic process improvement
                </p>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="mt-8 p-6 border-l-6 border-lookism-accent-pink bg-lookism-bg-dark/50">
              <p className="text-lg text-lookism-text-main italic">
                "Great software is built through thoughtful design AND systematic execution."
              </p>
            </div>
          </div>
        </ComicPanel>
      </div>
    </section>
  );
}

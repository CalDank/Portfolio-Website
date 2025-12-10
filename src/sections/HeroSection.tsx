import ComicPanel from '../components/ComicPanel';
import NeonAccentText from '../components/NeonAccentText';
import SFXTag from '../components/SFXTag';
import { SFX_LABELS } from '../theme/lookismTheme';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(92, 225, 230, 0.1) 0%, transparent 50%)',
      }}
    >
      {/* Background urban effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-lookism-bg-dark to-transparent"></div>
      </div>

      {/* SFX Tags */}
      <div className="absolute top-32 left-8 animate-pulse-slow">
        <SFXTag label={SFX_LABELS.WHOOSH} variant="cyan" />
      </div>
      <div className="absolute top-40 right-12 animate-pulse-slow" style={{ animationDelay: '1s' }}>
        <SFXTag label={SFX_LABELS.POWER} variant="pink" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Episode Badge */}
            <div className="inline-block px-6 py-3 bg-lookism-bg-dark border-3 border-lookism-accent-cyan text-lookism-accent-cyan font-display text-2xl font-bold uppercase tracking-widest">
              Episode 1
            </div>

            {/* Name */}
            <div>
              <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-lookism-text-main mb-4">
                CALVIN
                <br />
                <span className="text-lookism-accent-cyan">DANKER</span>
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-lookism-accent-cyan to-lookism-accent-pink"></div>
            </div>

            {/* Tagline */}
            <div className="lookism-speech">
              <p className="text-xl md:text-2xl font-medium text-lookism-text-main leading-relaxed">
                <NeonAccentText color="cyan">IT Student</NeonAccentText> with a passion for{' '}
                <NeonAccentText color="pink">design and technology</NeonAccentText>.
                <br />
                Year-2 UI/UX Specialization at Singapore Polytechnic.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="btn-lookism-primary"
              >
                Read My Story
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-lookism-secondary"
              >
                Contact
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="stat-box-lookism">
                <div className="text-3xl font-display font-bold text-lookism-accent-yellow mb-1">02</div>
                <div className="text-xs uppercase tracking-wide text-lookism-text-muted">Year</div>
              </div>
              <div className="stat-box-lookism border-lookism-accent-cyan">
                <div className="text-3xl font-display font-bold text-lookism-accent-cyan mb-1">UI/UX</div>
                <div className="text-xs uppercase tracking-wide text-lookism-text-muted">Focus</div>
              </div>
              <div className="stat-box-lookism border-lookism-accent-pink">
                <div className="text-3xl font-display font-bold text-lookism-accent-pink mb-1">JB</div>
                <div className="text-xs uppercase tracking-wide text-lookism-text-muted">Location</div>
              </div>
            </div>
          </div>

          {/* Character Panel */}
          <div className="relative flex justify-center lg:justify-end">
            <ComicPanel glowColor="cyan" className="bg-lookism-bg-dark p-0 overflow-hidden w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <div className="relative w-full h-full">
                <img 
                  src="/Calvin.png" 
                  alt="Calvin Jarrod Danker" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lookism-bg-dark via-transparent to-transparent pointer-events-none"></div>
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-lookism-accent-cyan"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-lookism-accent-pink"></div>
              </div>
            </ComicPanel>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-lookism-accent-cyan to-transparent mb-2"></div>
            <div className="text-lookism-accent-cyan text-sm uppercase tracking-widest font-heading">Scroll</div>
          </div>
        </div>
      </div>
    </section>
  );
}

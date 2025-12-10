import SectionTitleLookism from '../components/SectionTitleLookism';
import ComicPanel from '../components/ComicPanel';
import NeonAccentText from '../components/NeonAccentText';
import { LOOKISM_SECTIONS, SFX_LABELS } from '../theme/lookismTheme';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitleLookism 
          episode={LOOKISM_SECTIONS.CONTACT.episode} 
          title={LOOKISM_SECTIONS.CONTACT.title}
        />

        <ComicPanel sfx={SFX_LABELS.CLICK} glowColor="cyan">
          <div className="space-y-8">
            {/* Author's Message */}
            <div className="lookism-speech text-center py-8">
              <p className="text-2xl md:text-3xl font-heading font-bold text-lookism-text-main uppercase mb-4">
                Thanks for Reading
              </p>
              <p className="text-lg text-lookism-text-main leading-relaxed max-w-3xl mx-auto">
                I'm currently open to <NeonAccentText color="cyan">internship opportunities</NeonAccentText> in{' '}
                <NeonAccentText color="pink">tech</NeonAccentText>,{' '}
                <NeonAccentText color="yellow">UX</NeonAccentText>, or operations.
                Let's connect and build something great together.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Location */}
              <div className="bg-lookism-bg-dark border-l-6 border-lookism-accent-cyan p-6 hover:shadow-lookism-glow-cyan transition-all duration-200">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="font-heading text-xl font-bold uppercase text-lookism-text-main mb-2">Location</h3>
                <p className="text-lookism-text-muted">
                  Johor Bahru, Johor
                  <br />
                  Malaysia
                </p>
              </div>

              {/* Phone */}
              <div className="bg-lookism-bg-dark border-l-6 border-lookism-accent-pink p-6 hover:shadow-lookism-glow-pink transition-all duration-200">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="font-heading text-xl font-bold uppercase text-lookism-text-main mb-2">Phone</h3>
                <a
                  href="tel:+60190700513"
                  className="text-lookism-accent-pink hover:text-lookism-accent-cyan font-semibold transition-colors"
                >
                  +60 19 070 0513
                </a>
              </div>

              {/* Email */}
              <div className="bg-lookism-bg-dark border-l-6 border-lookism-accent-yellow p-6 hover:shadow-lookism-glow-yellow transition-all duration-200">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-heading text-xl font-bold uppercase text-lookism-text-main mb-2">Email</h3>
                <a
                  href="mailto:calvindanker@gmail.com"
                  className="text-lookism-accent-cyan hover:text-lookism-accent-pink font-semibold transition-colors break-all"
                >
                  calvindanker@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <a
                href="mailto:calvindanker@gmail.com"
                className="btn-lookism-primary inline-block"
              >
                Send Message
              </a>
            </div>

            {/* Final Note */}
            <div className="mt-12 p-6 border-3 border-lookism-accent-cyan bg-lookism-bg-dark text-center">
              <p className="font-heading text-xl font-bold uppercase text-lookism-text-main mb-2">
                End of Episode 7
              </p>
              <p className="text-lookism-text-muted">
                More chapters coming soon...
              </p>
            </div>
          </div>
        </ComicPanel>
      </div>
    </section>
  );
}

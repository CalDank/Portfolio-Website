import { useState, useEffect } from 'react';
import { LOOKISM_SECTIONS } from '../theme/lookismTheme';

const navItems = [
  LOOKISM_SECTIONS.HERO,
  LOOKISM_SECTIONS.ABOUT,
  LOOKISM_SECTIONS.EXPERIENCE,
  LOOKISM_SECTIONS.SKILLS,
  LOOKISM_SECTIONS.EDUCATION,
  LOOKISM_SECTIONS.AWARDS,
  LOOKISM_SECTIONS.CONTACT,
];

export default function NavbarLookism() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-lookism-bg-dark/95 backdrop-blur-md border-b-3 border-lookism-accent-cyan shadow-lookism' 
          : 'bg-lookism-bg-dark/80 backdrop-blur-sm border-b-3 border-lookism-border-muted'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-display text-3xl font-bold tracking-wider text-lookism-text-main hover:text-lookism-accent-cyan transition-colors relative group"
          >
            <span className="relative z-10">CALVIN</span>
            <div className="absolute inset-0 bg-lookism-accent-cyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-lookism-accent-cyan border-b-3 border-lookism-accent-cyan'
                    : 'text-lookism-text-muted hover:text-lookism-text-main hover:border-b-3 hover:border-lookism-border-muted'
                }`}
              >
                <span className="hidden xl:inline">{item.episode}</span>
                <span className="xl:hidden">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 border-2 border-lookism-accent-cyan text-lookism-accent-cyan hover:bg-lookism-accent-cyan hover:text-lookism-bg-dark transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t-2 border-lookism-border-muted">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 font-heading text-sm uppercase tracking-wide transition-all border-l-6 ${
                  activeSection === item.id
                    ? 'bg-lookism-bg-panel text-lookism-accent-cyan border-lookism-accent-cyan'
                    : 'text-lookism-text-muted border-transparent hover:border-lookism-accent-cyan hover:text-lookism-text-main'
                }`}
              >
                {item.episode}: {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}


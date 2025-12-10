import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Episode 1', shortLabel: 'Intro' },
  { id: 'about', label: 'Episode 2', shortLabel: 'Backstory' },
  { id: 'experience', label: 'Episode 3', shortLabel: 'Experience' },
  { id: 'skills', label: 'Episode 4', shortLabel: 'Skills' },
  { id: 'education', label: 'Episode 5', shortLabel: 'Education' },
  { id: 'awards', label: 'Episode 6', shortLabel: 'Achievements' },
  { id: 'contact', label: 'Author Notes', shortLabel: 'Contact' },
];

export default function Navbar() {
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
          ? 'bg-white border-b-3 border-webtoon-border shadow-comic' 
          : 'bg-white/95 backdrop-blur-sm border-b-3 border-webtoon-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-display text-xl md:text-2xl font-bold bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent hover:from-mint-600 hover:to-lavender-600 transition-all"
          >
            Calvin's Story
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full font-display font-semibold text-sm transition-all duration-300 border-2 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-mint-400 to-sky-400 text-white border-gray-800 shadow-comic'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-mint-400 hover:text-mint-600'
                }`}
              >
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">{item.shortLabel}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-gray-800 hover:bg-mint-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
          <div className="md:hidden py-4 border-t-2 border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-display font-semibold transition-all mb-2 border-2 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-mint-400 to-sky-400 text-white border-gray-800'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-mint-400'
                }`}
              >
                {item.label}: {item.shortLabel}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

import NavbarLookism from './components/NavbarLookism';
import FooterLookism from './components/FooterLookism';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import AwardsSection from './sections/AwardsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-lookism-bg overflow-x-hidden">
      <NavbarLookism />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <FooterLookism />
    </div>
  );
}

export default App;

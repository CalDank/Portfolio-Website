import SectionTitleLookism from '../components/SectionTitleLookism';
import ComicPanel from '../components/ComicPanel';
import DynamicDivider from '../components/DynamicDivider';
import { LOOKISM_SECTIONS, SFX_LABELS } from '../theme/lookismTheme';

export default function SkillsSection() {
  const currentStack = ['React Native (Expo)', 'NestJS', 'TypeScript', 'PostgreSQL'];

  const skillCategories = [
    { title: 'UX & Design', skills: ['User Flows', 'Wireframing', 'Prototyping (Figma)', 'Heuristic Reviews', 'Usability Testing'] },
    { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React Native (Expo)', 'Basic React'] },
    { title: 'Backend Basics', skills: ['Node.js', 'Express', 'RESTful APIs', 'JWT Auth', 'bcrypt'] },
    { title: 'Databases', skills: ['MySQL', 'PostgreSQL', 'Schema Design', 'Stored Procedures'] },
    { title: 'Data & BI', skills: ['Power BI', 'Dashboards', 'Data Visualization'] },
    { title: 'Tools & Tech', skills: ['Git/GitHub', 'VS Code', 'Prisma ORM', 'NestJS Familiarity'] },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitleLookism 
          episode={LOOKISM_SECTIONS.SKILLS.episode} 
          title={LOOKISM_SECTIONS.SKILLS.title}
        />

        {/* Current Tech Stack - Highlight */}
        <ComicPanel 
          title="CURRENT TECH STACK" 
          sfx={SFX_LABELS.POWER}
          glowColor="cyan" 
          className="mb-12 bg-gradient-to-br from-lookism-bg-dark to-lookism-bg-panel"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {currentStack.map((tech) => (
              <div 
                key={tech}
                className="px-6 py-4 bg-lookism-bg-dark border-3 border-lookism-accent-cyan text-lookism-accent-cyan font-heading text-xl font-bold uppercase tracking-wide hover:bg-lookism-accent-cyan hover:text-lookism-bg-dark transition-all duration-200 hover:scale-110"
              >
                {tech}
              </div>
            ))}
          </div>
        </ComicPanel>

        <DynamicDivider variant="speed" />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = ['cyan', 'pink', 'yellow'];
            const color = colors[index % 3];
            const borderColors = {
              cyan: 'border-lookism-accent-cyan',
              pink: 'border-lookism-accent-pink',
              yellow: 'border-lookism-accent-yellow',
            };

            return (
              <div 
                key={category.title}
                className={`bg-lookism-bg-panel border-l-6 ${borderColors[color as keyof typeof borderColors]} p-6 hover:shadow-lookism transition-all duration-200`}
              >
                <h3 className="font-heading text-2xl font-bold text-lookism-text-main uppercase mb-4 tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge-lookism">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <div className="inline-block px-8 py-4 bg-lookism-bg-dark border-3 border-lookism-accent-pink text-lookism-accent-pink font-heading text-2xl font-bold uppercase tracking-widest">
            Always Leveling Up
          </div>
        </div>
      </div>
    </section>
  );
}

import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export default function Section({ 
  id, 
  title, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-webtoon-bg',
    gradient: 'bg-gradient-to-b from-mint-50 to-lavender-50',
  };

  return (
    <section
      id={id}
      className={`py-20 px-4 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="episode-title text-center mb-12">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

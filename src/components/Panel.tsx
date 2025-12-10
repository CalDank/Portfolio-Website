import { ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'character' | 'achievement';
  pattern?: 'dots' | 'lines' | 'none';
}

export default function Panel({ 
  children, 
  className = '', 
  variant = 'default',
  pattern = 'none' 
}: PanelProps) {
  const variantClasses = {
    default: 'comic-panel',
    gradient: 'comic-panel bg-gradient-to-br from-mint-50 via-sky-50 to-lavender-50',
    character: 'character-card',
    achievement: 'achievement-badge',
  };
  
  const patternClasses = {
    dots: 'panel-dots',
    lines: 'panel-lines',
    none: '',
  };

  return (
    <div className={`${variantClasses[variant]} ${patternClasses[pattern]} ${className}`}>
      {children}
    </div>
  );
}

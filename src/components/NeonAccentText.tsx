import { ReactNode } from 'react';

interface NeonAccentTextProps {
  children: ReactNode;
  color?: 'cyan' | 'pink' | 'yellow';
  className?: string;
}

export default function NeonAccentText({ 
  children, 
  color = 'cyan',
  className = '' 
}: NeonAccentTextProps) {
  const colorClasses = {
    cyan: 'neon-cyan',
    pink: 'neon-pink',
    yellow: 'neon-yellow',
  };

  return (
    <span className={`${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
}


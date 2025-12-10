import { ReactNode } from 'react';
import SFXTag from './SFXTag';
import { SFXLabel } from '../theme/lookismTheme';

interface ComicPanelProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  sfx?: SFXLabel;
  className?: string;
  fullWidth?: boolean;
  glowColor?: 'cyan' | 'pink' | 'yellow' | 'none';
}

export default function ComicPanel({ 
  children, 
  title, 
  subtitle, 
  sfx,
  className = '',
  fullWidth = false,
  glowColor = 'none'
}: ComicPanelProps) {
  const glowClasses = {
    cyan: 'hover:shadow-lookism-glow-cyan',
    pink: 'hover:shadow-lookism-glow-pink',
    yellow: 'hover:shadow-lookism-glow-yellow',
    none: '',
  };

  return (
    <div className={`lookism-panel ${glowClasses[glowColor]} ${fullWidth ? 'w-full' : 'max-w-6xl mx-auto'} ${className}`}>
      {/* SFX Tag */}
      {sfx && (
        <div className="absolute -top-4 -right-4 z-10">
          <SFXTag label={sfx} />
        </div>
      )}
      
      {/* Title Section */}
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h3 className="lookism-section-title mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-lookism-text-muted text-lg font-medium uppercase tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
      
      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-lookism-accent-cyan opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-lookism-accent-pink opacity-50"></div>
    </div>
  );
}


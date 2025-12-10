import { SFXLabel } from '../theme/lookismTheme';

interface SFXTagProps {
  label: SFXLabel;
  variant?: 'pink' | 'cyan' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
}

export default function SFXTag({ label, variant = 'pink', size = 'md' }: SFXTagProps) {
  const variantClasses = {
    pink: 'border-lookism-accent-pink text-lookism-accent-pink',
    cyan: 'border-lookism-accent-cyan text-lookism-accent-cyan',
    yellow: 'border-lookism-accent-yellow text-lookism-accent-yellow',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-lg px-4 py-2',
    lg: 'text-2xl px-6 py-3',
  };

  return (
    <div className={`lookism-sfx ${variantClasses[variant]} ${sizeClasses[size]} animate-pulse-slow`}>
      {label}
    </div>
  );
}


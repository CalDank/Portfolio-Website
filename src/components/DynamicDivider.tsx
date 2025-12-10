interface DynamicDividerProps {
  variant?: 'speed' | 'impact' | 'simple';
}

export default function DynamicDivider({ variant = 'speed' }: DynamicDividerProps) {
  if (variant === 'speed') {
    return (
      <div className="relative my-16 h-2 overflow-hidden">
        <div className="absolute inset-0 speed-lines"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lookism-accent-cyan to-transparent opacity-50"></div>
      </div>
    );
  }
  
  if (variant === 'impact') {
    return (
      <div className="relative my-16 flex items-center justify-center">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lookism-accent-pink to-transparent"></div>
        <div className="relative z-10 px-4 bg-lookism-bg">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-lookism-accent-pink rotate-45 animate-pulse"></div>
            <div className="w-2 h-2 bg-lookism-accent-cyan rotate-45 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-lookism-accent-yellow rotate-45 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }
  
  // Simple variant
  return <div className="lookism-divider"></div>;
}


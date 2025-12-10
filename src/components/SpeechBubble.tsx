import { ReactNode } from 'react';

interface SpeechBubbleProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'thought' | 'narration';
}

export default function SpeechBubble({ 
  children, 
  className = '',
  variant = 'default' 
}: SpeechBubbleProps) {
  if (variant === 'thought') {
    return (
      <div className={`relative bg-lavender-50 border-3 border-lavender-400 rounded-3xl p-6 shadow-speech ${className}`}>
        {children}
        <div className="absolute -bottom-2 left-8 flex gap-1">
          <div className="w-4 h-4 bg-lavender-50 border-3 border-lavender-400 rounded-full"></div>
          <div className="w-3 h-3 bg-lavender-50 border-2 border-lavender-400 rounded-full"></div>
          <div className="w-2 h-2 bg-lavender-50 border-2 border-lavender-400 rounded-full"></div>
        </div>
      </div>
    );
  }
  
  if (variant === 'narration') {
    return (
      <div className={`bg-gradient-to-r from-yellow-100 to-yellow-200 border-3 border-yellow-400 rounded-lg p-6 shadow-comic ${className}`}>
        <div className="font-comic italic text-gray-800">
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div className={`speech-bubble ${className}`}>
      {children}
    </div>
  );
}

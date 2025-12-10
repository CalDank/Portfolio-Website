import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'comic' | 'gradient';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variantClasses = {
    default: 'bg-white rounded-lg shadow-md p-6',
    comic: 'comic-panel',
    gradient: 'bg-gradient-to-br from-mint-50 to-lavender-50 rounded-2xl p-6 border-3 border-webtoon-border shadow-comic',
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

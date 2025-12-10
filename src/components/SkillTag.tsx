interface SkillTagProps {
  children: string;
  variant?: 'mint' | 'lavender' | 'pink' | 'sky';
}

export default function SkillTag({ children, variant = 'lavender' }: SkillTagProps) {
  const variantClasses = {
    mint: 'bg-gradient-to-r from-mint-200 to-mint-300 border-mint-400 text-mint-900',
    lavender: 'bg-gradient-to-r from-lavender-200 to-lavender-300 border-lavender-400 text-lavender-900',
    pink: 'bg-gradient-to-r from-pink-200 to-pink-300 border-pink-400 text-pink-900',
    sky: 'bg-gradient-to-r from-sky-200 to-sky-300 border-sky-400 text-sky-900',
  };

  return (
    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border-2 mr-2 mb-2 transition-transform duration-200 hover:scale-110 ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

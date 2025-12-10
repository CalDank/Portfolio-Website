interface SectionTitleLookismProps {
  episode: string;
  title: string;
}

export default function SectionTitleLookism({ episode, title }: SectionTitleLookismProps) {
  return (
    <div className="text-center mb-16 relative">
      {/* Background accent lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-lookism-accent-cyan to-transparent"></div>
      </div>
      
      {/* Episode Badge */}
      <div className="relative z-10 mb-6">
        <div className="inline-block px-6 py-2 bg-lookism-bg-dark border-3 border-lookism-accent-cyan text-lookism-accent-cyan font-heading text-xl font-bold uppercase tracking-widest">
          {episode}
        </div>
      </div>
      
      {/* Main Title */}
      <h2 className="lookism-episode-title relative z-10">
        {title}
      </h2>
      
      {/* Decorative speed lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-lookism-accent-cyan via-transparent to-lookism-accent-pink opacity-30 transform -translate-y-1/2"></div>
    </div>
  );
}


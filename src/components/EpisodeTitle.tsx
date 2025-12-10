interface EpisodeTitleProps {
  episode: number;
  title: string;
  subtitle?: string;
}

export default function EpisodeTitle({ episode, title, subtitle }: EpisodeTitleProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block bg-gradient-to-r from-mint-500 to-sky-500 text-white px-6 py-2 rounded-full font-display font-bold text-lg mb-4 border-3 border-gray-800 shadow-comic">
        Episode {episode}
      </div>
      <h2 className="episode-title">{title}</h2>
      {subtitle && (
        <p className="episode-subtitle">{subtitle}</p>
      )}
    </div>
  );
}

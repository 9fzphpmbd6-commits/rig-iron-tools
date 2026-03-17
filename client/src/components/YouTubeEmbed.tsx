import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lazy-loaded YouTube embed with privacy-enhanced mode.
 * Shows a thumbnail + play button; loads the iframe only on click.
 * Uses youtube-nocookie.com to minimize tracking cookies.
 */
export function YouTubeEmbed({
  videoId,
  title = "Watch demo video",
  className = "",
}: {
  videoId: string;
  title?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (loaded) {
    return (
      <div className={`relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          data-testid="youtube-iframe"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={`group block relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      aria-label={`Play: ${title}`}
      data-testid="button-play-video"
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
          <Play className="w-7 h-7 text-white ml-1" fill="white" />
        </div>
        <span className="text-white text-xs font-medium tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
          Watch Demo
        </span>
      </div>

      {/* YouTube attribution */}
      <div className="absolute bottom-2 right-2">
        <svg viewBox="0 0 90 20" className="w-16 h-auto opacity-50">
          <rect rx="4" width="90" height="20" fill="#FF0000" />
          <text x="45" y="14.5" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">
            YouTube
          </text>
        </svg>
      </div>
    </button>
  );
}

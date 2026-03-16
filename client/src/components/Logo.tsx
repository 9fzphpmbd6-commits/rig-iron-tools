export function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "hero" }) {
  const isHero = size === "hero";
  const svgSize = isHero ? 56 : 36;
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Texas Hole Makers">
      <svg 
        width={svgSize} 
        height={svgSize} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer circle — steel ring */}
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2.5" className="stroke-primary" opacity="0.3" />
        
        {/* Texas Lone Star */}
        <path 
          d="M32 6 L37.5 23.5 L56 23.5 L41 34 L46.5 52 L32 41 L17.5 52 L23 34 L8 23.5 L26.5 23.5 Z" 
          className="fill-primary" 
          opacity="0.15"
        />
        <path 
          d="M32 6 L37.5 23.5 L56 23.5 L41 34 L46.5 52 L32 41 L17.5 52 L23 34 L8 23.5 L26.5 23.5 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="stroke-primary" 
          fill="none"
          strokeLinejoin="round"
        />
        
        {/* Drill bit — vertical through the star center */}
        <rect x="29.5" y="14" width="5" height="32" rx="2.5" className="fill-primary" />
        
        {/* Drill bit flutes / spiral marks */}
        <line x1="29.5" y1="22" x2="34.5" y2="20" stroke="currentColor" strokeWidth="1.5" className="stroke-secondary" />
        <line x1="29.5" y1="28" x2="34.5" y2="26" stroke="currentColor" strokeWidth="1.5" className="stroke-secondary" />
        <line x1="29.5" y1="34" x2="34.5" y2="32" stroke="currentColor" strokeWidth="1.5" className="stroke-secondary" />
        <line x1="29.5" y1="40" x2="34.5" y2="38" stroke="currentColor" strokeWidth="1.5" className="stroke-secondary" />

        {/* Drill bit tip — pointed triangle */}
        <path d="M29.5 46 L32 52 L34.5 46" className="fill-primary" />
        
        {/* Drill bit chuck — top block */}
        <rect x="28" y="12" width="8" height="4" rx="1" className="fill-primary" />

        {/* Sparks from drilling */}
        <line x1="24" y1="36" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" strokeLinecap="round" />
        <line x1="22" y1="32" x2="18" y2="31" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" strokeLinecap="round" />
        <line x1="40" y1="36" x2="44" y2="38" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" strokeLinecap="round" />
        <line x1="42" y1="32" x2="46" y2="31" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" strokeLinecap="round" />
      </svg>
      
      {isHero ? (
        <div className="flex flex-col">
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-none">
            <span className="text-primary">TEXAS</span>
          </span>
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight leading-none">
            <span className="text-foreground">HOLE</span>{" "}
            <span className="text-primary">MAKERS</span>
          </span>
        </div>
      ) : (
        <span className="font-display text-lg font-bold tracking-tight">
          <span className="text-primary">Texas</span>{" "}
          <span className="text-foreground">Hole</span>{" "}
          <span className="text-primary">Makers</span>
        </span>
      )}
    </div>
  );
}

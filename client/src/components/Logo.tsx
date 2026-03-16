export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Rig Iron Tools">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="32" height="32" rx="4" className="fill-secondary dark:fill-secondary" />
        <path d="M8 16 L16 8 L24 16 L16 24 Z" stroke="currentColor" strokeWidth="2.5" className="stroke-primary" fill="none" />
        <circle cx="16" cy="16" r="3" className="fill-primary" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight">
        <span className="text-foreground">Rig Iron</span>{" "}
        <span className="text-primary">Tools</span>
      </span>
    </div>
  );
}

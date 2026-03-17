export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Texas Hole Makers">
      <img 
        src="/images/mascot.png" 
        alt="" 
        className="w-9 h-9 object-contain object-top rounded-full border-2 border-primary/30"
        aria-hidden="true"
      />
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-primary">Texas</span>{" "}
        <span className="text-foreground">Hole Makers</span>
      </span>
    </div>
  );
}

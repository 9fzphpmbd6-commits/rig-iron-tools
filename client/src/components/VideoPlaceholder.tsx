import { Play } from "lucide-react";

export function VideoPlaceholder({
  title = "Tool in action",
  subtitle = "Drop in your reel or demo video here.",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-video bg-secondary/10 rounded-lg border border-dashed border-border flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
        <Play className="w-6 h-6 text-primary" />
      </div>
      <div className="text-center px-4">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

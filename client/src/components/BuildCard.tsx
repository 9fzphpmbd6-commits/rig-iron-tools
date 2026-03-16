import { MapPin, Eye, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import type { FeaturedBuild } from "@/data/featuredBuilds";

export function BuildCard({ build }: { build: FeaturedBuild }) {
  const toolNames = build.toolsUsed
    .map((id) => products.find((p) => p.id === id)?.name)
    .filter(Boolean);

  return (
    <div className="bg-card border border-card-border rounded-lg p-5 space-y-3 hover:shadow-md transition-shadow" data-testid={`card-build-${build.id}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-sm">{build.projectTitle}</h3>
          <p className="text-xs text-muted-foreground font-medium">{build.companyName}</p>
        </div>
        {build.badge && (
          <Badge variant="outline" className="text-xs shrink-0 gap-1">
            <Award className="w-3 h-3" />
            {build.badge}
          </Badge>
        )}
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="w-3.5 h-3.5" />
        {build.location}
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed">{build.shortDescription}</p>

      {/* Tools used */}
      <div className="flex flex-wrap gap-1">
        {toolNames.map((name) => (
          <Badge key={name} variant="secondary" className="text-xs font-normal">
            {name}
          </Badge>
        ))}
      </div>

      {/* Engagement bar */}
      <div className="flex items-center gap-2 pt-1">
        <Eye className="w-3.5 h-3.5 text-muted-foreground" />
        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${Math.min((build.views / 600) * 100, 100)}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground font-medium">{build.views} crews viewed</span>
      </div>
    </div>
  );
}

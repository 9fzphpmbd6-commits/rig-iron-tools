import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BuildCard } from "@/components/BuildCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredBuilds } from "@/data/featuredBuilds";
import { useToast } from "@/hooks/use-toast";
import { Award, MapPin, Hash, Camera, X } from "lucide-react";
import { SITE } from "@/data/siteConfig";

const allBadges = [...new Set(featuredBuilds.map((b) => b.badge).filter(Boolean))] as string[];
const allLocations = [...new Set(featuredBuilds.map((b) => b.location))];

export default function FeaturedBuilds() {
  const [badgeFilter, setBadgeFilter] = useState<string | null>(null);
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const { toast } = useToast();

  const filtered = featuredBuilds.filter((b) => {
    if (badgeFilter && b.badge !== badgeFilter) return false;
    if (locationFilter && b.location !== locationFilter) return false;
    return true;
  });

  function handleBuildSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowSubmitModal(false);
    toast({ title: "Thanks", description: "We'll review your build soon." });
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Featured Builds" }]} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-xl font-bold">Featured Builds</h1>
          <p className="text-sm text-muted-foreground mt-1">Real projects from Texas crews using Rig Iron tools.</p>
        </div>
        <Button onClick={() => setShowSubmitModal(true)} className="gap-1.5" data-testid="button-submit-build">
          <Camera className="w-4 h-4" />
          Submit Your Build
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-xs text-muted-foreground font-medium self-center mr-1">Filter:</span>
        {allBadges.map((badge) => (
          <Button
            key={badge}
            variant={badgeFilter === badge ? "default" : "outline"}
            size="sm"
            onClick={() => setBadgeFilter(badgeFilter === badge ? null : badge)}
            className="gap-1 text-xs"
          >
            <Award className="w-3 h-3" />
            {badge}
          </Button>
        ))}
        {allLocations.map((loc) => (
          <Button
            key={loc}
            variant={locationFilter === loc ? "default" : "outline"}
            size="sm"
            onClick={() => setLocationFilter(locationFilter === loc ? null : loc)}
            className="gap-1 text-xs"
          >
            <MapPin className="w-3 h-3" />
            {loc}
          </Button>
        ))}
        {(badgeFilter || locationFilter) && (
          <Button variant="ghost" size="sm" onClick={() => { setBadgeFilter(null); setLocationFilter(null); }} className="text-xs text-destructive gap-1">
            <X className="w-3 h-3" /> Clear
          </Button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((build) => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No builds match your filters.</p>
      )}

      {/* Social strip */}
      <div className="mt-10 p-6 bg-accent/30 rounded-xl border border-border text-center space-y-3">
        <Hash className="w-6 h-6 text-primary mx-auto" />
        <h3 className="font-semibold text-sm">Most recent posts tagged {SITE.brandHashtag}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-muted rounded-lg border border-dashed border-border flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Social embed widget</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Social embed integration coming soon.</p>
      </div>

      {/* Submit modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-card-border p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">Submit Your Build</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowSubmitModal(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Want your crew's work featured here? Tell us about your project.</p>
            <form onSubmit={handleBuildSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <input type="email" required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Project Description</label>
                <textarea required rows={3} className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tools Used</label>
                <input placeholder="e.g. Elite 50, SITEH3RO 3-Piece Kit" className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Link to Photos or Video</label>
                <input type="url" placeholder="https://..." className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
              </div>
              <Button type="submit" className="w-full">Submit Build</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

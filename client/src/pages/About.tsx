import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Store, Target, MapPin, Wrench } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "About" }]} />

      <div className="space-y-8 py-6">
        <div className="space-y-3">
          <h1 className="font-display text-2xl font-bold">About Rig Iron Tools</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We're a niche power-tool store focused on two things: Unibor SITEH3RO impact-ready tools and Unibor magnetic drills. That's it. No ten-thousand-item catalog, no generic product pages. Just the tools Texas steel crews actually use, presented clearly with real specs and honest descriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Why Just Two Product Lines?",
              text: "Most industrial distributors bury good tools in a sea of listings. We stock SITEH3RO tools and Unibor mag drills because they're what we know and what our crews trust. Focused expertise means better support for you.",
            },
            {
              icon: MapPin,
              title: "Texas Roots",
              text: "Based in Texas, serving steel erectors, fabricators, bridge crews, and plant maintenance teams across the state and beyond. We understand the work because we're close to it.",
            },
            {
              icon: Store,
              title: "Independent Retailer",
              text: "Rig Iron Tools is an independent retailer. Unibor and SITEH3RO are trademarks of their respective owners. We're authorized to sell their products and stand behind everything in our catalog.",
            },
            {
              icon: Wrench,
              title: "Built for Crews",
              text: "Our Yard Crew member program, Featured Builds hall, and crew-focused pricing reflect how steel work actually happens — in teams, on deadlines, with tools that can't fail.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-card-border rounded-lg p-5 space-y-2">
              <item.icon className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-sm">{item.title}</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

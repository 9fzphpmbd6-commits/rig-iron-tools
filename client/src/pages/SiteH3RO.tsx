import { getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Zap, Shield, Wrench, Award, Layers, Target } from "lucide-react";
import { Link } from "wouter";

const siteh3roProducts = getProductsByCategory("siteh3ro");

export default function SiteH3RO() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            PTIA 2025 Tool Innovation Award Winner
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Make Your Impact Wrench Do the Heavy{" "}
            <span className="text-primary">Lifting</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mb-8">
            Drill new holes, expand, thread, and align — all from your 1/2" or 3/4" impact wrench.{" "}
            <strong>Connect. Click. GO.</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-display font-bold text-sm uppercase tracking-wider hover:opacity-90 transition">
              Shop the Range
            </a>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
            {[
              { value: "75%", label: "Longer Tool Life" },
              { value: "20×", label: "Faster Than Hand Tapping" },
              { value: "$0", label: "Shipping on Kits" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-secondary-foreground/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT IT DOES ===== */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
            What Your Impact Wrench Can Do Now
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "New Holes", desc: "Drill new holes in thin gauge material from 1/8\" to 1-3/8\" with Step Drills and Step Reamers." },
              { icon: Target, title: "Expand Holes", desc: "Expand and clean out existing holes across all major bolt sizes." },
              { icon: Wrench, title: "Thread Holes", desc: "Cut threads up to 20× faster than hand tapping. 8 UNC sizes in material up to 1/2\" thick." },
              { icon: Layers, title: "Align Holes", desc: "Align mismatched bolt holes on site quickly and safely. 13 major diameter sizes." },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONNECT CLICK GO ===== */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Simple as 1-2-3</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Connect. Click. GO.</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Connect", desc: "Attach the SITEH3RO™ holder to your 1/2\" or 3/4\" impact wrench. Quick-release mechanism locks on in seconds.", icon: Wrench },
              { step: "2", title: "Click", desc: "Pull, insert your chosen cutting tool — step drill, reamer, or tap — and lock it into the holder.", icon: Zap },
              { step: "3", title: "GO", desc: "Start drilling, expanding, threading, or aligning. Smooth, easy cut with the SITEH3RO™ high-performance coating.", icon: Shield },
            ].map((item) => (
              <div key={item.step} className="relative bg-card rounded-xl p-6 shadow-sm">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                  {item.step}
                </div>
                <div className="mt-4 mb-3">
                  <item.icon className="w-8 h-8 text-primary mx-auto" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY SITEH3RO FEATURES ===== */}
      <section className="py-16 sm:py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider text-center mb-2">Why SITEH3RO</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">Engineered for the Job Site</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "75% Longer Tool Life", desc: "The proprietary SITEH3RO™ coating is high-temperature tested to 356°F, giving you dramatically extended tool life compared to standard alternatives." },
              { title: "Impact Wrench Powered", desc: "No more switching tools on site. The SITEH3RO™ system works with your existing 1/2\" or 3/4\" impact wrench — the tool already in your hand." },
              { title: "20× Faster Threading", desc: "Thread holes up to 20 times faster than hand tapping. The spiral point machine taps are a one-tap solution for holes from 1/4\" to 1\" UNC." },
              { title: "Full Range Coverage", desc: "From 1/8\" to 1-3/8\" diameter holes. Step Drills, Step Reamers, Car Reamers, and Taps cover every major bolt size you'll encounter." },
              { title: "Smooth, Easy Cut", desc: "Spiral flute technology across the range delivers faster, cleaner cuts with less vibration. Works on structural steel up to 1/2\" thick." },
              { title: "Save More with Texas Hole Makers", desc: "Get the same award-winning SITEH3RO™ tools at lower prices. Plus free shipping on kits and 15% off with Yard Crew membership." },
            ].map((f) => (
              <div key={f.title} className="space-y-2">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: "SITEH3RO" }]} />

        {/* Mini hero banner */}
        <div className="bg-secondary text-secondary-foreground rounded-xl p-6 sm:p-10 mb-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <h1 className="font-display text-2xl sm:text-3xl font-bold">SITEH3RO Tools</h1>
            </div>
            <p className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed">
              Impact-wrench ready step reamers, step drills, car reamers, and taps — all with the proprietary SITEH3RO coating for up to 75% longer tool life. From individual tools to the complete Ultimate Kit.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: Shield, text: "75% longer tool life" },
                { icon: Wrench, text: "Impact-wrench compatible" },
                { icon: Zap, text: "Covers common bolt sizes" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          {siteh3roProducts.length} SITEH3RO products
        </p>

        <ProductGrid products={siteh3roProducts} />
      </section>
    </div>
  );
}
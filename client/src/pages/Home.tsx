import { Link } from "wouter";
import { ArrowRight, Zap, Magnet, Store, Truck, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MembershipBanner } from "@/components/MembershipBanner";
import { EmailCapture } from "@/components/EmailCapture";
import { BuildCard } from "@/components/BuildCard";
import { getFeaturedProducts } from "@/data/products";
import { featuredBuilds } from "@/data/featuredBuilds";
import { ProductCard } from "@/components/ProductCard";
import { SITE } from "@/data/siteConfig";

const featured = getFeaturedProducts().slice(0, 4);
const previewBuilds = featuredBuilds.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }} />
        </div>

        {/* Decorative stars */}
        <div className="absolute -right-20 -top-20 opacity-[0.04] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 64 64" fill="currentColor">
            <path d="M32 2 L39 22 L60 22 L43 35 L49 56 L32 43 L15 56 L21 35 L4 22 L25 22 Z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left side — text content */}
            <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
              {/* Brand name */}
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                  <span className="text-primary">TEXAS</span><br />
                  <span className="text-secondary-foreground">HOLE MAKERS</span>
                </h1>
              </div>

              {/* Primary slogan */}
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-primary italic">
                "{SITE.tagline}"
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg text-secondary-foreground/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Texas-tough SITEH3RO and magnetic drill tools for steel erectors, fabricators, and crews who don't mess around.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link href="/siteh3ro">
                  <Button size="lg" className="gap-2 font-semibold text-base px-6" data-testid="button-shop-siteh3ro">
                    <Zap className="w-5 h-5" />
                    Shop SITEH3RO Tools
                  </Button>
                </Link>
                <Link href="/magnetic-drills">
                  <Button size="lg" variant="outline" className="gap-2 font-semibold text-base px-6 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" data-testid="button-shop-magdrills">
                    <Magnet className="w-5 h-5" />
                    Shop Magnetic Drills
                  </Button>
                </Link>
              </div>

              {/* Secondary slogan */}
              <p className="text-sm text-secondary-foreground/40 italic">
                {SITE.secondaryTagline}
              </p>
            </div>

            {/* Right side — mascot */}
            <div className="flex-shrink-0 order-1 lg:order-2 relative">
              <div className="relative w-[280px] sm:w-[320px] lg:w-[400px]">
                <img 
                  src="/images/mascot.png" 
                  alt="Texas Hole Makers mascot" 
                  className="w-full h-auto drop-shadow-2xl"
                />
                {/* Glow effect behind mascot */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-primary rounded-full scale-75" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-x-8 gap-y-1 text-xs sm:text-sm font-medium">
          <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-current" /> Texas-Based</span>
          <span>Fast Shipping</span>
          <span>Unibor Authorized</span>
          <span className="hidden sm:inline">Impact-Ready SITEH3RO</span>
        </div>
      </div>

      {/* Quick category tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SITEH3RO tile */}
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold">SITEH3RO Impact-Ready Tools</h2>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                Up to 75% longer tool life with proprietary coating
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                Hex-shank for impact wrenches — no adapters
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                Step reamers, step drills, car reamers, taps, and kits
              </li>
            </ul>
            <Link href="/siteh3ro">
              <Button variant="outline" className="gap-1.5">
                Browse SITEH3RO <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Magnetic Drills tile */}
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Magnet className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold">Magnetic Drills</h2>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                Sheffield-designed Elite, Professional, and Commando ranges
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                Smart Controls, DrillSmart, and LiftShield technology
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                From budget-friendly to heavy-duty 75mm capacity
              </li>
            </ul>
            <Link href="/magnetic-drills">
              <Button variant="outline" className="gap-1.5">
                Browse Mag Drills <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why buy here strip */}
      <section className="border-y border-border bg-accent/30 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Store, title: "Texas-Focused Niche", desc: "We sell two things well, not 10,000 things poorly." },
              { icon: Zap, title: "Impact-Ready SITEH3RO", desc: "75% longer tool life. Hex-shank. Built for your impact wrench." },
              { icon: Magnet, title: "Curated Mag Drills", desc: "Unibor Elite, Pro, and Commando — the full range, one place." },
              { icon: Truck, title: "Fast Shipping", desc: "5–10 business days from US warehouses. Transparent tracking." },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-2">
                <item.icon className="w-6 h-6 text-primary mx-auto" />
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-xl font-bold">Featured Tools</h2>
            <p className="text-sm text-muted-foreground mt-1">Top picks from our SITEH3RO and mag drill catalog.</p>
          </div>
          <Link href="/products">
            <Button variant="ghost" size="sm" className="gap-1 text-primary">
              View all <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Video reel spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="font-display text-xl font-bold mb-2">See These Tools in Action</h2>
        <p className="text-sm text-muted-foreground mb-6">Drop in your demo reels and product videos.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "SITEH3RO Step Reamer Demo",
            "Elite 50 Mag Drill Reel",
            "SITEH3RO Ultimate Kit Unboxing",
            "Commando 40 On-Site Test",
          ].map((title) => (
            <div key={title} className="relative aspect-video bg-secondary/10 rounded-lg border border-dashed border-border flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium">{title}</p>
              <p className="text-xs text-muted-foreground">Drop in your video here</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership banner */}
      <MembershipBanner />

      {/* Featured Builds preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-xl font-bold">Featured Builds from Texas Crews</h2>
            <p className="text-sm text-muted-foreground mt-1">Real projects, real tools, real work.</p>
          </div>
          <Link href="/featured-builds">
            <Button variant="ghost" size="sm" className="gap-1 text-primary">
              See all builds <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {previewBuilds.map((build) => (
            <div key={build.id} className="min-w-[280px] sm:min-w-0">
              <BuildCard build={build} />
            </div>
          ))}
        </div>
      </section>

      {/* Email capture */}
      <EmailCapture />
    </div>
  );
}

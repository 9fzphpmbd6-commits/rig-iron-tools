import { Link } from "wouter";
import { Logo } from "./Logo";
import { SITE } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Logo className="text-secondary-foreground [&_span]:text-secondary-foreground [&_.fill-primary]:fill-primary" />
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="text-xs text-secondary-foreground/50">
              Serving crews across Texas &amp; beyond
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/siteh3ro" className="hover:text-primary transition-colors">SITEH3RO Tools</Link></li>
              <li><Link href="/magnetic-drills" className="hover:text-primary transition-colors">Magnetic Drills</Link></li>
              <li><Link href="/featured-builds" className="hover:text-primary transition-colors">Featured Builds</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/members" className="hover:text-primary transition-colors">The Yard Crew</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping &amp; Returns</Link></li>
              <li><Link href="/warranty" className="hover:text-primary transition-colors">Warranty</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { name: "TikTok", href: SITE.social.tiktok, icon: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.11-.59-1.61-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.01 1.52-.02 3.04-.02 4.55-.89-.28-1.89-.16-2.66.31-.54.33-.97.83-1.22 1.41-.2.44-.26.93-.24 1.4.11 1.34 1.18 2.58 2.49 2.82.64.14 1.33.08 1.93-.18.7-.33 1.22-.97 1.46-1.7.08-.3.15-.63.14-.95.03-3.26.01-6.52.01-9.78 0-1.24-.01-2.49.01-3.73z" },
                { name: "Instagram", href: SITE.social.instagram, icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "YouTube", href: SITE.social.youtube, icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                { name: "X", href: SITE.social.x, icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-secondary-foreground/50 text-center sm:text-left">
            Texas Hole Makers — an independent retailer. Unibor and SITEH3RO trademarks belong to their respective owners.
          </p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-secondary-foreground/40 hover:text-secondary-foreground/60 transition-colors"
          >
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, Menu, X, User, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/products", label: "All Products" },
  { href: "/siteh3ro", label: "SITEH3RO" },
  { href: "/magnetic-drills", label: "Magnetic Drills" },
  { href: "/accessories", label: "Accessories" },
  { href: "/featured-builds", label: "Featured Builds" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [location] = useLocation();

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <>
      {/* Promo ribbon */}
      <div className="bg-secondary text-secondary-foreground text-center text-sm py-2 px-4">
        🔩 <strong>Yard Crew Lifetime</strong> — $25 one-time, 15% off every order + FREE shipping forever.{" "}
        <Link href="/members" className="underline font-semibold hover:text-primary">
          Join now
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" data-testid="link-home">
              <Logo />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                  data-testid={`link-${link.href.slice(1)}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                data-testid="button-search"
                className="hidden sm:flex"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Dark mode toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                data-testid="button-theme"
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Members */}
              <Link href="/members">
                <Button variant="ghost" size="sm" className="hidden sm:flex gap-1.5" data-testid="link-members">
                  <User className="h-4 w-4" />
                  <span>Sign in</span>
                </Button>
              </Link>

              {/* Cart — opens Snipcart sidebar */}
              <Button
                variant="ghost"
                size="icon"
                className="snipcart-checkout relative"
                data-testid="button-cart"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="snipcart-items-count absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold min-w-[1.25rem] h-5 rounded-full flex items-center justify-center px-1 empty:hidden" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
                data-testid="button-mobile-menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search SITEH3RO tools, magnetic drills..."
                  className="w-full pl-10 pr-4 py-2.5 bg-accent/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  data-testid="input-search"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border bg-background px-4 py-3 space-y-1" data-testid="nav-mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                  location === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/members"
              className="block px-3 py-2.5 text-sm font-medium text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Sign in / Join The Yard Crew
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

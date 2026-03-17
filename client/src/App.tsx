import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { usePageTracking } from "@/hooks/usePageTracking";
import { Footer } from "@/components/Footer";
import { DrillbitDebbie } from "@/components/DrillbitDebbie";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import SiteH3RO from "@/pages/SiteH3RO";
import MagneticDrills from "@/pages/MagneticDrills";
import Members from "@/pages/Members";
import FeaturedBuilds from "@/pages/FeaturedBuilds";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Cart from "@/pages/Cart";
import Shipping from "@/pages/Shipping";
import Warranty from "@/pages/Warranty";
import NotFound from "@/pages/not-found";

function AppRouter() {
  usePageTracking();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/:slug" component={ProductDetail} />
      <Route path="/siteh3ro" component={SiteH3RO} />
      <Route path="/magnetic-drills" component={MagneticDrills} />
      <Route path="/members" component={Members} />
      <Route path="/featured-builds" component={FeaturedBuilds} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/warranty" component={Warranty} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router hook={useHashLocation}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <AppRouter />
            </main>
            <Footer />
          </div>
          <DrillbitDebbie />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

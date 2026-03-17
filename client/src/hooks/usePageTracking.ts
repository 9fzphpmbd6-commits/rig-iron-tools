import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a Google Analytics page_view event on every hash-route change.
 * This is needed because hash routing doesn't trigger automatic GA page views.
 */
export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-XBF0RTXVVP", {
        page_path: location,
        page_title: document.title,
      });
    }
  }, [location]);
}

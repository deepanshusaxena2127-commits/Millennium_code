/* src/lib/analytics.js */

/**
 * SPA pageview tracking
 * Safe to call even if GA is not loaded
 */
export function pageview(path) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path
    });
  }
}

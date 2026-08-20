// Google Analytics 4 for a client-side routed SPA.
//
// Tracking runs only in production builds, so no
// development traffic is recorded.
// React Router changes the URL without a page load, so the initial page_view
// is disabled here and every view (including the first) is sent manually.

// GA4 measurement IDs are public by design (they are visible in the page
// source of every site that uses them), so the production ID lives here.
// VITE_GA_ID can override it, and tracking stays off in local development so
// dev traffic never reaches the property.
const GA_ID = import.meta.env.VITE_GA_ID || (import.meta.env.PROD ? 'G-KSFWY6XB9W' : '')
let initialized = false

export function initAnalytics() {
  if (initialized || !GA_ID || typeof window === 'undefined') return
  initialized = true

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  // send_page_view: false — we emit page views ourselves on every route change.
  gtag('config', GA_ID, { send_page_view: false })
}

export function trackPageView(path) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

/** Track a conversion or any custom interaction, e.g. trackEvent('cta_click', { location: 'hero' }) */
export function trackEvent(name, params = {}) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', name, params)
}

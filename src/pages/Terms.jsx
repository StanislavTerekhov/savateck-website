import { useEffect } from 'react'

// The canonical Terms of Service is served as a standalone static page at
// /terms (rewritten to /terms.html). If this React route is ever reached via
// client-side navigation, send the user to the canonical document.
export default function Terms() {
  useEffect(() => {
    window.location.replace('/terms.html')
  }, [])
  return null
}

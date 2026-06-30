import { useEffect } from 'react'

// The canonical Privacy Policy is served as a standalone static page at
// /privacy (rewritten to /privacy.html). If this React route is ever reached
// via client-side navigation, send the user to the canonical document.
export default function Privacy() {
  useEffect(() => {
    window.location.replace('/privacy.html')
  }, [])
  return null
}

// Official-style "Download on the App Store" badge (self-contained SVG, no
// external asset). Sized to match the adjacent Join/Login buttons (40px tall)
// via the `appstore-badge` class; links to the App Store URL in a new tab.
export default function AppStoreBadge({ href, label = 'Download on the App Store' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="appstore-badge"
    >
      <svg viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <rect width="130" height="40" rx="8" fill="#000" />
        {/* Apple logo */}
        <path
          fill="#fff"
          transform="translate(13 9.4) scale(0.0475)"
          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
        />
        <text x="41" y="15.5" fill="#fff" fontFamily="-apple-system, Helvetica, Arial, sans-serif" fontSize="6.5" letterSpacing="0.3">Download on the</text>
        <text x="40.5" y="31" fill="#fff" fontFamily="-apple-system, Helvetica, Arial, sans-serif" fontSize="15.5" fontWeight="600" letterSpacing="-0.3">App Store</text>
      </svg>
    </a>
  )
}

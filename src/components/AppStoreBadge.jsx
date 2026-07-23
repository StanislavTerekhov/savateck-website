// Official-style "Download on the App Store" badge (self-contained SVG, no
// external asset). Links to the given App Store URL in a new tab.
export default function AppStoreBadge({ href, label = 'Download on the App Store' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ display: 'inline-block', lineHeight: 0 }}
    >
      <svg
        width="150"
        height="50"
        viewBox="0 0 120 40"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
        style={{ display: 'block', width: '100%', maxWidth: 168, height: 'auto' }}
      >
        <rect width="120" height="40" rx="6.5" fill="#000" />
        <rect x="0.5" y="0.5" width="119" height="39" rx="6" fill="none" stroke="#A6A6A6" strokeWidth="0.6" opacity="0.5" />
        {/* Apple logo */}
        <path
          fill="#fff"
          transform="translate(10.5 9) scale(0.052)"
          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
        />
        <text x="42" y="16" fill="#fff" fontFamily="-apple-system, Helvetica, Arial, sans-serif" fontSize="7" letterSpacing="0.4">Download on the</text>
        <text x="41.5" y="31" fill="#fff" fontFamily="-apple-system, Helvetica, Arial, sans-serif" fontSize="16.5" fontWeight="600" letterSpacing="-0.3">App Store</text>
      </svg>
    </a>
  )
}

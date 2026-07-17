import { Helmet } from 'react-helmet-async'

const SITE = 'https://savateck.com'
const DEFAULT_IMG = `${SITE}/og-image.png`

/**
 * Per-route SEO tags. Sets title, description, canonical, and Open Graph /
 * Twitter Card meta so each page has its own metadata and link preview.
 */
export default function Seo({ title, description, path = '/', image = DEFAULT_IMG }) {
  const url = `${SITE}${path}`
  const fullTitle = title ? `${title} — SAVATECK` : 'SAVATECK — Intelligent Software. Modern Business.'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SAVATECK" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

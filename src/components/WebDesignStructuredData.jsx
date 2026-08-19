import { Helmet } from 'react-helmet-async'

// Structured data for the web design service. Everything described here is
// visible on the page itself (packages, prices, service areas), which is what
// Google's structured-data guidelines require.
const AREAS = [
  'Los Angeles', 'Granada Hills', 'Northridge', 'Van Nuys', 'Sherman Oaks',
  'Burbank', 'Glendale', 'Pasadena', 'Santa Monica', 'Long Beach',
  'Woodland Hills', 'San Fernando Valley',
]

const OFFERS = [
  ['Landing Page Design', 1500, 'A single high-converting page with mobile-first design, lead form, click-to-call and Google Business Profile setup.'],
  ['Business Website Development', 3500, 'A complete website of up to seven pages with online booking, reviews, local SEO and analytics.'],
  ['Web Application & E-commerce Development', 8000, 'Custom software with user accounts, Stripe payments, an admin panel and third-party integrations.'],
  ['Website Care Plan', 150, 'Monthly hosting, domain management, security updates, content changes, uptime monitoring and reporting.'],
]

const service = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SAVATECK — Web Design & Development',
  url: 'https://savateck.com/web-design',
  image: 'https://savateck.com/og-image.png',
  description:
    'SAVATECK designs and builds fast, mobile-first websites and web applications for service businesses in Los Angeles, with online booking, payments and local SEO included.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16384 Buchet Drive',
    addressLocality: 'Granada Hills',
    addressRegion: 'CA',
    postalCode: '91344',
    addressCountry: 'US',
  },
  areaServed: AREAS.map(name => ({ '@type': 'City', name })),
  serviceType: [
    'Web design',
    'Website development',
    'Landing page design',
    'E-commerce development',
    'Web application development',
    'Local SEO',
    'Website maintenance',
  ],
  parentOrganization: { '@type': 'Organization', name: 'SAVATECK', url: 'https://savateck.com' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web design and development services',
    itemListElement: OFFERS.map(([name, price, description]) => ({
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: String(price),
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: price,
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false,
      },
      itemOffered: { '@type': 'Service', name, description },
    })),
  },
}

export default function WebDesignStructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(service)}</script>
    </Helmet>
  )
}

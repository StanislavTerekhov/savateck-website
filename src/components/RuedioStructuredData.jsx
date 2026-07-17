import { Helmet } from 'react-helmet-async'

// Rich structured data for the Ruedio service — helps Google surface the page
// for car-care / car-wash / detailing / mobile-mechanic queries, incl. local.
// Prices mirror the backend service catalog (starting prices, USD).
const SERVICES = [
  ['Mobile Car Detailing', 45],
  ['Mobile Car Wash', 45],
  ['Mobile Oil Change', 49],
  ['Mobile Tire Change', 45],
  ['Car Battery Replacement', 39],
  ['Mobile Mechanic Visit', 59],
  ['Auto Electrical Service', 79],
  ['Roadside Assistance', 39],
  ['Vehicle Inspection', 69],
]

const AREAS = [
  'Los Angeles', 'Orange County', 'San Diego', 'San Francisco Bay Area',
  'Inland Empire', 'Sacramento', 'Long Beach', 'Anaheim', 'Irvine',
  'Santa Ana', 'Pasadena', 'Glendale', 'Burbank', 'Santa Monica',
  'Beverly Hills', 'Torrance',
]

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'On-demand mobile car care',
  name: 'Ruedio — On-Demand Car Care',
  url: 'https://savateck.com/ruedio',
  image: 'https://savateck.com/og-image.png',
  description:
    'Ruedio is an on-demand mobile car-care marketplace. Book a verified pro for car wash, detailing, oil change, tires, battery, a mobile mechanic, roadside assistance, and more — they come to you.',
  provider: { '@type': 'Organization', name: 'SAVATECK', url: 'https://savateck.com' },
  areaServed: AREAS.map((name) => ({ '@type': 'City', name })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Car care services',
    itemListElement: SERVICES.map(([name, price]) => ({
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: String(price),
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: price,
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false,
      },
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Ruedio come to my location?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ruedio is a mobile, on-demand service. A verified pro comes to you — at home, at work, or wherever your car is parked.',
      },
    },
    {
      '@type': 'Question',
      name: 'What car care services does Ruedio offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobile car wash and detailing, oil changes, tire changes, battery replacement, mobile mechanic visits, auto electrical, roadside assistance, and vehicle inspections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Ruedio available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ruedio operates across California, including Los Angeles, Orange County, San Diego, the San Francisco Bay Area, the Inland Empire, and Sacramento, with more areas coming soon.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a mobile car wash or detailing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices start from about $39–$45 depending on the service, and you see the price before you book. Your card is only charged after the service is completed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Ruedio providers verified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every provider is identity- and document-verified before they can accept work, and every job can be rated.',
      },
    },
  ],
}

export default function RuedioStructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(service)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </Helmet>
  )
}

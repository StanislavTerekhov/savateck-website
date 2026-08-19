import { Radio, ClipboardCheck } from 'lucide-react'
import Seo from '../components/Seo'
import AppStoreBadge from '../components/AppStoreBadge'

const products = [
  {
    key: 'ruedio',
    icon: Radio,
    title: 'Ruedio',
    tag: 'Car Care — Customer App',
    desc: 'Book professional car care that comes to you: mobile detailing and washing, oil changes, tire and battery service, mobile mechanic visits, roadside assistance, and vehicle inspections. Choose a service, set your location, get matched with a verified local pro, track their arrival in real time, and pay securely — your card is only charged after the job is complete.',
    join: '/ruedio/app/auth?mode=signup',
    login: '/ruedio/app/auth?mode=signin',
    appStore: 'https://apps.apple.com/us/app/ruedio/id6770315163',
  },
  {
    key: 'ruedioTask',
    icon: ClipboardCheck,
    title: 'Ruedio Task',
    tag: 'Car Care — Provider App',
    desc: 'The professional app for mobile car-care providers. Complete a quick identity and document verification, choose the cities you serve, receive job requests from nearby customers, accept the ones that fit your schedule, navigate to the customer, and get paid automatically — with transparent earnings and no shifts.',
    join: '/ruedio-task/app/auth?mode=signup',
    login: '/ruedio-task/app/auth?mode=signin',
    appStore: 'https://apps.apple.com/us/app/ruedio-task/id6773075233',
  },
]

export default function Home() {
  return (
    <div className="home-page">
      <Seo
        path="/"
        description="SAVATECK is a California software company building and operating Ruedio — an on-demand car-care marketplace that connects drivers with verified local professionals who come to them."
      />
      <section className="home-simple">
        <div className="container">
          <div className="home-simple-hero">
            <h1>SAVATECK</h1>
            <p>
              SAVATECK is a California software company. We build and operate Ruedio — an
              on-demand car-care marketplace that connects drivers with verified local
              professionals who come to them, wherever their vehicle is parked.
            </p>
          </div>

          <div className="home-simple-products">
            {products.map(({ key, icon: Icon, title, tag, desc, join, login, appStore }) => (
              <div className="home-simple-card" key={key}>
                <span className="home-product-icon"><Icon size={26} /></span>
                <span className="home-simple-tag">{tag}</span>
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="home-simple-actions">
                  <a href={join} className="btn btn-primary">Join</a>
                  <a href={login} className="btn btn-secondary">Login</a>
                  {appStore && (
                    <AppStoreBadge href={appStore} label={`Download ${title} on the App Store`} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Plain-language explanation of the company and product. Also gives
              crawlers and reviewers substantive on-page content about what we do. */}
          <div className="home-about">
            <h2>What We Do</h2>
            <p>
              Car care in the United States still means booking an appointment, driving to a
              shop, and waiting. Ruedio replaces that with an on-demand marketplace: customers
              request a service from the Ruedio app, and an independent, verified professional
              travels to the vehicle and performs the work on site.
            </p>
            <p>
              Ruedio is a two-sided platform. Customers use the <strong>Ruedio</strong> app to
              book services, follow the provider on a live map, message them in the app, pay
              securely, and rate the completed job. Independent professionals use the{' '}
              <strong>Ruedio Task</strong> app to get verified, select the cities they work in,
              accept nearby jobs, and receive automatic payouts. SAVATECK operates the
              marketplace, verifies every provider, and earns a service fee on each completed
              transaction.
            </p>
            <p>
              Services available through the platform include mobile detailing and car washing,
              oil changes, tire changes, battery replacement, mobile mechanic visits, auto
              electrical work, roadside assistance, and vehicle inspections. Ruedio currently
              operates in California, with additional markets planned.
            </p>
            <p>
              Alongside the marketplace, SAVATECK develops its own internal technology, including
              Aspid AI — an in-house AI analytics and marketing-intelligence product used to
              operate and grow the platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

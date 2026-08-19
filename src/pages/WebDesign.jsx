import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, Gauge, MapPin, Rocket, ShieldCheck, Smartphone, Wrench,
} from 'lucide-react'
import Seo from '../components/Seo'

const packages = [
  {
    name: 'Landing Page',
    price: 'from $1,500',
    blurb: 'One focused page built to turn visitors into calls and bookings.',
    items: [
      'Single high-converting page',
      'Mobile-first design',
      'Lead form and click-to-call',
      'Google Business Profile setup',
      'Live in about 1 week',
    ],
  },
  {
    name: 'Business Website',
    price: 'from $3,500',
    blurb: 'A complete site for a service business that needs to be found and booked.',
    featured: true,
    items: [
      'Up to 7 pages',
      'Online booking or quote requests',
      'Reviews and gallery sections',
      'Local SEO for your service area',
      'Analytics and tracking',
      'Live in 2–3 weeks',
    ],
  },
  {
    name: 'Web App / E-commerce',
    price: 'from $8,000',
    blurb: 'Custom software: accounts, payments, dashboards, integrations.',
    items: [
      'User accounts and dashboards',
      'Stripe payments and checkout',
      'Admin panel for your team',
      'Third-party integrations',
      'Built to scale',
    ],
  },
]

const steps = [
  { icon: MapPin, title: 'Free audit', text: 'We review your current site and local search presence, then send you a short written plan — no charge.' },
  { icon: Rocket, title: 'Proposal', text: 'Fixed scope, fixed price, clear timeline. Work starts with a 50% deposit.' },
  { icon: Wrench, title: 'Build', text: 'We build in weekly sprints and show you a live preview every week.' },
  { icon: Check, title: 'Launch & care', text: 'We publish, connect analytics, and keep it running with an optional care plan.' },
]

const reasons = [
  { icon: ShieldCheck, title: 'We ship real products', text: 'We built and launched Ruedio and Ruedio Task — two live iOS apps with payments, real-time dispatch, and a full backend. Your site is built by a product team, not a template shop.' },
  { icon: Smartphone, title: 'Mobile-first, always', text: 'Most local searches happen on a phone. Every page is designed for mobile first, then scaled up to desktop.' },
  { icon: Gauge, title: 'Built to convert', text: 'Lead forms, click-to-call, booking, and tracking are part of the build — not an afterthought.' },
  { icon: MapPin, title: 'Local SEO included', text: 'Google Business Profile, structured data, and location pages so nearby customers actually find you.' },
]

export default function WebDesign() {
  return (
    <div className="wd-page">
      <Seo
        title="Website Design & Development for Local Business"
        path="/web-design"
        description="SAVATECK builds fast, mobile-first websites for service businesses in Los Angeles — with booking, payments, and local SEO built in. Free website audit."
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="wd-hero">
        <div className="container wd-hero-inner">
          <div className="wd-hero-copy">
            <span className="wd-eyebrow">Web Design &amp; Development · Los Angeles</span>
            <h1>Websites that bring you customers — not just compliments.</h1>
            <p>
              We design, build, and launch fast, mobile-first websites for service businesses.
              Booking, payments, and local SEO are built in — so your site actually generates calls.
            </p>
            <div className="wd-hero-actions">
              <Link to="/contact" className="btn btn-primary">Contact us <ArrowRight size={16} /></Link>
              <a href="#packages" className="btn btn-secondary">See pricing</a>
            </div>
          </div>

          <div className="wd-hero-card">
            <div className="wd-hero-card-head">
              <span className="wd-dot" /><span className="wd-dot" /><span className="wd-dot" />
            </div>
            <div className="wd-hero-card-body">
              <div className="wd-stat"><strong>1 week</strong><small>Landing page live</small></div>
              <div className="wd-stat"><strong>2–3 weeks</strong><small>Full business site</small></div>
              <div className="wd-stat"><strong>100%</strong><small>You own everything</small></div>
              <div className="wd-stat"><strong>$0</strong><small>Website audit</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────────────── */}
      <section className="wd-section">
        <div className="container">
          <div className="wd-section-head">
            <h2>Why work with us</h2>
            <p>We are a product company that also builds websites — that difference shows up in the result.</p>
          </div>
          <div className="wd-grid-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div className="wd-card" key={title}>
                <span className="wd-icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────────────── */}
      <section className="wd-section wd-section-alt" id="packages">
        <div className="container">
          <div className="wd-section-head">
            <h2>Straightforward pricing</h2>
            <p>Fixed scope, fixed price. No hourly surprises.</p>
          </div>
          <div className="wd-grid-3">
            {packages.map(p => (
              <div className={`wd-pkg${p.featured ? ' wd-pkg-featured' : ''}`} key={p.name}>
                {p.featured && <span className="wd-pkg-badge">Most popular</span>}
                <h3>{p.name}</h3>
                <div className="wd-pkg-price">{p.price}</div>
                <p className="wd-pkg-blurb">{p.blurb}</p>
                <ul>
                  {p.items.map(i => (
                    <li key={i}><Check size={15} /> {i}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'} wd-pkg-btn`}>
                  Get a quote
                </Link>
              </div>
            ))}
          </div>
          <p className="wd-care">
            <strong>Care Plan — from $150/month.</strong> Hosting, updates, small changes,
            monitoring, and a monthly report. Optional, cancel anytime.
          </p>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="wd-section">
        <div className="container">
          <div className="wd-section-head">
            <h2>How it works</h2>
            <p>Four steps from first call to a website that works for you.</p>
          </div>
          <div className="wd-grid-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div className="wd-step" key={title}>
                <span className="wd-step-num">{i + 1}</span>
                <span className="wd-icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="wd-final">
            <h2>Ready to get more customers online?</h2>
            <Link to="/contact" className="btn btn-primary">Contact us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

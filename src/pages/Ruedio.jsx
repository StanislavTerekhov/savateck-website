import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'

const SERVICES = [
  { name: 'Mobile Detailing',     desc: 'Full exterior wash, interior deep clean, polish and sealant — at your location.' },
  { name: 'Oil Change',           desc: 'Conventional or full synthetic oil and filter replacement, on-site.' },
  { name: 'Tire Change',          desc: 'Single flat swap, full set replacement, or seasonal tire rotation.' },
  { name: 'Battery Replacement',  desc: 'Battery test, jump start, or full replacement — no tow truck needed.' },
  { name: 'Mechanic Visit',       desc: 'OBD-II diagnostic scan and on-site repairs by a certified mechanic.' },
  { name: 'Auto Electrical',      desc: 'Wiring faults, sensor replacements, and full electrical diagnostics.' },
  { name: 'Roadside Assistance',  desc: 'Jump starts, fuel delivery, and lockout service — wherever you are.' },
  { name: 'Car Inspection',       desc: 'Pre-purchase, safety, or annual vehicle health check with a full report.' },
]

export default function Ruedio() {
  function handleGoToRuedio() {
    window.location.href = '/ruedio/app/'
  }

  return (
    <div className="halla-crm-page">
      <Seo
        title="Ruedio — On-Demand Car Care"
        path="/ruedio"
        description="Book a mobile car wash, detailer, or mechanic who comes to you. Track your pro in real time and pay securely. Ruedio brings professional car care to your door in California."
      />

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner" style={{ alignItems: 'flex-start' }}>
            <div className="page-hero-text fade-up" style={{ maxWidth: 640 }}>
              <span className="label">On-Demand Platform</span>
              <h1>Your car, cared for.<br />At your location.</h1>
              <p>
                Ruedio connects you with vetted automotive professionals who come directly to you —
                no garage visits, no waiting rooms. Book any car service in minutes, track your
                provider in real time, and pay securely in-app.
              </p>
              <ul className="feature-list">
                {[
                  'Book in under 2 minutes',
                  'Live GPS tracking of your provider',
                  'Vetted, background-checked professionals',
                  'Secure in-app payments via Stripe',
                ].map(item => (
                  <li key={item}>
                    <span className="check"><Check size={12} /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="hero-actions" style={{ marginTop: 36 }}>
                <button onClick={handleGoToRuedio} className="btn btn-primary">
                  Go Ruedio <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-sm" id="services">
        <div className="container">
          <div className="section-title">
            <span className="label">What we cover</span>
            <h2>Every service your car needs.</h2>
            <p>From routine maintenance to emergency roadside help — one app, one booking flow.</p>
          </div>
          <div className="feature-strip-inner" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {SERVICES.map(({ name, desc }) => (
              <div className="feature-item" key={name} style={{ borderTop: '2px solid var(--border)', paddingTop: 20 }}>
                <h4 style={{ marginBottom: 8 }}>{name}</h4>
                <p style={{ fontSize: '0.875rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="label">How it works</span>
            <h2>Three steps from request to done.</h2>
          </div>
          <div className="hcrm-roles-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { step: '01', title: 'Choose a service', desc: 'Pick what your car needs, select a package tier, and optionally choose a specific provider from the list nearby.' },
              { step: '02', title: 'Set location & time', desc: 'Enter your address — home, office, parking lot. Pick a time slot today or schedule up to 7 days ahead.' },
              { step: '03', title: 'Track & relax',      desc: 'Watch your provider travel to you on the map. Chat if needed. Payment is held until the job is complete.' },
            ].map(({ step, title, desc }) => (
              <div className="card hcrm-role-card" key={step}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--muted)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>{step}</div>
                <h3 style={{ marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mission">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 16, display: 'block' }}>Ready?</span>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>Open the app and book your first service.</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto 36px' }}>
            Create an account in seconds. Your first booking takes under 2 minutes.
          </p>
          <button onClick={handleGoToRuedio} className="btn" style={{ background: '#fff', color: '#000' }}>
            Go Ruedio <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  )
}

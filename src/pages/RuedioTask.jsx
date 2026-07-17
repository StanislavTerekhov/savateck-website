import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Smartphone } from 'lucide-react'
import Seo from '../components/Seo'

const HIGHLIGHTS = [
  {
    icon: Smartphone,
    title: 'Provider workflow',
    desc: 'A focused mobile-first flow for sign in, onboarding, job status, earnings, and profile settings.',
  },
  {
    icon: Gauge,
    title: 'Fast static build',
    desc: 'Runs as a client-side Vite app under the Savateck domain with no backend requirement.',
  },
  {
    icon: ShieldCheck,
    title: 'Product-ready surface',
    desc: 'No external integrations are required for this task page; forms and state stay local to the browser.',
  },
]

const SCOPE = [
  'Public information page at /ruedio-task',
  'Task app deployed at /ruedio-task/app',
  'Responsive React interface',
  'Local-only browser state',
]

export default function RuedioTask() {
  function handleOpenTask() {
    window.location.href = '/ruedio-task/app/'
  }

  return (
    <div className="halla-crm-page">
      <Seo
        title="Ruedio Task — Earn as a Car Care Pro"
        path="/ruedio-task"
        description="Get paid to wash, detail, and service cars near you. Accept jobs on your schedule, navigate to the customer, and cash out. Ruedio Task is the provider app for car-care pros."
      />
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner" style={{ alignItems: 'flex-start' }}>
            <div className="page-hero-text fade-up" style={{ maxWidth: 720 }}>
              <span className="label">Ruedio Task</span>
              <h1>Provider app experience for Ruedio.</h1>
              <p>
                A standalone front-end task build that presents the provider side of Ruedio:
                account entry, onboarding, job management, earnings, and profile controls in one
                deployable interface.
              </p>

              <ul className="feature-list">
                {SCOPE.map(item => (
                  <li key={item}>
                    <span className="check"><CheckCircle2 size={12} /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="hero-actions" style={{ marginTop: 36 }}>
                <button onClick={handleOpenTask} className="btn btn-primary">
                  Go Ruedio - Task <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="section-title">
            <span className="label">Build notes</span>
            <h2>Static, direct, and easy to review.</h2>
            <p>
              The task is shipped as a static React application. It does not depend on a server,
              database, authentication provider, or payment integration.
            </p>
          </div>

          <div className="feature-strip-inner" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <div className="feature-item" key={title} style={{ borderTop: '2px solid var(--border)', paddingTop: 20 }}>
                <Icon size={22} style={{ marginBottom: 14 }} />
                <h4 style={{ marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: '0.875rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 16, display: 'block' }}>Open task</span>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>Review the deployed Ruedio provider app.</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 36px' }}>
            The button opens the isolated task build under the same domain path.
          </p>
          <button onClick={handleOpenTask} className="btn" style={{ background: '#fff', color: '#000' }}>
            Go Ruedio - Task <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  )
}

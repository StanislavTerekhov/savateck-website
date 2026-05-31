import { ArrowRight, BarChart3, Bell, Check, LayoutDashboard, Lock, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// ─── Data ──────────────────────────────────────────────────────────────────

const FEATURES = [
  { icon: Users,         title: 'User & Provider Management', desc: 'Full control over customer accounts, provider profiles, verification status, and activity history.' },
  { icon: LayoutDashboard, title: 'Live Operations Dashboard', desc: 'Real-time KPIs, booking pipeline, revenue tracking, and live order board — all in one screen.' },
  { icon: BarChart3,     title: 'Revenue & Finance',         desc: 'Gross and net revenue, average order value, payout management, and financial reporting.' },
  { icon: ShieldCheck,   title: 'Role-Based Access',         desc: 'Four distinct admin roles — Superadmin, Admin, Support, Finance — with granular permissions.' },
]

const DEEP_FEATURES = [
  {
    label: 'Booking Pipeline',
    title: 'Track every order from pending to completed.',
    desc: 'Monitor bookings across all lifecycle stages — pending, matching, confirmed, in-progress, completed, cancelled, and disputed. Intervene at any point.',
    items: ['Full status history per booking', 'Dispute management & escalations', 'Scheduled order timeline', 'Provider assignment tracking'],
    accent: '#000',
  },
  {
    label: 'Provider Ecosystem',
    title: 'Manage and grow your provider network.',
    desc: 'Verify providers, monitor ratings, override scores when needed, track certifications, and keep your service quality consistent at scale.',
    items: ['Identity & document verification', 'Rating management with admin overrides', 'Certification & service area tracking', 'Online/offline status monitoring'],
    accent: '#000',
  },
  {
    label: 'Support & Moderation',
    title: 'Resolve issues before they escalate.',
    desc: 'A dedicated support workspace gives your team the context they need — full booking history, customer messages, and one-click action controls.',
    items: ['Full conversation history per booking', 'Dispute flagging & resolution tools', 'Notification broadcasts to users', 'Audit trail for every admin action'],
    accent: '#000',
  },
]

const STATS = [
  { value: '12,400+', label: 'Bookings tracked' },
  { value: '890',     label: 'Active providers' },
  { value: '$2.1M',   label: 'Revenue monitored' },
  { value: '98.4%',   label: 'Support resolved' },
]

// ─── CRM Mockup ─────────────────────────────────────────────────────────────

function CRMMockup() {
  return (
    <div className="mockup-window crm-mockup">
      <div className="mockup-titlebar">
        <span className="mockup-dot mockup-dot-r" />
        <span className="mockup-dot mockup-dot-y" />
        <span className="mockup-dot mockup-dot-g" />
        <span style={{ marginLeft: 10, fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 500 }}>
          HALLA CRM — Operations
        </span>
      </div>
      <div className="mockup-body">
        <div className="mockup-sidebar">
          <div className="sidebar-logo">HALLA</div>
          {['Dashboard', 'Users', 'Providers', 'Bookings', 'Finance', 'Support'].map((item, i) => (
            <div key={item} className={`sidebar-item${i === 0 ? ' active' : ''}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="crm-content">
          <div className="kpi-grid">
            {[
              { label: 'Total Bookings', value: '1.2K' },
              { label: 'Gross Revenue', value: '$52K' },
              { label: 'Active Providers', value: '48' },
              { label: 'Tickets Open', value: '3' },
            ].map(({ label, value }) => (
              <div className="kpi-card" key={label}>
                <div className="kpi-label">{label}</div>
                <div className="kpi-value">{value}</div>
              </div>
            ))}
          </div>
          <div className="pipeline-block">
            <div className="block-title">Booking Pipeline</div>
            <div className="pipeline-stages">
              {[
                { label: 'Pending', w: '35%', color: '#febc2e' },
                { label: 'Confirmed', w: '55%', color: '#28c840' },
                { label: 'In Progress', w: '45%', color: '#000' },
                { label: 'Completed', w: '80%', color: '#34c759' },
              ].map(({ label, w, color }) => (
                <div className="pipeline-stage" key={label}>
                  <div className="stage-bar" style={{ width: w, background: color }} />
                  <div className="stage-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="activity-block">
            <div className="block-title">Recent Activity</div>
            {[
              { text: 'Booking #8f3a confirmed', time: '2m ago' },
              { text: 'Provider Amir verified', time: '14m ago' },
              { text: 'Dispute #2c1b resolved', time: '1h ago' },
            ].map(({ text, time }) => (
              <div className="activity-row" key={text}>
                <div className="activity-dot" />
                <div style={{ flex: 1 }}>
                  <div className="activity-text">{text}</div>
                  <div className="activity-time">{time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HallaCRM({ onAuthOpen }) {
  const { user } = useAuth()

  function handleGoToCRM() {
    if (user) {
      window.location.href = '/halla-crm-cloude/'
    } else {
      onAuthOpen?.()
    }
  }

  return (
    <div className="halla-crm-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text fade-up">
              <span className="label">CRM Platform</span>
              <h1>Operations control<br />for every order.</h1>
              <p>
                Halla CRM gives your operations team a single command centre — manage bookings, providers,
                customers, revenue, and support in real time, without switching between tools.
              </p>
              <ul className="feature-list">
                {['Live booking pipeline & dispatch', 'Provider verification & rating management', 'Revenue tracking & financial reports', 'Role-based access for your entire team'].map((item) => (
                  <li key={item}>
                    <span className="check"><Check size={12} /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="hero-actions">
                <button onClick={handleGoToCRM} className="btn btn-primary">
                  {user ? 'Open Cloud CRM' : 'Go Cloud CRM'} <ArrowRight size={16} />
                </button>
                <a href="#features" className="btn btn-secondary">See features</a>
              </div>
              {!user && (
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: 8 }}>
                  Sign in or register to access your workspace.
                </p>
              )}
            </div>
            <div className="hero-visual fade-up-2">
              <CRMMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="hcrm-stats-strip">
        <div className="container">
          <div className="hcrm-stats-grid">
            {STATS.map(({ value, label }) => (
              <div className="hcrm-stat" key={label}>
                <div className="hcrm-stat-value">{value}</div>
                <div className="hcrm-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature strip ── */}
      <section className="section-sm" id="features">
        <div className="container">
          <div className="feature-strip-inner">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div className="feature-item" key={title}>
                <div className="feature-icon"><Icon size={18} /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep features ── */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="label">Built for operations teams</span>
            <h2>Every module your team needs.</h2>
            <p>From first booking to final payout, Halla CRM covers the full lifecycle of your service business.</p>
          </div>

          <div className="hcrm-deep-features">
            {DEEP_FEATURES.map(({ label, title, desc, items }, i) => (
              <div className={`hcrm-deep-item${i % 2 === 1 ? ' hcrm-deep-item--reverse' : ''}`} key={label}>
                <div className="hcrm-deep-visual">
                  <div className="hcrm-feature-card card">
                    <div className="hcrm-feature-card-inner">
                      <div className="animated-grid light">
                        <div className="ag-layer-1" />
                        <div className="ag-layer-2" />
                      </div>
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="label" style={{ marginBottom: 16, display: 'block' }}>{label}</span>
                        <div className="hcrm-feature-items">
                          {items.map((item) => (
                            <div className="hcrm-feature-row" key={item}>
                              <span className="check"><Check size={11} /></span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hcrm-deep-text">
                  <span className="label">{label}</span>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <ul className="feature-list" style={{ marginTop: 24 }}>
                    {items.map((item) => (
                      <li key={item}>
                        <span className="check"><Check size={12} /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Access levels ── */}
      <section className="section hcrm-access-section">
        <div className="container">
          <div className="section-title">
            <span className="label">Permissions</span>
            <h2>The right access for every role.</h2>
            <p>Four built-in roles keep your team organised and your data protected.</p>
          </div>
          <div className="hcrm-roles-grid">
            {[
              { role: 'Superadmin', icon: Lock, desc: 'Full platform access. Manages admins, configs, and all data.', perms: ['All modules', 'Admin management', 'Platform config', 'Financial controls'] },
              { role: 'Admin',      icon: ShieldCheck, desc: 'Day-to-day operations management across all modules.', perms: ['Users & Providers', 'Booking management', 'Refund issuance', 'Broadcast push'] },
              { role: 'Support',    icon: Bell,    desc: 'Customer-facing operations: disputes, tickets, messages.', perms: ['View all records', 'Edit users', 'Resolve disputes', 'Message history'] },
              { role: 'Finance',    icon: BarChart3, desc: 'Revenue data, payouts, and financial reporting.', perms: ['Revenue reports', 'Issue refunds', 'Payout management', 'Export data'] },
            ].map(({ role, icon: Icon, desc, perms }) => (
              <div className="card hcrm-role-card" key={role}>
                <div className="hcrm-role-icon"><Icon size={20} /></div>
                <h3>{role}</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: 20 }}>{desc}</p>
                <ul className="hcrm-role-perms">
                  {perms.map((p) => (
                    <li key={p}>
                      <Check size={11} style={{ flexShrink: 0, marginTop: 2 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mission">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 16, display: 'block' }}>Ready to scale?</span>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>Put your operations on autopilot.</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto 36px' }}>
            Halla CRM is the operations layer your service business needs to grow without losing control.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleGoToCRM} className="btn" style={{ background: '#fff', color: '#000' }}>
              {user ? 'Open Cloud CRM' : 'Go Cloud CRM'} <ArrowRight size={16} />
            </button>
            <Link to="/about" className="btn btn-outline" style={{ color: '#fff', boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.4)' }}>
              About SAVATECK
            </Link>
          </div>
          {!user && (
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginTop: 16 }}>
              Sign in or register to access your CRM workspace.
            </p>
          )}
        </div>
      </section>

    </div>
  )
}

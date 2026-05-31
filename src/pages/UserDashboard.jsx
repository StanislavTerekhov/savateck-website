import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight, Car, ClipboardList, LayoutDashboard, LogOut, Settings, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import LogoMark from '../components/LogoMark'

// ─── Data ─────────────────────────────────────────────────────────────────────

const APPS = [
  {
    id: 'ruedio',
    label: 'Ruedio',
    sub: 'Car Care App',
    desc: 'Track maintenance, get reminders, log fuel costs, and keep your full vehicle history in one place.',
    icon: Car,
    href: '/ruedio',
    external: false,
    color: '#FF9F0A',
    bg: '#FFF8EC',
  },
  {
    id: 'ruedio-task',
    label: 'Ruedio Task',
    sub: 'Task Management',
    desc: 'Kanban boards, smart assignments, team collaboration and activity tracking — all streamlined.',
    icon: ClipboardList,
    href: '/ruedio-task',
    external: false,
    color: '#0A84FF',
    bg: '#EAF4FF',
  },
  {
    id: 'halla-crm',
    label: 'Halla CRM',
    sub: 'Operations Platform',
    desc: 'Manage bookings, providers, revenue, and support across your entire operation in real time.',
    icon: LayoutDashboard,
    href: '/halla-crm-cloude/',
    external: true,
    color: '#111111',
    bg: '#F2F2F7',
  },
]

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

// ─── App card inner ───────────────────────────────────────────────────────────

function AppCardContent({ icon: Icon, label, sub, desc, color, bg }) {
  return (
    <>
      <div className="ud-app-icon" style={{ background: bg }}>
        <Icon size={26} color={color} />
      </div>
      <div className="ud-app-meta">
        <span className="ud-app-sub">{sub}</span>
        <h2 className="ud-app-label">{label}</h2>
      </div>
      <p className="ud-app-desc">{desc}</p>
      <span className="ud-app-arrow"><ArrowUpRight size={18} /></span>
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UserDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/', { replace: true })
  }, [user, navigate])

  if (!user) return null

  const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="ud-root">

      {/* ── Top bar ── */}
      <header className="ud-topbar">
        <Link to="/" className="ud-logo">
          <LogoMark size={20} color="#000" />
          <span>SAVATECK</span>
        </Link>
        <div className="ud-topbar-right">
          <button className="ud-icon-btn" title="Sign out" onClick={handleLogout}>
            <LogOut size={17} />
            <span>Sign out</span>
          </button>
          <div className="ud-avatar" title={user.name}>{initials}</div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="ud-main">

        {/* Greeting */}
        <section className="ud-greeting">
          <h1>{getGreeting()}, {user.name.split(' ')[0]}.</h1>
          <p>Your SAVATECK workspace — all services in one place.</p>
        </section>

        {/* App grid */}
        <div className="ud-apps-grid">
          {APPS.map((app) =>
            app.external ? (
              <a key={app.id} href={app.href} className="ud-app-card">
                <AppCardContent {...app} />
              </a>
            ) : (
              <Link key={app.id} to={app.href} className="ud-app-card">
                <AppCardContent {...app} />
              </Link>
            )
          )}

          {/* Profile / Account card */}
          <div className="ud-app-card ud-profile-card">
            <div className="ud-app-icon" style={{ background: '#F2F2F7' }}>
              <User size={24} color="#555" />
            </div>
            <div className="ud-app-meta">
              <span className="ud-app-sub">Account</span>
              <h2 className="ud-app-label" style={{ fontSize: '1.05rem' }}>{user.name}</h2>
            </div>
            <div className="ud-profile-rows">
              <div className="ud-profile-row">
                <span>Email</span>
                <span>{user.email}</span>
              </div>
              <div className="ud-profile-row">
                <span>Member since</span>
                <span>{new Date(user.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="ud-profile-row">
                <span>Active services</span>
                <span>{APPS.length}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="ud-footnote">More services coming soon.</p>
      </main>
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, LogOut, User } from 'lucide-react'
import LogoMark from './LogoMark'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/halla-crm', label: 'Halla CRM' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const [homeLink, ...secondaryNavLinks] = navLinks

const ruedioFamilyLinks = [
  { to: '/ruedio', label: 'Ruedio', desc: 'Car care app' },
  { to: '/ruedio-task', label: 'Ruedio Task', desc: 'Task management' },
]

export default function Header({ onAuthOpen }) {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const [familyOpen, setFamilyOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const familyActive = location.pathname === '/ruedio' || location.pathname === '/ruedio-task'
  const userMenuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setFamilyOpen(false)
    setUserMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClick(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    if (userMenuOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [userMenuOpen])

  function handleLogout() {
    logout()
    setUserMenuOpen(false)
  }

  const initials = user
    ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : ''

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header-logo">
            <LogoMark size={28} />
            <span>SAVATECK</span>
          </Link>

          <nav className="header-nav">
            <NavLink to={homeLink.to} end className={({ isActive }) => isActive ? 'active' : ''}>
              {homeLink.label}
            </NavLink>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setFamilyOpen(true)}
              onMouseLeave={() => setFamilyOpen(false)}
              onFocus={() => setFamilyOpen(true)}
              onBlur={e => {
                if (!e.currentTarget.contains(e.relatedTarget)) setFamilyOpen(false)
              }}
            >
              <button
                type="button"
                className={`nav-dropdown-trigger ${familyActive ? 'active' : ''}`}
                onClick={() => setFamilyOpen(o => !o)}
                aria-expanded={familyOpen}
                aria-controls="ruedio-family-menu"
              >
                Ruedio Family <ChevronDown size={15} />
              </button>
              <div id="ruedio-family-menu" className={`nav-dropdown-menu ${familyOpen ? 'open' : ''}`}>
                {ruedioFamilyLinks.map(l => (
                  <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>
                    <span>{l.label}</span>
                    <small>{l.desc}</small>
                  </NavLink>
                ))}
              </div>
            </div>
            {secondaryNavLinks.map(l => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            {user ? (
              <div className="user-menu-wrap" ref={userMenuRef}>
                <button
                  className="user-avatar-btn"
                  onClick={() => setUserMenuOpen(o => !o)}
                  aria-expanded={userMenuOpen}
                  aria-label="User menu"
                >
                  <span className="user-avatar">{initials}</span>
                  <span className="user-name">{user.name.split(' ')[0]}</span>
                  <ChevronDown size={14} />
                </button>
                {userMenuOpen && (
                  <div className="user-dropdown">
                    <div className="user-dropdown-info">
                      <span className="user-avatar user-avatar-lg">{initials}</span>
                      <div>
                        <p className="user-dropdown-name">{user.name}</p>
                        <p className="user-dropdown-email">{user.email}</p>
                      </div>
                    </div>
                    <div className="user-dropdown-divider" />
                    <button className="user-dropdown-item" onClick={handleLogout}>
                      <LogOut size={14} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="btn btn-primary header-cta" onClick={onAuthOpen}>
                Sign In / Register <ArrowRight size={18} />
              </button>
            )}
            <button
              className={`burger ${open ? 'open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        <nav id="mobile-navigation" className={`mobile-nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <div className="mobile-family">
            <button
              type="button"
              className={`mobile-family-trigger ${familyActive ? 'active' : ''}`}
              onClick={() => setFamilyOpen(o => !o)}
              aria-expanded={familyOpen}
              aria-controls="mobile-ruedio-family"
            >
              Ruedio Family <ChevronDown size={16} />
            </button>
            <div id="mobile-ruedio-family" className={`mobile-family-menu ${familyOpen ? 'open' : ''}`}>
              {ruedioFamilyLinks.map(l => (
                <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
          {secondaryNavLinks.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          {user ? (
            <button className="btn btn-secondary" style={{ justifyContent: 'center' }} onClick={() => { handleLogout(); setOpen(false) }}>
              <LogOut size={16} /> Sign Out
            </button>
          ) : (
            <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={() => { onAuthOpen(); setOpen(false) }}>
              Sign In / Register <ArrowRight size={18} />
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

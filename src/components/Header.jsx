import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import LogoMark from './LogoMark'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/web-design', label: 'Web Design' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const userMenuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
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
    navigate('/')
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
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
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
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'
import LogoMark from './LogoMark'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <LogoMark size={26} />
              <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--graphite)' }}>
                SAVATECK
              </span>
            </Link>
            <p>Intelligent software for modern business. Built to scale, designed to last.</p>
            <a
              href="https://www.instagram.com/savateck"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SAVATECK on Instagram"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 12, color: 'var(--graphite)', textDecoration: 'none' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Instagram</span>
            </a>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/ruedio">Ruedio</Link>
            <Link to="/ruedio-task">Ruedio Task</Link>
            <Link to="/web-design">Web Design</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SAVATECK. All rights reserved.</p>
          <p>Intelligent software. Modern business.</p>
        </div>
      </div>
    </footer>
  )
}

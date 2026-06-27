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
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/ruedio">Ruedio</Link>
            <Link to="/ruedio-task">Ruedio Task</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
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

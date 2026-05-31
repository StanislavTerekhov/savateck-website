import { useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import LogoMark from '../components/LogoMark'

const FORMSPREE_URL = 'https://formspree.io/f/xzdwqgqw'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-shell">
      <section className="section">
        <div className="container">
          <div className="section-title section-title-loose fade-up">
            <span className="label">Contact</span>
            <h2>Let's build the future of your business.</h2>
            <p>Tell us about your team and goals — we'll find the right solution together.</p>
          </div>

          <div className="contact-grid">
            {/* Form */}
            <div className="fade-up">
              {status === 'sent' ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <ArrowRight size={24} />
                  </div>
                  <h3>Message received!</h3>
                  <p>We'll be in touch shortly. Thank you for reaching out.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project or question..." rows={5} required />
                  </div>
                  {status === 'error' && (
                    <p style={{ fontSize: '0.875rem', color: '#dc2626', background: '#fef2f2', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: 10, margin: 0 }}>
                      Something went wrong. Please try again or email us directly at hello@savateck.com
                    </p>
                  )}
                  <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Info Card */}
            <div className="contact-info-card fade-up-1">
              <div className="logo-area">
                <LogoMark size={30} color="#fff" />
                <span>SAVATECK</span>
              </div>
              <h3>Intelligent software.</h3>
              <p>Modern business. We're here to help you build smarter systems and unlock new levels of performance.</p>

              <div className="contact-detail">
                <div className="contact-detail-icon"><Mail size={16} color="#fff" /></div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  hello@savateck.com
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Phone size={16} color="#fff" /></div>
                <div className="contact-detail-text">
                  <strong>Phone</strong>
                  +1 (555) 000-0000
                </div>
              </div>
              <div className="response-card">
                <div className="response-card-label">Response time</div>
                <div className="response-card-title">Within 24 hours</div>
                <div className="response-card-meta">Monday – Friday, 9am – 6pm PT</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

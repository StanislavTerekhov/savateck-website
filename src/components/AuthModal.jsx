import { useState } from 'react'
import { X, ArrowRight, Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LogoMark from './LogoMark'

export default function AuthModal({ onClose }) {
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState('login')
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })

  function set(field) {
    return e => {
      setForm(f => ({ ...f, [field]: e.target.value }))
      setError('')
    }
  }

  function switchTab(t) {
    setTab(t)
    setError('')
    setForm({ name: '', email: '', password: '', confirm: '' })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (tab === 'register') {
      if (!form.name.trim()) return setError('Please enter your name.')
      if (!form.email.trim()) return setError('Please enter your email.')
      if (form.password.length < 6) return setError('Password must be at least 6 characters.')
      if (form.password !== form.confirm) return setError('Passwords do not match.')
      setLoading(true)
      await new Promise(r => setTimeout(r, 300))
      const res = register({ name: form.name.trim(), email: form.email.trim(), password: form.password })
      setLoading(false)
      if (res.error) return setError(res.error)
      onClose()
      navigate('/dashboard')
    } else {
      if (!form.email.trim()) return setError('Please enter your email.')
      if (!form.password) return setError('Please enter your password.')
      setLoading(true)
      await new Promise(r => setTimeout(r, 300))
      const res = login({ email: form.email.trim(), password: form.password })
      setLoading(false)
      if (res.error) return setError(res.error)
      onClose()
      navigate('/dashboard')
    }
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal">
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          <X size={16} />
        </button>

        <div className="auth-modal-logo">
          <LogoMark size={22} />
          <span>SAVATECK</span>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${tab === 'login' ? 'active' : ''}`}
            onClick={() => switchTab('login')}
            type="button"
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${tab === 'register' ? 'active' : ''}`}
            onClick={() => switchTab('register')}
            type="button"
          >
            Register
          </button>
        </div>

        <div className="auth-modal-header">
          <h2 className="auth-modal-title">
            {tab === 'login' ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="auth-modal-sub">
            {tab === 'login'
              ? 'Sign in to access all SAVATECK products.'
              : 'One account — all SAVATECK tools.'}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {tab === 'register' && (
            <div className="form-group">
              <label htmlFor="auth-name">Full Name</label>
              <input
                id="auth-name"
                type="text"
                placeholder="John Smith"
                value={form.name}
                onChange={set('name')}
                autoComplete="name"
                autoFocus
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="auth-email">Email</label>
            <input
              id="auth-email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={set('email')}
              autoComplete="email"
              autoFocus={tab === 'login'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="auth-password">Password</label>
            <div className="auth-input-wrap">
              <input
                id="auth-password"
                type={showPass ? 'text' : 'password'}
                placeholder={tab === 'register' ? 'At least 6 characters' : '••••••••'}
                value={form.password}
                onChange={set('password')}
                autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
              />
              <button type="button" className="auth-eye" onClick={() => setShowPass(s => !s)} tabIndex={-1}>
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {tab === 'register' && (
            <div className="form-group">
              <label htmlFor="auth-confirm">Confirm Password</label>
              <div className="auth-input-wrap">
                <input
                  id="auth-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Repeat your password"
                  value={form.confirm}
                  onChange={set('confirm')}
                  autoComplete="new-password"
                />
                <button type="button" className="auth-eye" onClick={() => setShowConfirm(s => !s)} tabIndex={-1}>
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          )}

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
            {loading
              ? 'Please wait...'
              : tab === 'login' ? 'Sign In' : 'Create Account'}
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className="auth-switch">
          {tab === 'login' ? 'No account? ' : 'Already have an account? '}
          <button type="button" onClick={() => switchTab(tab === 'login' ? 'register' : 'login')}>
            {tab === 'login' ? 'Register' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}

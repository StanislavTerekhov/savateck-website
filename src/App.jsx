import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import Home from './pages/Home'
import Ruedio from './pages/Ruedio'
import RuedioTask from './pages/RuedioTask'
import About from './pages/About'
import Contact from './pages/Contact'
import UserDashboard from './pages/UserDashboard'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

// Wrapper that hides Header/Footer on /dashboard
function AppShell({ authOpen, setAuthOpen, authTab, setAuthTab }) {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  function openAuth(tab = 'login') {
    setAuthTab(tab)
    setAuthOpen(true)
  }

  return (
    <div className="app">
      {!isDashboard && <Header onAuthOpen={() => openAuth('login')} />}
      <main>
        <Routes>
          <Route path="/" element={<Home onOpenAuth={openAuth} />} />
          <Route path="/ruedio" element={<Ruedio />} />
          <Route path="/ruedio-task" element={<RuedioTask />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
      {authOpen && <AuthModal initialTab={authTab} onClose={() => setAuthOpen(false)} />}
    </div>
  )
}

export default function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState('login')

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppShell authOpen={authOpen} setAuthOpen={setAuthOpen} authTab={authTab} setAuthTab={setAuthTab} />
      </BrowserRouter>
    </AuthProvider>
  )
}

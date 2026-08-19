import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { initAnalytics, trackPageView } from './lib/analytics'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ruedio from './pages/Ruedio'
import RuedioTask from './pages/RuedioTask'
import About from './pages/About'
import Contact from './pages/Contact'
import WebDesign from './pages/WebDesign'
import UserDashboard from './pages/UserDashboard'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function AppShell() {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  // Analytics: load once, then report every client-side route change.
  useEffect(() => { initAnalytics() }, [])
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  return (
    <div className="app">
      {!isDashboard && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ruedio" element={<Ruedio />} />
          <Route path="/ruedio-task" element={<RuedioTask />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  )
}

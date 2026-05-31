import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import Home from './pages/Home'
import Ruedio from './pages/Ruedio'
import RuedioTask from './pages/RuedioTask'
import HallaCRM from './pages/HallaCRM'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Header onAuthOpen={() => setAuthOpen(true)} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ruedio" element={<Ruedio />} />
              <Route path="/ruedio-task" element={<RuedioTask />} />
              <Route path="/halla-crm" element={<HallaCRM onAuthOpen={() => setAuthOpen(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

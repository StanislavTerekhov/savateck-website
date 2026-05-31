import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, ClipboardCheck, Headphones, Radio, Rocket, Shield, Users } from 'lucide-react'
import Modal from '../components/Modal'
import LogoMark from '../components/LogoMark'

const PRODUCTS = {
  ruedio: {
    name: 'Ruedio',
    tag: 'Car Care App',
    tagline: 'Everything your car needs, in one app',
    href: '/ruedio',
    desc: 'Ruedio keeps your vehicle in perfect shape. Track maintenance, get timely service reminders, log expenses, and stay on top of every detail of your car.',
    features: ['Maintenance & service tracking', 'Smart reminders for upkeep', 'Fuel & expense logging', 'Full vehicle history in one place'],
  },
  ruedioTask: {
    name: 'Ruedio Task',
    tag: 'Task Management',
    tagline: 'Manage tasks. Streamline workflows.',
    href: '/ruedio-task',
    desc: 'Ruedio Task helps teams stay organized, prioritize work, and collaborate effortlessly with visual boards and smart assignments.',
    features: ['Kanban boards & lists', 'Task assignments & due dates', 'Team collaboration', 'Activity tracking & reporting'],
  },
  hallaCrm: {
    name: 'Halla CRM',
    tag: 'CRM Platform',
    tagline: 'Build stronger relationships. Close more deals.',
    href: '/halla-crm',
    desc: 'Halla CRM gives your team the tools to manage leads, track conversations, and grow revenue through intelligent pipeline management.',
    features: ['Contact & company management', 'Sales pipeline & deal tracking', 'Email & activity timeline', 'Reports & performance analytics'],
  },
}

const familyTools = [
  {
    key: 'ruedio',
    icon: Radio,
    title: 'Ruedio',
    desc: 'Car care, simplified.',
  },
  {
    key: 'ruedioTask',
    icon: ClipboardCheck,
    title: 'Ruedio Task',
    desc: 'Task management made simple.',
  },
]

const missionItems = [
  {
    icon: Rocket,
    title: 'Innovative Solutions',
    desc: 'Focused tools built for real workflow needs.',
  },
  {
    icon: Shield,
    title: 'Seamless Integration',
    desc: 'All tools work together in perfect harmony.',
  },
  {
    icon: BarChart3,
    title: 'Business Growth',
    desc: 'Empower your team and accelerate your success.',
  },
  {
    icon: Headphones,
    title: 'Reliable Support',
    desc: "We're here to help you every step of the way.",
  },
]

export default function Home() {
  const [modal, setModal] = useState(null)

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container home-hero-container">
          <div className="home-hero-copy">
            <h1>Welcome to SAVATECK</h1>
            <p>
              Powerful tools, seamlessly connected.
              <span>Built to help your business grow.</span>
            </p>
          </div>

          <div className="home-ecosystem">
            <div className="home-grid-aura" aria-hidden="true">
              <span className="home-grid-layer home-grid-layer-primary" />
              <span className="home-grid-layer home-grid-layer-glow" />
            </div>

            <div className="home-logo-stage" aria-hidden="true">
              <LogoMark size={430} color="#000" />
            </div>

            <div className="home-family-module">
              <div className="home-module-header">
                <span className="home-module-kicker">Tool Family</span>
                <h2>Ruedio Family</h2>
              </div>

              <div className="home-family-tools">
                {familyTools.map(({ key, icon: Icon, title, desc }) => (
                  <button
                    key={key}
                    type="button"
                    className="home-product-card"
                    onClick={() => setModal(PRODUCTS[key])}
                  >
                    <span className="home-product-icon"><Icon size={24} /></span>
                    <span>
                      <strong>{title}</strong>
                      <small>{desc}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="home-product-card home-product-crm"
              onClick={() => setModal(PRODUCTS.hallaCrm)}
            >
              <span className="home-product-icon"><Users size={24} /></span>
              <span>
                <strong>Halla CRM</strong>
                <small>CRM platform for success.</small>
              </span>
            </button>

            <div className="home-system-badge" aria-hidden="true">
              <span>3 tools</span>
              <span>1 ecosystem</span>
            </div>

          </div>
        </div>
      </section>

      <section className="home-mission">
        <div className="container">
          <div className="home-mission-heading">
            <span>Our Mission</span>
            <h2>One ecosystem. Infinite possibilities.</h2>
            <p>SAVATECK brings together innovative tools and smart integrations to streamline your workflow and drive results.</p>
          </div>

          <div className="home-mission-grid">
            {missionItems.map(({ icon: Icon, title, desc }) => (
              <div className="home-mission-item" key={title}>
                <span className="home-mission-icon"><Icon size={24} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-cta-strip">
            <div>
              <h3>Ready to take your business to the next level?</h3>
              <p>Join companies already growing with SAVATECK.</p>
            </div>
            <Link to="/contact" className="btn btn-primary home-login-btn">
              Sign In / Login <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {modal && <Modal product={modal} onClose={() => setModal(null)} />}
    </div>
  )
}

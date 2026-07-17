import { Radio, ClipboardCheck } from 'lucide-react'
import Seo from '../components/Seo'

const products = [
  {
    key: 'ruedio',
    icon: Radio,
    title: 'Ruedio',
    tag: 'Car Care App',
    desc: 'Everything your car needs in one app — maintenance tracking, smart reminders, and on-demand service.',
    join: '/ruedio/app/auth?mode=signup',
    login: '/ruedio/app/auth?mode=signin',
  },
  {
    key: 'ruedioTask',
    icon: ClipboardCheck,
    title: 'Ruedio Task',
    tag: 'Task Management',
    desc: "Manage tasks and streamline your team's workflow with simple visual boards and assignments.",
    join: '/ruedio-task/app/auth?mode=signup',
    login: '/ruedio-task/app/auth?mode=signin',
  },
]

export default function Home() {
  return (
    <div className="home-page">
      <Seo
        path="/"
        description="SAVATECK builds intelligent software and modern business tools, including Ruedio — an on-demand car-care marketplace connecting customers with verified local pros."
      />
      <section className="home-simple">
        <div className="container">
          <div className="home-simple-hero">
            <h1>Welcome to SAVATECK</h1>
            <p>Powerful tools, seamlessly connected. Built to help your business grow.</p>
          </div>

          <div className="home-simple-products">
            {products.map(({ key, icon: Icon, title, tag, desc, join, login }) => (
              <div className="home-simple-card" key={key}>
                <span className="home-product-icon"><Icon size={26} /></span>
                <span className="home-simple-tag">{tag}</span>
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="home-simple-actions">
                  <a href={join} className="btn btn-primary">Join</a>
                  <a href={login} className="btn btn-secondary">Login</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

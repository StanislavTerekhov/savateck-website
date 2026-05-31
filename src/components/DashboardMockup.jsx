import { Home, Settings, Car, Wrench, Bell, Fuel } from 'lucide-react'

function MiniLineChart() {
  const points = [30,45,35,55,48,65,58,72,62,80,70,85]
  const h = 48, w = 200
  const max = Math.max(...points), min = Math.min(...points)
  const coords = points.map((v, i) => {
    const x = (i / (points.length - 1)) * w
    const y = h - ((v - min) / (max - min)) * (h - 6) - 3
    return `${x},${y}`
  }).join(' ')
  const area = `0,${h} ${coords} ${w},${h}`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="chart-line-svg" style={{ height: 48 }}>
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d1d1f" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1d1d1f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#chartGrad)" />
      <polyline points={coords} fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

const sidebarItems = [
  { icon: Home, label: 'Overview', active: true },
  { icon: Car, label: 'My Vehicles' },
  { icon: Wrench, label: 'Services' },
  { icon: Bell, label: 'Reminders' },
  { icon: Fuel, label: 'Expenses' },
  { icon: Settings, label: 'Settings' },
]

const services = [
  { name: 'Oil change', val: '320 mi', pct: 0.85 },
  { name: 'Tire rotation', val: '1.2k mi', pct: 0.55 },
  { name: 'Brake check', val: '3.4k mi', pct: 0.3 },
  { name: 'Inspection', val: '5.0k mi', pct: 0.18 },
]

export default function DashboardMockup() {
  return (
    <div className="mockup-window float">
      <div className="mockup-titlebar">
        <div className="mockup-dot mockup-dot-r" />
        <div className="mockup-dot mockup-dot-y" />
        <div className="mockup-dot mockup-dot-g" />
        <span style={{ marginLeft: 8, fontSize: '0.7rem', color: 'var(--muted)' }}>Ruedio — Garage</span>
      </div>
      <div className="mockup-body">
        <div className="mockup-sidebar">
          <div className="sidebar-logo">Ruedio</div>
          {sidebarItems.map(({ icon: Icon, label, active }) => (
            <div key={label} className={`sidebar-item ${active ? 'active' : ''}`}>
              <Icon size={11} />
              {label}
            </div>
          ))}
        </div>
        <div className="mockup-content">
          <div className="metric-grid">
            {[
              { label: 'Mileage', value: '48.2K', change: 'mi' },
              { label: 'Next service', value: '320 mi', change: 'soon' },
              { label: 'Fuel / mo', value: '$184', change: '−6.1%' },
              { label: 'Health', value: '92%', change: 'good' },
            ].map(m => (
              <div key={m.label} className="metric-card">
                <div className="metric-label">{m.label}</div>
                <div className="metric-value">{m.value}</div>
                <div className="metric-change">{m.change}</div>
              </div>
            ))}
          </div>

          <div className="chart-placeholder">
            <div className="chart-label">Monthly running cost</div>
            <MiniLineChart />
          </div>

          <div className="channels-list">
            <div className="channels-title">Upcoming services</div>
            {services.map(c => (
              <div key={c.name} className="channel-row">
                <span className="channel-name">{c.name}</span>
                <div className="channel-bar-wrap">
                  <div className="channel-bar" style={{ width: `${c.pct * 100}%` }} />
                </div>
                <span className="channel-val">{c.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

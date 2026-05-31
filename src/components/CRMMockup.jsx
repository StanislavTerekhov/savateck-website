import { Users, Briefcase, TrendingUp, DollarSign, Home, Mail, Settings, Bell } from 'lucide-react'

const sidebarItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Users, label: 'Contacts' },
  { icon: Briefcase, label: 'Deals' },
  { icon: Mail, label: 'Emails' },
  { icon: TrendingUp, label: 'Pipeline' },
  { icon: Bell, label: 'Activity' },
  { icon: Settings, label: 'Settings' },
]

const pipeline = [
  { label: 'Lead', pct: 85, color: '#d1d1d6' },
  { label: 'Qualified', pct: 62, color: '#aeaeb2' },
  { label: 'Proposal', pct: 40, color: '#636366' },
  { label: 'Won', pct: 22, color: '#1d1d1f' },
]

const activities = [
  { text: 'Call with Acme Corp', time: '2m ago' },
  { text: 'Email sent to TechStart', time: '18m ago' },
  { text: 'Deal "Enterprise Q2" updated', time: '1h ago' },
]

export default function CRMMockup() {
  return (
    <div className="mockup-window crm-mockup float">
      <div className="mockup-titlebar">
        <div className="mockup-dot mockup-dot-r" />
        <div className="mockup-dot mockup-dot-y" />
        <div className="mockup-dot mockup-dot-g" />
        <span style={{ marginLeft: 8, fontSize: '0.7rem', color: 'var(--muted)' }}>Halla CRM — Dashboard</span>
      </div>
      <div className="mockup-body">
        <div className="mockup-sidebar">
          <div className="sidebar-logo">Halla</div>
          {sidebarItems.map(({ icon: Icon, label, active }) => (
            <div key={label} className={`sidebar-item ${active ? 'active' : ''}`}>
              <Icon size={11} />{label}
            </div>
          ))}
        </div>
        <div className="crm-content">
          <div className="kpi-grid">
            {[
              { label: 'New Contacts', value: '1,250' },
              { label: 'Open Deals', value: '340' },
              { label: 'Won Deals', value: '120' },
              { label: 'Revenue', value: '$2.48M' },
            ].map(k => (
              <div key={k.label} className="kpi-card">
                <div className="kpi-label">{k.label}</div>
                <div className="kpi-value">{k.value}</div>
              </div>
            ))}
          </div>

          <div className="pipeline-block">
            <div className="block-title">Sales Pipeline</div>
            <div className="pipeline-stages">
              {pipeline.map(s => (
                <div key={s.label} className="pipeline-stage">
                  <div className="stage-bar" style={{ background: s.color, width: `${s.pct}%` }} />
                  <div className="stage-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-block">
            <div className="block-title">Recent Activity</div>
            {activities.map((a, i) => (
              <div key={i} className="activity-row">
                <div className="activity-dot" />
                <div style={{ flex: 1 }}>
                  <div className="activity-text">{a.text}</div>
                  <div className="activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

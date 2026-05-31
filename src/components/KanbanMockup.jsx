const columns = [
  {
    title: 'To Do', count: 3,
    cards: [
      { text: 'Design new dashboard', tag: 'Design', tagClass: 'tag-blue' },
      { text: 'Draft marketing plan', tag: 'Marketing', tagClass: 'tag-orange' },
      { text: 'Update documentation', tag: 'Docs', tagClass: 'tag-purple' },
    ],
  },
  {
    title: 'In Progress', count: 2,
    cards: [
      { text: 'API integration', tag: 'Dev', tagClass: 'tag-green' },
      { text: 'Analytics review', tag: 'Analytics', tagClass: 'tag-blue' },
    ],
  },
  {
    title: 'Review', count: 2,
    cards: [
      { text: 'Prepare Q2 report', tag: 'Reports', tagClass: 'tag-orange' },
      { text: 'Bug fixes', tag: 'Dev', tagClass: 'tag-green' },
    ],
  },
  {
    title: 'Done', count: 2,
    cards: [
      { text: 'Deploy v1.2', tag: 'Dev', tagClass: 'tag-green' },
      { text: 'Deploy v1.2', tag: 'Dev', tagClass: 'tag-green' },
    ],
  },
]

export default function KanbanMockup() {
  return (
    <div className="mockup-window kanban-mockup float">
      <div className="mockup-titlebar">
        <div className="mockup-dot mockup-dot-r" />
        <div className="mockup-dot mockup-dot-y" />
        <div className="mockup-dot mockup-dot-g" />
        <span style={{ marginLeft: 8, fontSize: '0.7rem', color: 'var(--muted)' }}>Ruedio Task — Board</span>
      </div>
      <div className="mockup-body">
        <div className="kanban-columns">
          {columns.map(col => (
            <div key={col.title} className="kanban-col">
              <div className="kanban-col-header">
                {col.title}
                <span className="kanban-col-count">{col.count}</span>
              </div>
              {col.cards.map((card, i) => (
                <div key={i} className="kanban-card">
                  <span className={`kanban-card-tag ${card.tagClass}`}>{card.tag}</span>
                  <div>{card.text}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

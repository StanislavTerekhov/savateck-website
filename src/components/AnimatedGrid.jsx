/**
 * AnimatedGrid — reusable pulsing grid overlay.
 * Place as the first child inside a `position: relative; overflow: hidden` container.
 *
 * Props:
 *   light  — use dark grid lines (for white/light backgrounds)
 *   style  — extra inline styles on the wrapper
 */
export default function AnimatedGrid({ light = false, style = {} }) {
  return (
    <div
      className={`animated-grid${light ? ' light' : ''}`}
      style={style}
      aria-hidden="true"
    >
      <div className="ag-layer ag-layer-1" />
      <div className="ag-layer ag-layer-2" />
    </div>
  )
}

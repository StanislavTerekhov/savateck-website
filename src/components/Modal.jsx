import { useEffect, useId, useRef } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Modal({ product, onClose }) {
  const titleId = useId()
  const modalRef = useRef(null)

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    const previousOverflow = document.body.style.overflow

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    modalRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  if (!product) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-box"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={modalRef}
      >
        {/* Close */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal"><X size={18} /></button>

        {/* Header */}
        <div className="modal-header">
          <span className="modal-tag">{product.tag}</span>
          <h2 id={titleId} className="modal-title">{product.name}</h2>
          <p className="modal-sub">{product.tagline}</p>
        </div>

        {/* Description */}
        <p className="modal-desc">{product.desc}</p>

        {/* Features */}
        <ul className="modal-features">
          {product.features.map(f => (
            <li key={f}>
              <span className="modal-dot" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="modal-footer">
          <Link to={product.href} className="btn btn-primary" onClick={onClose}>
            Open {product.name} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}

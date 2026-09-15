import React from 'react'
import { useReveal } from '../hooks/useReveal'

function Reveal({ as: Tag = 'div', className = '', delay = 0, style = {}, children, ...props }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal

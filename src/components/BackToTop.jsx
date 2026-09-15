import React, { useEffect, useState } from 'react'
import { ArrowUpIcon } from './Icons'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="back-to-top fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-lg hover:scale-110 hover:shadow-xl transition-transform"
    >
      <ArrowUpIcon />
    </button>
  )
}

export default BackToTop

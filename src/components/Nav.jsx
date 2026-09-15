import React, { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-2 z-40 flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-3 py-2 mb-6 rounded-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-md' : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Nav

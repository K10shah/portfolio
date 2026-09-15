import React, { useEffect, useState } from 'react'
import { content } from '../data/content'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const taglines = [
  content.title,
  'Distributed systems tinkerer',
  'Cloud & AI enthusiast',
  'Always shipping something',
]

function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIdx((i) => (i + 1) % taglines.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden"
      style={{ background: 'linear-gradient(120deg, #ede7f6 0%, #e3f2fd 100%)' }}
    >
      <p className="text-4xl mb-2 animate-wave inline-block">👋</p>
      <h1 className="text-4xl md:text-6xl font-extrabold gradient-text">{content.name}</h1>
      <p key={taglineIdx} className="text-xl md:text-2xl mt-3 text-gray-700 fade-swap">
        {taglines[taglineIdx]}
      </p>
      <p className="mt-4 max-w-xl text-gray-600">{content.summary}</p>

      <div className="flex gap-4 mt-8">
        <a href={content.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
          <GithubIcon />
        </a>
        <a href={content.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
          <LinkedinIcon />
        </a>
        <a href={`mailto:${content.email}`} aria-label="Email" className="social-icon">
          <MailIcon />
        </a>
      </div>

      <a href="#skills" aria-label="Scroll to skills" className="mt-14 text-gray-400 hover:text-gray-600 bounce-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 mx-auto">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}

export default Hero

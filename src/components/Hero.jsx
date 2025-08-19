import React from 'react'
import { content } from '../data/content'

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100"
    style={{ background: 'linear-gradient(120deg, #ede7f6 0%, #e3f2fd 100%)' }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">{content.name}</h1>
      <p className="text-xl md:text-2xl mt-2 text-gray-700">{content.title}</p>
      <p className="mt-4 max-w-xl text-gray-600">{content.summary}</p>

      <div className="flex gap-6 mt-6">
        <a href={content.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href={`mailto:${content.email}`} className="text-blue-600 hover:underline">Email</a>
      </div>
    </section>
  )
}

export default Hero

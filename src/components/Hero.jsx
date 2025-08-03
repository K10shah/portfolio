import React from 'react'
import { content } from '../data/content'

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold">{content.name}</h1>
      <p className="text-xl mt-2">{content.title}</p>
      <p className="mt-4 max-w-xl">{content.summary}</p>
      <div className="flex gap-4 mt-6">
        <a href={content.github} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        <a href={content.linkedin} target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href={`mailto:${content.email}`} className="text-blue-600 hover:underline">Email</a>
      </div>
    </section>
  )
}

export default Hero

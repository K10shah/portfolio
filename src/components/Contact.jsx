import React from 'react'
import { content } from '../data/content'

function Contact() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">I’m open to opportunities and collaborations. Feel free to reach out!</p>
      <div className="flex justify-center gap-6">
        <a href={`mailto:${content.email}`} className="text-blue-600 hover:underline">{content.email}</a>
        <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href={content.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { content } from '../data/content'
import Reveal from './Reveal'

function Education() {
  return (
    <Reveal
      as="section"
      id="education"
      className="py-16 px-6"
      style={{ background: 'linear-gradient(120deg, #e3f2fd 0%, #e0f2e7 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <div className="max-w-xl mx-auto space-y-6">
        {content.education.map((edu, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow bg-white experience-card flex items-start gap-4">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-500">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export default Education

import React from 'react'
import { content } from '../data/content'

function Education() {
  return (
    <section className="py-16 px-6 bg-gray-50"
    style={{ background: 'linear-gradient(120deg, #e3f2fd 0%, #e0f2e7ff 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <div className="max-w-xl mx-auto space-y-6">
        {content.education.map((edu, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-gray-700">{edu.degree}</p>
            <p className="text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

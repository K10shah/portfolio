import React from 'react'
import { content } from '../data/content'

function Skills() {
  return (
    <section
      className="py-16 px-6 text-center rounded-2xl"
      style={{ background: 'linear-gradient(120deg, #e0f7fa 0%, #f1f8e9 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {content.skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 shadow">
            {skill}
          </span>
        ))}
      </div>
      <h3 className="text-3xl font-bold mb-6">Programming Languages</h3>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {content.programminglanguages.map((programminglanguages, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 shadow">
            {programminglanguages}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-semibold mb-4">Languages</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {content.languages.map((lang, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 shadow">
            {lang}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
import React from 'react'
import { content } from '../data/content'

function Experience() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {content.experience.map((job, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-2xl font-semibold">{job.company}</h3>
            <div className="space-y-4 mt-4">
              {job.roles.map((role, rIdx) => (
                <div key={rIdx}>
                  <p className="font-bold">{role.title} <span className="text-gray-500">({role.period})</span></p>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

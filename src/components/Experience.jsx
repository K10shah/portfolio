import React from 'react'
import { content } from '../data/content'
import Reveal from './Reveal'

function Experience() {
  return (
    <Reveal
      as="section"
      id="experience"
      className="py-16 px-6"
      style={{ background: 'linear-gradient(120deg, #fdfcfc 0%, #f7dbe4 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {content.experience.map((job, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow border experience-card">
            <h3 className="text-2xl font-semibold">{job.company}</h3>
            <div className="space-y-4 mt-4">
              {job.roles.map((role, rIdx) => (
                <div key={rIdx} className="relative pl-6">
                  <span className="timeline-dot absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <p className="font-bold">
                    {role.title} <span className="text-gray-500 font-normal">({role.period})</span>
                  </p>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export default Experience

import React from 'react'
import { content } from '../data/content'

function Projects() {
  return (
    <section className="py-16 px-6 bg-white"
    style={{ background: 'linear-gradient(120deg, #faeed9ff 0%, #f8f0eaff 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Academic Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {content.projects.map((proj, idx) => (
          <a 
            key={idx} 
            href={proj.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            {proj.link && <p className="text-blue-600 mt-2">View Project</p>}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects

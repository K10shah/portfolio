import React from 'react'
import { content } from '../data/content'
import Reveal from './Reveal'
import { ArrowRightIcon } from './Icons'

const emojis = ['🧠', '🧊', '📡', '📁', '🔖', '🕵️']

function Projects() {
  return (
    <Reveal
      as="section"
      id="projects"
      className="py-16 px-6"
      style={{ background: 'linear-gradient(120deg, #faf4e8 0%, #f8f0ea 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Academic Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {content.projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group p-6 border rounded-xl bg-white shadow"
          >
            <div className="text-3xl mb-3">{emojis[idx % emojis.length]}</div>
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            {proj.link && (
              <p className="mt-3 flex items-center gap-1 text-blue-600 font-medium">
                View Project
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </p>
            )}
          </a>
        ))}
      </div>
    </Reveal>
  )
}

export default Projects

import React from 'react'
import { content } from '../data/content'
import Reveal from './Reveal'

function TagGroup({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, idx) => (
        <span key={idx} className="tag">
          {item}
        </span>
      ))}
    </div>
  )
}

function Skills() {
  return (
    <Reveal
      as="section"
      id="skills"
      className="py-16 px-6 text-center rounded-2xl"
      style={{ background: 'linear-gradient(120deg, #e0f7fa 0%, #f1f8e9 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <TagGroup items={content.skills} />
      <h3 className="text-3xl font-bold mt-10 mb-6">Programming Languages</h3>
      <TagGroup items={content.programminglanguages} />
      <h3 className="text-2xl font-semibold mt-10 mb-4">Languages</h3>
      <TagGroup items={content.languages} />
    </Reveal>
  )
}

export default Skills

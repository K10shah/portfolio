import React from 'react'
import { content } from '../data/content'
import Reveal from './Reveal'
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons'

function Contact() {
  return (
    <Reveal
      as="section"
      id="contact"
      className="py-16 px-6 text-center"
      style={{ background: 'linear-gradient(120deg, #f6f7fb 0%, #d1e6fa 100%)' }}
    >
      <h2 className="text-3xl font-bold mb-4">Let's Connect 🚀</h2>
      <p className="text-gray-700 mb-8">I’m open to opportunities and collaborations. Feel free to reach out!</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={`mailto:${content.email}`} className="btn">
          <MailIcon className="w-4 h-4" /> {content.email}
        </a>
        <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
          <LinkedinIcon className="w-4 h-4" /> LinkedIn
        </a>
        <a href={content.github} target="_blank" rel="noopener noreferrer" className="btn">
          <GithubIcon className="w-4 h-4" /> GitHub
        </a>
      </div>
    </Reveal>
  )
}

export default Contact

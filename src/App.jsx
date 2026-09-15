import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />
      <main className="relative max-w-7xl mx-auto my-8 p-4 rounded-2xl shadow-lg bg-white/80 backdrop-blur">
        <Nav />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App

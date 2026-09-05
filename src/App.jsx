import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Architecture from './components/Architecture.jsx'
import TechStack from './components/TechStack.jsx'
import MonitorResults from './components/MonitorResults.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className='min-h-screen bg-dark-900 text-white overflow-x-hidden'>
      <Hero />
      <Features />
      <Architecture />
      <TechStack />
      <MonitorResults />
      <Footer />
    </div>
  )
}
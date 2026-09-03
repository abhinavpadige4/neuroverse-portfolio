import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Architecture from './components/Architecture.jsx'
import TechStack from './components/TechStack.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <Architecture />
      <TechStack />
      <Footer />
    </div>
  )
}
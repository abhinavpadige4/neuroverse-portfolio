import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Architecture from './components/Architecture.jsx'
import TechStack from './components/TechStack.jsx'
import MonitorResults from './components/MonitorResults.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <TechStack />
        <MonitorResults />
      </main>
      <Footer />
    </div>
  )
}

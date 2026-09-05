import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white">
      <Hero />
      <Features />
      <Architecture />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
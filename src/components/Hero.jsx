export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0f_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Hi, I'm{' '}
          <span className="gradient-text">NeuroVerse</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          AI Engineer & Machine Learning Specialist
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          I build intelligent systems at the intersection of machine learning and
          software engineering — turning complex data into elegant, production-ready
          AI solutions that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all hover:scale-105 glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 font-semibold transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-gray-500 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div>Years Experience</div>
          </div>
          <div className="w-px h-10 bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">30+</div>
            <div>Projects Delivered</div>
          </div>
          <div className="w-px h-10 bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15+</div>
            <div>Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
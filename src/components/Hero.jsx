export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
          AI Engineer
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-gradient">NeuroVerse</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          I build intelligent systems at the intersection of machine learning and
          software engineering — turning complex data into elegant, production-ready
          AI solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
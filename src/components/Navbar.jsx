import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gradient">
              NeuroVerse
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#hero" className="hover:text-primary/80 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary/80 transition-colors">About</a>
            <a href="#skills" className="hover:text-primary/80 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary/80 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary/80 transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary/80"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#hero"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
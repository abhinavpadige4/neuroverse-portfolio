const projects = [
  {
    id: 1,
    title: 'NeuralSearch Pro',
    desc: 'Semantic search engine using transformer embeddings and vector databases for enterprise knowledge bases',
    tech: ['Python', 'PyTorch', 'FAISS', 'FastAPI', 'React'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'MedAI Diagnostics',
    desc: 'AI-powered medical imaging analysis system for early disease detection from X-rays and MRIs',
    tech: ['TensorFlow', 'OpenCV', 'Python', 'Docker', 'AWS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'FinanceGPT',
    desc: 'Large language model fine-tuned for financial analysis and automated trading signal generation',
    tech: ['Transformers', 'LangChain', 'Python', 'PostgreSQL', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'VoiceFlow Assistant',
    desc: 'Conversational AI platform with voice interface for customer service automation',
    tech: ['Whisper', 'GPT-4', 'Python', 'WebSocket', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1581091856687-26031e0ec113?auto=format&fit=crop&w=800&q=60',
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of my recent work showcasing end-to-end AI solutions from
            research to production deployment.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-purple-500/20 bg-dark-800/50 overflow-hidden hover:border-purple-500/50 transition-all hover:-translate-y-2"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded text-xs font-medium bg-purple-600/20 text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    >
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v2m2 2H7a2 2 0 01-2-2v2a2 2 0 002 2h5V9a2 2 0 012-2zm0 0l2 2m-2-2l-2 2m2 2l2-2m-2 2l-2-2"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 7V3m0 0l-4 4m4-4l4 4M3 17l4-4m0 0l4 4m-4 4h12a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                  <span className="text-purple-400 text-sm font-semibold">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
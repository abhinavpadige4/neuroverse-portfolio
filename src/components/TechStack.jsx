import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const categories = [
  {
    name: 'AI & ML',
    color: 'from-indigo-400 to-purple-500',
    techs: [
      { name: 'LangGraph', desc: 'Agent orchestration' },
      { name: 'LangChain', desc: 'LLM framework' },
      { name: 'Pinecone', desc: 'Vector database' },
      { name: 'OpenAI', desc: 'GPT-4o' },
      { name: 'NVIDIA NIM', desc: 'Nemotron models' },
      { name: 'Cohere', desc: 'Reranking' },
    ]
  },
  {
    name: 'Backend',
    color: 'from-blue-400 to-cyan-500',
    techs: [
      { name: 'Spring Boot', desc: 'API Gateway' },
      { name: 'FastAPI', desc: 'Agent services' },
      { name: 'Python', desc: 'Core language' },
      { name: 'Java', desc: 'Gateway' },
      { name: 'Kafka', desc: 'Event streaming' },
      { name: 'GraphQL', desc: 'API layer' },
    ]
  },
  {
    name: 'Frontend',
    color: 'from-purple-400 to-pink-500',
    techs: [
      { name: 'React', desc: 'UI library' },
      { name: 'TanStack', desc: 'Router + Query' },
      { name: 'Vite', desc: 'Build tool' },
      { name: 'Tailwind', desc: 'Styling' },
      { name: 'Framer Motion', desc: 'Animations' },
      { name: 'TypeScript', desc: 'Type safety' },
    ]
  },
  {
    name: 'Data & Storage',
    color: 'from-emerald-400 to-teal-500',
    techs: [
      { name: 'PostgreSQL', desc: 'Primary DB' },
      { name: 'MongoDB', desc: 'Document store' },
      { name: 'Redis', desc: 'Cache + state' },
      { name: 'Pinecone', desc: 'Vector search' },
      { name: 'Neon', desc: 'Serverless PG' },
    ]
  },
  {
    name: 'DevOps & Observability',
    color: 'from-amber-400 to-orange-500',
    techs: [
      { name: 'Docker', desc: 'Containers' },
      { name: 'Prometheus', desc: 'Metrics' },
      { name: 'Grafana', desc: 'Dashboards' },
      { name: 'Jaeger', desc: 'Tracing' },
      { name: 'GitHub Actions', desc: 'CI/CD' },
    ]
  },
  {
    name: 'MCP Integrations',
    color: 'from-rose-400 to-red-500',
    techs: [
      { name: 'GitHub', desc: 'Code push' },
      { name: 'Vercel', desc: 'Deploy' },
      { name: 'Notion', desc: 'Planning' },
      { name: 'Tavily', desc: 'Web search' },
      { name: 'E2B', desc: 'Code sandbox' },
      { name: 'Playwright', desc: 'Browser' },
    ]
  }
]

export default function TechStack() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <h2 className="section-title text-center text-gradient">
            Technology Stack
          </h2>
          <p className="section-subtitle">
            Battle-tested technologies powering every layer of the platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-strong card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="text-lg font-semibold text-gradient">{cat.name}</h3>
              </div>

              <div className="space-y-3">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors" />
                      <span className="text-sm text-gray-300 font-medium">{tech.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

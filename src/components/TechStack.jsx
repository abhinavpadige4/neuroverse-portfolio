import { motion } from 'framer-motion'

const categories = [
  { name: 'AI & ML', color: 'from-indigo-400 to-purple-500', techs: ['LangGraph', 'LangChain', 'Pinecone', 'OpenAI', 'NVIDIA NIM', 'Cohere'] },
  { name: 'Backend', color: 'from-blue-400 to-cyan-500', techs: ['Spring Boot', 'FastAPI', 'Python', 'Java', 'Kafka', 'GraphQL'] },
  { name: 'Frontend', color: 'from-purple-400 to-pink-500', techs: ['React', 'TanStack', 'Vite', 'Tailwind', 'Framer Motion', 'TypeScript'] },
  { name: 'Data & Storage', color: 'from-emerald-400 to-teal-500', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'Neon'] },
  { name: 'DevOps', color: 'from-amber-400 to-orange-500', techs: ['Docker', 'Prometheus', 'Grafana', 'Jaeger', 'GitHub Actions'] },
  { name: 'MCP Tools', color: 'from-rose-400 to-red-500', techs: ['GitHub', 'Vercel', 'Notion', 'Tavily', 'E2B', 'Playwright'] },
]

export default function TechStack() {
  return (
    <section className='relative py-24'>
      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className='text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-4'>Technology Stack</h2>
          <p className='text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12'>Battle-tested technologies powering every layer</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className='bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] transition-all hover:-translate-y-1'>
              <div className='flex items-center gap-3 mb-4'>
                <div className={w-2 h-8 rounded-full bg-gradient-to-b } />
                <h3 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>{c.name}</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {c.techs.map((t) => <span key={t} className='px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default'>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
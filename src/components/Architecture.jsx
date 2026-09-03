import { motion } from 'framer-motion'
import { Layers, Network, Workflow, Cpu, Database } from 'lucide-react'

const layers = [
  { name: 'Presentation Layer', desc: 'React dashboard with real-time pipeline telemetry, live agent status, and interactive task management.', icon: Layers, color: 'from-indigo-400 to-purple-500', items: ['React + Vite', 'TanStack Router', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'API Gateway', desc: 'Spring Boot gateway handling REST API, task persistence, Kafka event publishing, and Prometheus metrics.', icon: Network, color: 'from-blue-400 to-cyan-500', items: ['Spring Boot', 'PostgreSQL', 'Kafka', 'OTEL'] },
  { name: 'Orchestration Engine', desc: 'LangGraph state machine that sequences agents, manages retries, and enforces quality gates.', icon: Workflow, color: 'from-purple-400 to-pink-500', items: ['LangGraph', 'State Machine', 'Retry Logic', 'Quality Gates'] },
  { name: 'Agent Layer', desc: 'Six specialized A2A agents running as independent FastAPI microservices, horizontally scalable.', icon: Cpu, color: 'from-emerald-400 to-teal-500', items: ['FastAPI', 'A2A Protocol', 'MCP Tools', 'Auto-scale'] },
  { name: 'Data & Storage', desc: 'Three-tier storage with Redis caching, PostgreSQL persistence, and MongoDB document store.', icon: Database, color: 'from-amber-400 to-orange-500', items: ['Redis', 'PostgreSQL', 'MongoDB', 'Pinecone'] },
]

export default function Architecture() {
  return (
    <section className='relative py-24'>
      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className='text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-4'>System Architecture</h2>
          <p className='text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16'>Five-layer architecture for scalability, resilience, and real-time performance</p>
        </motion.div>

        <div className='relative space-y-12'>
          <div className='absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent -translate-x-1/2' />
          {layers.map((l, i) => (
            <motion.div key={l.name} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              className={elative flex flex-col md:flex-row items-start gap-8 }>
              <div className='absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-dark-900 top-5'>
                <div className={w-full h-full rounded-full bg-gradient-to-r } />
              </div>
              <div className={ml-14 md:ml-0 md:w-[calc(50%-2rem)] }>
                <div className='bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] transition-all'>
                  <div className='flex items-center gap-3 mb-3'>
                    <l.icon size={20} className='text-indigo-400' />
                    <h3 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>{l.name}</h3>
                  </div>
                  <p className='text-gray-400 text-sm leading-relaxed mb-4'>{l.desc}</p>
                  <div className='flex flex-wrap gap-2'>{l.items.map((t) => <span key={t} className='px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300'>{t}</span>)}</div>
                </div>
              </div>
              <div className='hidden md:block md:w-[calc(50%-2rem)]' />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          className='mt-16 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 text-center'>
          <h3 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4'>Request Flow</h3>
          <div className='flex flex-wrap items-center justify-center gap-3 text-sm'>
            {['Client', 'Gateway', 'Kafka', 'Orchestrator', 'Agents', 'Results'].map((s, i) => (
              <div key={s} className='flex items-center gap-3'>
                <span className='px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-gray-300'>{s}</span>
                {i < 5 && <span className='text-indigo-400'>→</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { Layers, ArrowRight, Database, Cpu, Network, Workflow } from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const layers = [
  {
    name: 'Presentation Layer',
    description: 'React dashboard with real-time pipeline telemetry, live agent status, and interactive task management.',
    icon: Layers,
    color: 'from-indigo-400 to-purple-500',
    items: ['React + Vite', 'TanStack Router', 'Tailwind CSS', 'Framer Motion']
  },
  {
    name: 'API Gateway',
    description: 'Spring Boot gateway handling REST API, task persistence, Kafka event publishing, and Prometheus metrics.',
    icon: Network,
    color: 'from-blue-400 to-cyan-500',
    items: ['Spring Boot', 'PostgreSQL', 'Kafka Producer', 'OTEL Tracing']
  },
  {
    name: 'Orchestration Engine',
    description: 'LangGraph state machine that sequences agents, manages retries, and enforces quality gates.',
    icon: Workflow,
    color: 'from-purple-400 to-pink-500',
    items: ['LangGraph', 'State Machine', 'Conditional Edges', 'Retry Logic']
  },
  {
    name: 'Agent Layer',
    description: 'Six specialized A2A agents running as independent FastAPI microservices, horizontally scalable.',
    icon: Cpu,
    color: 'from-emerald-400 to-teal-500',
    items: ['FastAPI', 'A2A Protocol', 'MCP Tools', 'Auto-scaling']
  },
  {
    name: 'Data & Storage',
    description: 'Three-tier storage architecture with Redis caching, PostgreSQL persistence, and MongoDB document store.',
    icon: Database,
    color: 'from-amber-400 to-orange-500',
    items: ['Redis', 'PostgreSQL', 'MongoDB', 'Pinecone']
  }
]

export default function Architecture() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <h2 className="section-title text-center text-gradient">
            System Architecture
          </h2>
          <p className="section-subtitle">
            Five-layer architecture designed for scalability, resilience, and real-time performance
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical connector line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r border-2 border-[#0a0a0f]"
                  style={{ top: '1.5rem' }}
                >
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${layer.color}`} />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-strong card-hover p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r ${layer.color}/20`}>
                        <layer.icon size={20} className={`${layer.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gradient">{layer.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{layer.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span key={item} className="px-3 py-1 rounded-full text-xs font-mono glass text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass-strong p-8"
        >
          <h3 className="text-xl font-semibold text-gradient text-center mb-8">Request Flow</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {['Client', 'Gateway', 'Kafka', 'Orchestrator', 'Agents', 'Results'].map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="glass px-4 py-2 rounded-lg text-gray-300 font-mono">{step}</div>
                {i < 5 && <ArrowRight size={16} className="text-indigo-400" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

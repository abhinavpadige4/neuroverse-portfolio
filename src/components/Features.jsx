import { motion } from 'framer-motion'
import { Brain, Shield, Globe, Zap, Settings, Code } from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const agents = [
  {
    id: 1,
    name: 'Cognitive Core',
    description: 'The central reasoning engine that processes complex queries, performs logical deductions, and maintains contextual awareness across multi-turn conversations.',
    icon: Brain,
    color: 'from-indigo-400 to-purple-500',
    glow: 'glow-indigo',
    stats: [
      { label: 'IQ', value: '185+' },
      { label: 'Context', value: '1M tokens' },
      { label: 'Speed', value: 'Sub-ms' }
    ]
  },
  {
    id: 2,
    name: 'Security Sentinel',
    description: 'Advanced threat detection and response system that continuously monitors for vulnerabilities, implements zero-trust policies, and ensures compliance.',
    icon: Shield,
    color: 'from-emerald-400 to-teal-500',
    glow: 'glow-emerald',
    stats: [
      { label: 'Threats', value: 'Blocked/Day' },
      { label: 'Scan Rate', value: 'Real-time' },
      { label: 'Compliance', value: 'SOC2/HIPAA' }
    ]
  },
  {
    id: 3,
    name: 'Network Navigator',
    description: 'Intelligent routing and load balancing system that optimizes data flow, reduces latency, and ensures high availability across distributed systems.',
    icon: Globe,
    color: 'from-blue-400 to-cyan-500',
    glow: 'glow-blue',
    stats: [
      { label: 'Nodes', value: '10,000+' },
      { label: 'Latency', value: '<5ms' },
      { label: 'Uptime', value: '99.99%' }
    ]
  },
  {
    id: 4,
    name: 'Process Orchestrator',
    description: 'Workflow automation agent that coordinates complex multi-step processes, manages dependencies, and adapts to changing conditions in real-time.',
    icon: Settings,
    color: 'from-amber-400 to-orange-500',
    glow: 'glow-amber',
    stats: [
      { label: 'Workflows', value: 'Active' },
      { label: 'Success Rate', value: '99.8%' },
      { label: 'Adaptation', value: 'Real-time' }
    ]
  },
  {
    id: 5,
    name: 'Code Artisan',
    description: 'Specialized development agent that writes, reviews, and optimizes code across multiple languages, ensuring best practices and performance.',
    icon: Code,
    color: 'from-purple-400 to-pink-500',
    glow: 'glow-purple',
    stats: [
      { label: 'Languages', value: '25+' },
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Review Speed', value: '10x faster' }
    ]
  },
  {
    id: 6,
    name: 'Data Alchemist',
    description: 'Advanced analytics and pattern recognition agent that transforms raw data into actionable insights through machine learning and statistical modeling.',
    icon: Zap,
    color: 'from-yellow-400 to-red-500',
    glow: 'glow-yellow',
    stats: [
      { label: 'Datasets', value: 'PB Scale' },
      { label: 'Accuracy', value: '99.2%' },
      { label: 'Insights', value: 'Real-time' }
    ]
  }
]

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <h2 className="section-title text-center text-gradient">
            Intelligent Agent Ecosystem
          </h2>
          <p className="section-subtitle">
            Six specialized AI agents working in concert to deliver unprecedented capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="glass-strong card-hover group relative overflow-hidden"
              style={{
                transitionDelay: `${agents.indexOf(agent) * 0.1}s`
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 -z-0 rounded-2xl bg-gradient-to-r"
                style={{
                  background: agent.color,
                  opacity: 0.15,
                  filter: 'blur(20px)',
                  transform: 'translateZ(0)'
                }}
              />
              
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${agent.glow} ${agent.color}/20`}>
                    <agent.icon size={24} className={`${agent.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">
                    {agent.name}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {agent.description}
                </p>
                
                <div className="space-y-3">
                  {agent.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between text-xs text-gray-500">
                      <span>{stat.label}</span>
                      <span className="font-mono text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
                
                {/* Pulsing indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: agent.color.split(' ')[0].replace('from', 'bg'),
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  />
                  <span className="text-xs text-gray-400">Operational</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
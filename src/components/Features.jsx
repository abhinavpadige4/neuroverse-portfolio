import { motion } from 'framer-motion'
import { Brain, Shield, Globe, Zap, Settings, Code } from 'lucide-react'

const agents = [
  { name: 'Cognitive Core', desc: 'Central reasoning engine processing complex queries with contextual awareness across multi-turn conversations.', icon: Brain, gradient: 'from-indigo-400 to-purple-500', stats: [{ l: 'IQ', v: '185+' }, { l: 'Context', v: '1M tokens' }, { l: 'Speed', v: 'Sub-ms' }] },
  { name: 'Security Sentinel', desc: 'Advanced threat detection with zero-trust policies, continuous monitoring, and SOC2/HIPAA compliance.', icon: Shield, gradient: 'from-emerald-400 to-teal-500', stats: [{ l: 'Threats', v: 'Blocked/Day' }, { l: 'Scan', v: 'Real-time' }, { l: 'Compliance', v: 'SOC2' }] },
  { name: 'Network Navigator', desc: 'Intelligent routing and load balancing optimizing data flow across distributed systems.', icon: Globe, gradient: 'from-blue-400 to-cyan-500', stats: [{ l: 'Nodes', v: '10K+' }, { l: 'Latency', v: '<5ms' }, { l: 'Uptime', v: '99.99%' }] },
  { name: 'Process Orchestrator', desc: 'Workflow automation coordinating multi-step processes with real-time adaptation.', icon: Settings, gradient: 'from-amber-400 to-orange-500', stats: [{ l: 'Workflows', v: 'Active' }, { l: 'Success', v: '99.8%' }, { l: 'Adapt', v: 'Real-time' }] },
  { name: 'Code Artisan', desc: 'Writes, reviews, and optimizes code across 25+ languages with 10x faster review speed.', icon: Code, gradient: 'from-purple-400 to-pink-500', stats: [{ l: 'Languages', v: '25+' }, { l: 'Accuracy', v: '98.5%' }, { l: 'Review', v: '10x faster' }] },
  { name: 'Data Alchemist', desc: 'Transforms raw data into actionable insights through ML and statistical modeling at PB scale.', icon: Zap, gradient: 'from-yellow-400 to-red-500', stats: [{ l: 'Datasets', v: 'PB Scale' }, { l: 'Accuracy', v: '99.2%' }, { l: 'Insights', v: 'Real-time' }] },
]

export default function Features() {
  return (
    <section id='features' className='relative py-24'>
      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className='text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-4'>Intelligent Agent Ecosystem</h2>
          <p className='text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12'>Six specialized AI agents working in concert</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {agents.map((a, i) => (
            <motion.div key={a.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className='group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1'>
              <div className='flex items-center gap-3 mb-4'>
                <div className={w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br  bg-opacity-20}>
                  <a.icon size={22} className='text-white' />
                </div>
                <h3 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>{a.name}</h3>
              </div>
              <p className='text-gray-400 text-sm leading-relaxed mb-5'>{a.desc}</p>
              <div className='space-y-2'>
                {a.stats.map((s, j) => (
                  <div key={j} className='flex justify-between text-xs text-gray-500'>
                    <span>{s.l}</span>
                    <span className='font-mono text-white'>{s.v}</span>
                  </div>
                ))}
              </div>
              <div className='mt-4 flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
                <span className='text-xs text-gray-400'>Operational</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
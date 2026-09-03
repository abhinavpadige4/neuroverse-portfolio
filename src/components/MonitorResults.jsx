import { motion } from 'framer-motion'
import { Shield, CheckCircle, AlertTriangle, XCircle, TrendingUp } from 'lucide-react'

const mockResults = [
  { task: 'Real-Time Dashboard', score: 8.5, factuality: 9, coherence: 8, safety: 9, efficiency: 8, verdict: 'EXCELLENT', date: '2026-09-03' },
  { task: 'Travel Itinerary Planner', score: 7.2, factuality: 8, coherence: 7, safety: 8, efficiency: 6, verdict: 'GOOD', date: '2026-09-03' },
  { task: 'WebSocket Collab Module', score: 6.8, factuality: 7, coherence: 7, safety: 8, efficiency: 5, verdict: 'NEEDS_WORK', date: '2026-09-02' },
  { task: 'API Rate Limiter', score: 9.1, factuality: 9, coherence: 9, safety: 10, efficiency: 8, verdict: 'EXCELLENT', date: '2026-09-01' },
]

const verdictColors = { EXCELLENT: 'text-emerald-400 bg-emerald-400/10', GOOD: 'text-blue-400 bg-blue-400/10', NEEDS_WORK: 'text-amber-400 bg-amber-400/10', REJECT: 'text-red-400 bg-red-400/10' }
const verdictIcons = { EXCELLENT: CheckCircle, GOOD: TrendingUp, NEEDS_WORK: AlertTriangle, REJECT: XCircle }

function ScoreBar({ label, value, max = 10 }) {
  const pct = (value / max) * 100
  const color = pct >= 80 ? 'bg-emerald-400' : pct >= 60 ? 'bg-blue-400' : pct >= 40 ? 'bg-amber-400' : 'bg-red-400'
  return (
    <div className='flex items-center gap-3'>
      <span className='text-xs text-gray-500 w-20'>{label}</span>
      <div className='flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden'>
        <motion.div initial={{ width: 0 }} whileInView={{ width: pct + '%' }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} className={h-full rounded-full } />
      </div>
      <span className='text-xs font-mono text-white w-8 text-right'>{value}</span>
    </div>
  )
}

export default function MonitorResults() {
  return (
    <section id='monitor' className='relative py-24'>
      <div className='relative z-10 max-w-5xl mx-auto px-6'>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <Shield size={28} className='text-indigo-400' />
            <h2 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400'>Monitor Agent</h2>
          </div>
          <p className='text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12'>Real-time quality scoring across factuality, coherence, safety, and efficiency</p>
        </motion.div>

        {/* Summary cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10'>
          {[
            { label: 'Tasks Scored', value: '24', trend: '+6 today' },
            { label: 'Avg Score', value: '7.8', trend: '+0.3 this week' },
            { label: 'Pass Rate', value: '87%', trend: 'Above 7.0 threshold' },
            { label: 'Auto-Retry', value: '3', trend: 'Fixed & retested' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className='bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-4 text-center'>
              <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>{s.value}</div>
              <div className='text-xs text-gray-500 mt-1'>{s.label}</div>
              <div className='text-[10px] text-gray-600 mt-0.5'>{s.trend}</div>
            </motion.div>
          ))}
        </div>

        {/* Individual results */}
        <div className='space-y-4'>
          {mockResults.map((r, i) => {
            const Icon = verdictIcons[r.verdict]
            return (
              <motion.div key={r.task} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className='bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-5 hover:bg-white/[0.06] transition-all'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4'>
                  <div className='flex items-center gap-3'>
                    <Icon size={18} className='text-indigo-400' />
                    <span className='font-semibold text-white'>{r.task}</span>
                    <span className='text-xs text-gray-500 font-mono'>{r.date}</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>{r.score}</span>
                    <span className={px-2 py-0.5 rounded-full text-[10px] font-bold }>{r.verdict}</span>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                  <ScoreBar label='Factuality' value={r.factuality} />
                  <ScoreBar label='Coherence' value={r.coherence} />
                  <ScoreBar label='Safety' value={r.safety} />
                  <ScoreBar label='Efficiency' value={r.efficiency} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { Brain, ArrowRight, Sparkles, Zap, Globe, Shield } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
const stagger = { visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }

const icons = [
  { Icon: Brain, x: '8%', y: '18%', delay: 0, color: 'text-indigo-400' },
  { Icon: Sparkles, x: '88%', y: '12%', delay: 0.8, color: 'text-purple-400' },
  { Icon: Zap, x: '12%', y: '78%', delay: 1.6, color: 'text-yellow-400' },
  { Icon: Globe, x: '82%', y: '72%', delay: 0.4, color: 'text-blue-400' },
  { Icon: Shield, x: '50%', y: '8%', delay: 1.2, color: 'text-emerald-400' },
]

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div className='absolute w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]' animate={{ x: [0,100,0], y: [0,-50,0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} style={{ top: '10%', left: '10%' }} />
        <motion.div className='absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]' animate={{ x: [0,-80,0], y: [0,60,0] }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} style={{ bottom: '10%', right: '10%' }} />
        <motion.div className='absolute w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[100px]' animate={{ x: [0,60,0], y: [0,-80,0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      </div>

      {icons.map((item, i) => (
        <motion.div key={i} className={`absolute opacity-20`} style={{ left: item.x, top: item.y }}
          animate={{ y: [0,-15,0], rotate: [0,10,0] }}
          transition={{ duration: 4 + item.delay, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}>
          <item.Icon size={40} className={item.color} />
        </motion.div>
      ))}

      <div className='absolute inset-0 opacity-[0.03]' style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className='relative z-10 max-w-6xl mx-auto px-6 text-center'>
        <motion.div variants={stagger} initial='hidden' animate='visible' className='space-y-8'>
          <motion.div variants={fadeUp}>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur mb-8'>
              <motion.span animate={{ scale: [1,1.2,1] }} transition={{ duration: 2, repeat: Infinity }} className='w-2 h-2 rounded-full bg-emerald-400' />
              <span className='text-sm text-gray-300 font-medium'>Next-Gen AI Operating System</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className='relative'>
            <span className='text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400'>Neuro</span>
              <span className='text-white'>Verse</span>
            </span>
            <motion.span className='absolute -top-2 -right-4 md:-right-8 text-xs md:text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500'
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: 'spring' }}>AI OS</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} className='text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed'>
            A revolutionary <span className='text-indigo-400 font-semibold'>multi-agent AI ecosystem</span> that orchestrates intelligent workflows, autonomous decision-making, and seamless human-AI collaboration.
          </motion.p>

          <motion.div variants={fadeUp} className='flex flex-wrap justify-center gap-3 mb-10'>
            {[{ icon: Brain, text: 'Multi-Agent' }, { icon: Zap, text: 'Real-Time' }, { icon: Shield, text: 'Secure' }, { icon: Globe, text: 'Global Scale' }].map((f, i) => (
              <div key={i} className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default'>
                <f.icon size={16} className='text-indigo-400' />{f.text}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='#features' className='px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2'>
              Explore Agents <ArrowRight size={18} />
            </a>
            <a href='https://github.com/abhinavpadige4' target='_blank' rel='noreferrer' className='px-8 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2'>
              <Sparkles size={18} className='text-purple-400' /> View Source
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className='grid grid-cols-3 gap-8 max-w-lg mx-auto pt-12'>
            {[{ v: '6', l: 'AI Agents' }, { v: '10x', l: 'Faster' }, { v: '99.9%', l: 'Uptime' }].map((s, i) => (
              <div key={i} className='text-center'>
                <div className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>{s.v}</div>
                <div className='text-xs text-gray-500 mt-1'>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className='absolute bottom-8 left-1/2 -translate-x-1/2' animate={{ y: [0,10,0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className='w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2'>
            <motion.div className='w-1 h-2 rounded-full bg-indigo-400' animate={{ y: [0,12,0], opacity: [1,0.3,1] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Brain, ArrowRight, Sparkles, Zap, Globe, Shield } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const floatingIcons = [
  { icon: Brain, x: '10%', y: '20%', delay: 0, color: 'text-indigo-400' },
  { icon: Sparkles, x: '85%', y: '15%', delay: 1, color: 'text-purple-400' },
  { icon: Zap, x: '15%', y: '75%', delay: 2, color: 'text-yellow-400' },
  { icon: Globe, x: '80%', y: '70%', delay: 0.5, color: 'text-blue-400' },
  { icon: Shield, x: '50%', y: '10%', delay: 1.5, color: 'text-emerald-400' },
  { icon: Brain, x: '75%', y: '45%', delay: 2.5, color: 'text-pink-400' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '10%', right: '10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[100px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} opacity-20`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4 + item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          <item.icon size={40} />
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
              <span className="text-sm text-gray-300 font-medium">Next-Gen AI Operating System</span>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1 variants={itemVariants} className="relative">
            <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="text-gradient">Neuro</span>
              <span className="text-white">Verse</span>
            </span>
            <motion.span
              className="absolute -top-2 -right-4 md:-right-8 text-xs md:text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring' }}
            >
              AI OS
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A revolutionary <span className="text-indigo-400 font-semibold">multi-agent AI ecosystem</span> that orchestrates
            intelligent workflows, autonomous decision-making, and seamless human-AI collaboration.
          </motion.p>

          {/* Feature pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: Brain, text: 'Multi-Agent Architecture' },
              { icon: Zap, text: 'Real-Time Processing' },
              { icon: Shield, text: 'Enterprise Security' },
              { icon: Globe, text: 'Global Scale' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <feature.icon size={16} className="text-indigo-400" />
                {feature.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="btn-secondary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={18} className="text-purple-400" />
              View Documentation
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-12">
            {[
              { value: '6', label: 'AI Agents' },
              { value: '10x', label: 'Faster Workflows' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-indigo-400"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
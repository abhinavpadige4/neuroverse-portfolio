import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-gradient">NeuroVerse</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A multi-agent AI operating system orchestrating intelligent workflows
              with real-time monitoring and quality scoring.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Architecture</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Deploy Guide</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/abhinavpadige4" target="_blank" rel="noreferrer"
                className="w-10 h-10 glass flex items-center justify-center rounded-lg text-gray-400 hover:text-indigo-400 hover:bg-white/[0.08] transition-all">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 glass flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/[0.08] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:abhinav@example.com"
                className="w-10 h-10 glass flex items-center justify-center rounded-lg text-gray-400 hover:text-purple-400 hover:bg-white/[0.08] transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> by Abhinav using NeuroVerse AI OS
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-8 h-8 glass flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

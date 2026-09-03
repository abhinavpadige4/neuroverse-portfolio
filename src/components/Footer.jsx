import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='relative border-t border-white/[0.06] bg-dark-900/80'>
      <div className='relative z-10 max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center'><span className='text-white font-bold text-sm'>N</span></div>
              <span className='text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>NeuroVerse</span>
            </div>
            <p className='text-sm text-gray-400 leading-relaxed'>A multi-agent AI operating system orchestrating intelligent workflows with real-time monitoring and quality scoring.</p>
          </div>
          <div>
            <h4 className='text-sm font-semibold text-white mb-4'>Platform</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li><a href='#features' className='hover:text-indigo-400 transition-colors'>Agents</a></li>
              <li><a href='#monitor' className='hover:text-indigo-400 transition-colors'>Monitor</a></li>
              <li><a href='https://github.com/abhinavpadige4/neuroverse' target='_blank' rel='noreferrer' className='hover:text-indigo-400 transition-colors'>Documentation</a></li>
              <li><a href='https://github.com/abhinavpadige4/neuroverse' target='_blank' rel='noreferrer' className='hover:text-indigo-400 transition-colors'>Source Code</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-sm font-semibold text-white mb-4'>Connect</h4>
            <div className='flex gap-3'>
              <a href='https://github.com/abhinavpadige4' target='_blank' rel='noreferrer' className='w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg text-gray-400 hover:text-indigo-400 hover:bg-white/10 transition-all'><Github size={18} /></a>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all'><Linkedin size={18} /></a>
              <a href='mailto:abhinav@example.com' className='w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg text-gray-400 hover:text-purple-400 hover:bg-white/10 transition-all'><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-xs text-gray-500 flex items-center gap-1'>Built with <Heart size={12} className='text-red-400' /> by Abhinav using NeuroVerse AI OS</p>
          <a href='#' className='w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all'><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
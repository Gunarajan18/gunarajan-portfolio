import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import profileImg from '../assets/profile.jpg'

/* ── Typing role ── */
const ROLES = ['Java Programmer', 'Coding & Electronics Enthusiast', 'Problem Solver']
function TypingRole() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const target = ROLES[idx]
    let t
    if (!del) {
      if (text.length < target.length) t = setTimeout(() => setText(target.slice(0, text.length + 1)), 70)
      else t = setTimeout(() => setDel(true), 2000)
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 40)
      else { setDel(false); setIdx((idx + 1) % ROLES.length) }
    }
    return () => clearTimeout(t)
  }, [text, del, idx])
  return (
    <span className="text-blue-600 font-semibold">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-blue-600 ml-0.5 align-middle"
      />
    </span>
  )
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: 64 }}>

      {/* Static split background — no animation */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full bg-white" />
        <div className="w-1/2 h-full" style={{ background: 'linear-gradient(148deg,#eef3ff 0%,#dce8fb 40%,#c5d8f5 100%)' }} />
      </div>

      {/* Diagonal divider */}
      <div
        className="absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{ left: '47%', width: 130, background: 'white', clipPath: 'polygon(0 0,50px 0,0 100%)' }}
      />

      {/* Two-column layout */}
      <div className="relative z-20 grid grid-cols-2" style={{ minHeight: 'calc(100vh - 64px)' }}>

        {/* LEFT — text */}
        <div className="flex items-center pl-[6vw] pr-10 py-16">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-[530px] w-full">

            <motion.div variants={item} className="mb-7">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest">
                <motion.span
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-blue-500 inline-block"
                />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1 variants={item}
              className="font-display font-black leading-none tracking-[-0.04em] text-[#0d0d0d] mb-5"
              style={{ fontSize: 'clamp(3.8rem,5.5vw,7rem)' }}>
              Gunar<span className="text-transparent" style={{ WebkitTextStroke: '2.5px #2563eb' }}>ajan</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-[#4a4a4a] mb-3 font-light">
              Aspiring <TypingRole />
            </motion.p>

            <motion.p variants={item}
              className="font-display italic text-[#6a6a6a] leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem,1.4vw,1.22rem)' }}>
              "Building efficient solutions<br />with code and intelligence"
            </motion.p>

            <motion.div variants={item} className="flex gap-4 flex-wrap">
              <motion.a href="#projects" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#0d0d0d] text-white px-8 py-3.5 rounded-full text-[0.95rem] font-medium"
                style={{ boxShadow: '0 10px 35px rgba(0,0,0,0.22)' }}>
                View Projects
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </motion.a>
              <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-2 border-[#e0e0e0] text-[#1a1a1a] px-8 py-3.5 rounded-full text-[0.95rem] font-medium hover:border-blue-500 hover:text-blue-600 transition-colors">
                ↓ Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-8 mt-12 pt-8 border-t border-[#f0f0f0]">
              {[['8.41', 'GPA'], ['3+', 'Projects'], ['2', 'Internships'], ['Top 10', 'National']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display font-bold text-[1.55rem] text-[#0d0d0d] leading-none">{v}</div>
                  <div className="text-[0.68rem] text-[#9a9a9a] mt-1 tracking-wide uppercase">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — static image, no animation, no particles */}
        <div className="relative overflow-hidden">
          <img
            src={profileImg}
            alt="Gunarajan"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-[0.62rem] tracking-[0.2em] text-[#aaa] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#aaa] to-transparent" />
      </motion.div>
    </section>
  )
}

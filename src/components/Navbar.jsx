import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About','Projects','Experience','Education','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4,0,0.2,1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-16 bg-white/88 backdrop-blur-xl border-b border-black/[0.06] transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <a href="#hero" className="font-display text-xl font-bold tracking-tight text-[#1a1a1a]">Gunarajan</a>
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm font-medium text-[#4a4a4a] hover:text-blue-600 transition-colors">{l}</a></li>
          ))}
        </ul>
        <a href="/resume.pdf" download className="hidden md:inline-flex bg-[#1a1a1a] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">Download CV</a>
        <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={() => setOpen(!open)}>
          <span className="w-[22px] h-[2px] bg-[#1a1a1a] rounded block"/>
          <span className="w-[22px] h-[2px] bg-[#1a1a1a] rounded block"/>
          <span className="w-[22px] h-[2px] bg-[#1a1a1a] rounded block"/>
        </button>
      </motion.nav>

      {open && (
        <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} className="fixed top-16 left-0 right-0 z-40 bg-white/96 backdrop-blur-xl border-b border-[#e5e5e3] flex flex-col p-6 gap-5 md:hidden">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)} className="text-[#1a1a1a] font-medium text-base">{l}</a>)}
          <a href="/resume.pdf" download className="text-blue-600 font-medium">↓ Download CV</a>
        </motion.div>
      )}
    </>
  )
}

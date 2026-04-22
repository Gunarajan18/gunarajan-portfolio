import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export function useReveal(threshold=0.12) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return [ref, inView]
}

export function SectionHeader({ label, title, light=false }) {
  const [ref, inView] = useReveal()
  const lines = title.split('\n')
  return (
    <div ref={ref} className="mb-14">
      <motion.span
        initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}}
        transition={{duration:0.6,ease:[0.4,0,0.2,1]}}
        className={`block text-xs font-bold tracking-[0.15em] uppercase mb-3 ${light?'text-blue-400':'text-blue-600'}`}
      >{label}</motion.span>

      <div className="overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h2
              initial={{y:'110%'}} animate={inView?{y:0}:{}}
              transition={{duration:0.75,delay:0.08+i*0.1,ease:[0.22,1,0.36,1]}}
              className={`font-display font-bold leading-[1.1] tracking-[-0.025em] ${light?'text-white':'text-[#0d0d0d]'}`}
              style={{fontSize:'clamp(2.2rem,4vw,3.2rem)',display:'block'}}
            >{line}</motion.h2>
          </div>
        ))}
      </div>

      <motion.div
        initial={{scaleX:0,originX:0}} animate={inView?{scaleX:1}:{}}
        transition={{duration:0.7,delay:0.35,ease:[0.4,0,0.2,1]}}
        className={`mt-5 w-14 h-[3px] rounded-full bg-gradient-to-r ${light?'from-blue-400 to-purple-400':'from-blue-600 to-blue-300'} to-transparent`}
      />
    </div>
  )
}

export function Reveal({ children, delay=0, direction='up', className='' }) {
  const [ref, inView] = useReveal()
  const variants = {
    hidden: direction==='up' ? {opacity:0,y:40} : direction==='left' ? {opacity:0,x:-40} : {opacity:0,x:40},
    visible: {opacity:1,y:0,x:0,transition:{duration:0.75,delay,ease:[0.22,1,0.36,1]}}
  }
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView?'visible':'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerReveal({ children, className='' }) {
  const [ref, inView] = useReveal()
  const container = { hidden:{}, visible:{ transition:{ staggerChildren:0.1 } } }
  const item = { hidden:{opacity:0,y:28}, visible:{opacity:1,y:0,transition:{duration:0.65,ease:[0.22,1,0.36,1]}} }
  return (
    <motion.div ref={ref} variants={container} initial="hidden" animate={inView?'visible':'hidden'} className={className}>
      {Array.isArray(children)
        ? children.map((child,i) => <motion.div key={i} variants={item}>{child}</motion.div>)
        : <motion.div variants={item}>{children}</motion.div>
      }
    </motion.div>
  )
}

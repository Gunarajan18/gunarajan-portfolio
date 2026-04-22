import { motion } from 'framer-motion'
import { SectionHeader, Reveal, StaggerReveal, useReveal } from './utils'

// ──────────────────────────── ABOUT ────────────────────────────
const skills = [
  { label: 'Languages', tags: ['Java','Python'] },
  { label: 'Web', tags: ['HTML','CSS'] },
  { label: 'Core', tags: ['Data Structures & Algorithms','Problem Solving'] },
  { label: 'Tools & Platforms', tags: ['VS Code','MATLAB','Excel','Linux','Windows'] },
]

export function About() {
  return (
    <section id="about" className="py-32 px-[5vw] bg-[#f9f9f7]">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader label="About Me" title={"Crafting Code,\nChasing Intelligence"} />
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-20 items-start">
          <Reveal direction="left">
            <p className="text-[1.12rem] leading-[1.9] text-[#4a4a4a] font-light">
              Aspiring software developer with strong{' '}
              <strong className="text-[#0d0d0d] font-semibold">problem-solving skills</strong> and a solid
              foundation in <strong className="text-[#0d0d0d] font-semibold">Java and Python</strong>.
              Actively learning Data Structures and Algorithms and exploring{' '}
              <strong className="text-[#0d0d0d] font-semibold">Machine Learning</strong>. Passionate about
              building scalable and efficient systems.
            </p>
            <p className="mt-5 text-[0.94rem] text-[#8a8a8a] font-light leading-relaxed">
              Currently pursuing B.E. in Electrical and Electronics Engineering at KIT, Tamil Nadu —
              with a GPA of 8.41, and hands-on experience across IoT, robotics, and power electronics.
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className="flex flex-col gap-5">
              {skills.map(({ label, tags }, si) => (
                <div key={label}>
                  <p className="text-[0.7rem] font-bold text-[#9a9a9a] tracking-[0.12em] uppercase mb-2.5">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t, ti) => (
                      <motion.span
                        key={t}
                        initial={{opacity:0,scale:0.85}}
                        whileInView={{opacity:1,scale:1}}
                        viewport={{once:true}}
                        transition={{delay: si*0.05 + ti*0.04, duration:0.4, ease:[0.22,1,0.36,1]}}
                        whileHover={{scale:1.06, y:-2}}
                        className="bg-white border border-[#e8e8e8] text-[#4a4a4a] px-4 py-1.5 rounded-full text-[0.82rem] font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all cursor-default"
                      >{t}</motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────── PROJECTS ────────────────────────────
const projects = [
  {
    num:'01', title:'Advanced Secured Wireless Communication with AES',
    desc:'Secure wireless communication using AES-128 encryption for IoT-based devices. Implemented encryption logic ensuring safe data transmission and improved system reliability.',
    badge:'IoT · Security · Encryption', color:'from-blue-600 to-cyan-500'
  },
  {
    num:'02', title:'e-Yantra Robotic Challenge – Logistic CoBot',
    desc:'Logistics-based collaborative robot for warehouse automation. Contributed to system design and problem-solving, achieving a Top 10 national ranking after clearing multiple stages.',
    badge:'🏆 Top 10 National Ranking', color:'from-amber-500 to-orange-500'
  },
  {
    num:'03', title:'Synchronous Buck Converter with Dead-Time Adaptive Control',
    desc:'Designed a buck converter using dead-time adaptive control to reduce switching losses and thermal stress. Control logic built using Embedded C for improved efficiency.',
    badge:'Embedded C · Power Electronics', color:'from-purple-600 to-violet-500'
  },
]

export function Projects() {
  const [ref, inView] = useReveal()
  return (
    <section id="projects" className="py-32 px-[5vw] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader label="Work" title="Featured Projects" />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.num}
              initial={{opacity:0, y:50}}
              animate={inView ? {opacity:1, y:0} : {}}
              transition={{duration:0.7, delay:i*0.14, ease:[0.22,1,0.36,1]}}
              whileHover={{y:-10, transition:{duration:0.3}}}
              className="group bg-white border border-[#ebebeb] rounded-[24px] p-9 relative overflow-hidden cursor-default"
              style={{boxShadow:'0 2px 20px rgba(0,0,0,0.04)'}}
            >
              {/* Animated top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${p.color} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-[24px]`}/>
              
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] pointer-events-none"
                style={{background:'radial-gradient(ellipse at 50% 0%,rgba(37,99,235,0.04),transparent 70%)'}}
              />

              {/* Shadow on hover */}
              <motion.div
                className="absolute inset-0 rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{boxShadow:'0 24px 60px rgba(0,0,0,0.12)'}}
              />

              <div className={`font-display text-[4rem] font-black leading-none mb-5 bg-gradient-to-br ${p.color} bg-clip-text text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none`}>{p.num}</div>
              <h3 className="text-[1.06rem] font-semibold text-[#0d0d0d] mb-3 leading-snug">{p.title}</h3>
              <p className="text-[0.9rem] text-[#8a8a8a] font-light leading-[1.75]">{p.desc}</p>
              <span className={`inline-block mt-5 bg-gradient-to-r ${p.color} text-white px-3.5 py-1 rounded-full text-[0.72rem] font-bold tracking-wide`}>{p.badge}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────── EXPERIENCE ────────────────────────────
const experiences = [
  { period:'June 2024 – July 2024', role:'Intern – Electrical Systems', company:'Intelle Power and Automation Pvt Ltd', desc:'Worked on electrical system design and automation workflows, gaining hands-on experience with industrial-grade power systems.' },
  { period:'February 2024', role:'Trainee – Battery & BMS Systems', company:'Pinnacle Lithium Power', desc:'Trained on battery management systems and lithium power cell technology, understanding BMS architecture and EV power chains.' },
]

export function Experience() {
  const [ref, inView] = useReveal()
  return (
    <section id="experience" className="py-32 px-[5vw] bg-[#f9f9f7]">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader label="Career" title="Experience" />
        <div ref={ref} className="relative max-w-[720px]">
          {/* Timeline line */}
          <motion.div
            initial={{scaleY:0, originY:0}}
            animate={inView?{scaleY:1}:{}}
            transition={{duration:1, delay:0.2, ease:[0.22,1,0.36,1]}}
            className="absolute left-[11px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-400 to-blue-100"
          />
          {experiences.map((e, i) => (
            <motion.div key={i}
              initial={{opacity:0, x:-30}}
              animate={inView?{opacity:1,x:0}:{}}
              transition={{duration:0.7, delay:0.3+i*0.18, ease:[0.22,1,0.36,1]}}
              className="grid pb-10" style={{gridTemplateColumns:'24px 1fr', gap:'1.5rem'}}
            >
              <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-500 z-10 flex items-center justify-center mt-1">
                <motion.div
                  animate={{scale:[1,1.4,1]}} transition={{duration:2,repeat:Infinity,delay:i*0.5}}
                  className="w-2 h-2 rounded-full bg-blue-500"
                />
              </div>
              <div className="bg-white border border-[#ebebeb] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-[0.72rem] font-bold text-blue-600 tracking-widest uppercase mb-2">{e.period}</p>
                <p className="text-[1.08rem] font-bold text-[#0d0d0d] mb-1">{e.role}</p>
                <p className="text-[0.88rem] text-[#8a8a8a] mb-3 font-medium">{e.company}</p>
                <p className="text-[0.86rem] text-[#6a6a6a] font-light leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────── EDUCATION ────────────────────────────
const certs = ['Infosys: Python','Infosys: IoT','Infosys: Front-End Dev','Coursera: Sensor Circuit Design','EV Workshop – KCT','AI Solar Panel – Anna Univ','PCB Designing – Sri Indicard']

export function Education() {
  const [ref, inView] = useReveal()
  return (
    <section id="education" className="py-32 px-[5vw] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader label="Background" title="Education" />
        <div ref={ref}>
          {[
            { degree:'B.E. Electrical and Electronics Engineering', school:'KIT – Kalaignar Karunanidhi Institute of Technology, Tamil Nadu', meta:'GPA 8.41', year:'2022–2026', highlight:'8.41' },
            { degree:'Higher Secondary Education', school:'St. Antony Matriculation Higher Secondary School, Tamil Nadu', meta:'10th: 79.2%  ·  12th: 77.16%', year:'2019–2022', highlight:null },
          ].map((e, i) => (
            <motion.div key={i}
              initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.7,delay:i*0.15,ease:[0.22,1,0.36,1]}}
              whileHover={{y:-4,boxShadow:'0 16px 48px rgba(0,0,0,0.1)'}}
              className="border border-[#ebebeb] rounded-[20px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5 bg-white transition-all duration-300 cursor-default"
              style={{boxShadow:'0 2px 16px rgba(0,0,0,0.04)'}}
            >
              <div>
                <p className="text-[1.06rem] font-bold text-[#0d0d0d] mb-1.5">{e.degree}</p>
                <p className="text-[0.88rem] text-[#8a8a8a]">{e.school}</p>
                <p className="text-[0.85rem] text-[#aaa] mt-1">{e.meta}</p>
              </div>
              <div className="text-right shrink-0">
                {e.highlight && (
                  <p className="font-display font-black text-[2rem] text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 leading-none">{e.highlight}</p>
                )}
                <p className="text-[0.78rem] text-[#9a9a9a] mt-1">{e.year}</p>
              </div>
            </motion.div>
          ))}

          {/* GATE 2026 */}
          <motion.div
            initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
            transition={{duration:0.7,delay:0.3,ease:[0.22,1,0.36,1]}}
            whileHover={{y:-4,boxShadow:'0 16px 48px rgba(0,0,0,0.1)'}}
            className="border border-[#ebebeb] rounded-[20px] p-8 mb-5 bg-white transition-all duration-300 cursor-default"
            style={{boxShadow:'0 2px 16px rgba(0,0,0,0.04)'}}
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <p className="text-[1.06rem] font-bold text-[#0d0d0d]">GATE 2026</p>
                  <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase">Qualified</span>
                  <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase">EE</span>
                </div>
                <p className="text-[0.88rem] text-[#8a8a8a]">Graduate Aptitude Test in Engineering — Electrical Engineering</p>
                <p className="text-[0.8rem] text-[#aaa] mt-1">Organised by IIT Guwahati · Valid till March 2029 · Reg: EE26S57425141</p>
              </div>
              {/* GATE Score big */}
              <div className="text-right shrink-0">
                <p className="font-display font-black text-[2.4rem] text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-teal-400 leading-none">269</p>
                <p className="text-[0.7rem] text-[#9a9a9a] mt-1 tracking-wide uppercase">GATE Score</p>
              </div>
            </div>
            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-[#f0f0f0]">
              {[
                { label:'All India Rank', value:'18,304', sub:'out of 65,801' },
                { label:'Marks Obtained', value:'20.67', sub:'out of 100' },
                { label:'Percentile', value:'Top 28%', sub:'of all candidates' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-[#fafafa] rounded-xl p-3 text-center border border-[#f0f0f0]">
                  <p className="text-[0.65rem] font-bold text-[#aaa] tracking-widest uppercase mb-1">{label}</p>
                  <p className="font-display font-bold text-[1.1rem] text-[#0d0d0d] leading-none">{value}</p>
                  <p className="text-[0.65rem] text-[#bbb] mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <div className="mt-12">
            <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-blue-600 mb-5">Certifications & Workshops</p>
            <div className="flex flex-wrap gap-2.5">
              {certs.map((c, i) => (
                <motion.span key={c}
                  initial={{opacity:0,scale:0.85}} animate={inView?{opacity:1,scale:1}:{}}
                  transition={{delay:0.4+i*0.05,duration:0.4,ease:[0.22,1,0.36,1]}}
                  whileHover={{scale:1.06,y:-2}}
                  className="bg-[#f5f5f3] border border-[#e8e8e8] text-[#4a4a4a] px-4 py-1.5 rounded-full text-[0.82rem] font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all cursor-default"
                >{c}</motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────── CONTACT ────────────────────────────
const contacts = [
  { type:'Email', value:'gunarajan2005@gmail.com', href:'mailto:gunarajan2005@gmail.com', icon:'✉️' },
  { type:'LinkedIn', value:'gunarajan-nagarajan', href:'https://linkedin.com/in/gunarajan-nagarajan', icon:'💼' },
  { type:'GitHub', value:'Gunarajan18', href:'https://github.com/Gunarajan18', icon:'🐙' },
  { type:'Phone', value:'+91 79046 08142', href:'tel:+917904608142', icon:'📱' },
]

export function Contact() {
  const [ref, inView] = useReveal()
  return (
    <section id="contact" className="py-32 px-[5vw] bg-[#0d0d0d]">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader label="Get In Touch" title={"Let's Build\nSomething Great"} light />
        <Reveal>
          <p className="text-white/45 mb-12 max-w-[480px] text-[1.05rem] leading-[1.75]">
            Open to internships, collaborative projects, and new opportunities. Feel free to reach out.
          </p>
        </Reveal>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c, i) => (
            <motion.a key={c.type} href={c.href} target={c.href.startsWith('http')?'_blank':undefined}
              initial={{opacity:0, y:30}}
              animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.65,delay:i*0.1,ease:[0.22,1,0.36,1]}}
              whileHover={{y:-6,scale:1.02}}
              className="group bg-white/[0.05] border border-white/[0.08] rounded-[16px] p-6 flex flex-col gap-3 no-underline transition-colors duration-300 hover:bg-blue-600/20 hover:border-blue-500/40"
              style={{backdropFilter:'blur(10px)'}}
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-[0.68rem] font-bold text-blue-400 tracking-[0.15em] uppercase">{c.type}</span>
              <span className="text-white text-[0.95rem] font-medium leading-snug">{c.value}</span>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{delay:0.6,duration:0.7}}
          className="mt-14"
        >
          <motion.a href="/resume.pdf" download
            whileHover={{scale:1.05,y:-3}}
            whileTap={{scale:0.97}}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 rounded-full text-[1rem] font-semibold"
            style={{boxShadow:'0 12px 40px rgba(37,99,235,0.4)'}}>
            ↓ Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// ──────────────────────────── FOOTER ────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#080808] py-8 px-[5vw] text-center text-white/25 text-[0.8rem] tracking-wide">
      © 2025 Gunarajan Nagarajan · Crafted with React, Framer Motion & ☕ · Salem, Tamil Nadu
    </footer>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Projects, Experience, Education, Contact, Footer } from './components/Sections'
import './index.css'

export default function App() {
  return (
    <div style={{fontFamily:"'DM Sans',sans-serif",background:'#fff',color:'#1a1a1a',overflowX:'hidden'}}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

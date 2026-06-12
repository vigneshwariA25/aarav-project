import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import GrainOverlay from './components/GrainOverlay'
import GoldParticles from './components/GoldParticles'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div
      className="grain-overlay relative overflow-x-hidden"
      style={{ background: '#0A0507' }}
    >
      <GrainOverlay />
      <GoldParticles />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

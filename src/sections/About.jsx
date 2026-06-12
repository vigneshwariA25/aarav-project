import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '../components/SectionHeader'
import FadeUp from '../components/FadeUp'

const features = [
  'Grand spacious halls',
  'Exquisite décor',
  'Multi-cuisine catering',
  'Premium sound & lighting',
  'Secure parking',
  'Dedicated event team',
]

function TiltImage({ children }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 8, y: -x * 8 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden"
      ref={containerRef}
      style={{ background: 'linear-gradient(180deg, #0A0507 0%, #120608 50%, #0A0507 100%)' }}
    >
      {/* Ambient bg glows */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(97,20,38,0.25) 0%, transparent 70%)', transform: 'translate(-30%, -50%)' }}
      />
      <div
        className="absolute top-1/2 right-0 w-64 h-64 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(212,163,77,0.04) 0%, transparent 70%)', transform: 'translate(30%, -50%)' }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.12), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* ── Image Side ── */}
          <div className="flex flex-col gap-10">
            <FadeUp className="relative">
              <TiltImage>
                <motion.div style={{ y: imgY }} className="relative w-full">
                  {/* Main image */}
                  <motion.div
                    className="relative overflow-hidden"
                    style={{ border: '1px solid rgba(212,163,77,0.18)', borderRadius: '30px' }}
                    whileHover={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(212,163,77,0.1)' }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200"
                      alt="Aarav Wedding Hall grand interior"
                      className="w-full h-[445px] object-cover"
                      loading="lazy"
                      style={{ filter: 'brightness(0.88) contrast(1.05)' }}
                      whileHover={{ scale: 1.04, filter: 'brightness(0.95) contrast(1.08)' }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Image overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(10,5,7,0.55) 0%, transparent 55%)' }}
                    />
                    {/* Warm tint */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(180,120,40,0.08) 0%, transparent 65%)', mixBlendMode: 'multiply' }}
                    />
                    {/* Hover shine sweep */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(212,163,77,0.06) 50%, transparent 70%)' }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                  </motion.div>

                  {/* Floating accent card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-8 -right-6 p-6 hidden md:block"
                    style={{
                      background: 'rgba(74,15,28,0.5)',
                      backdropFilter: 'blur(24px)',
                      border: '1px solid rgba(212,163,77,0.25)',
                      borderRadius: '1px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                    }}
                    whileHover={{
                      boxShadow: '0 0 30px rgba(212,163,77,0.2), 0 10px 40px rgba(0,0,0,0.4)',
                      borderColor: 'rgba(212,163,77,0.4)',
                    }}
                  >
                    <p className="font-cormorant text-4xl gold-text font-semibold leading-none">10+</p>
                    <p className="font-outfit text-[10px] tracking-widest uppercase mt-1.5" style={{ color: 'rgba(212,163,77,0.55)' }}>
                      Years of Excellence
                    </p>
                  </motion.div>

                  {/* Decorative corner brackets */}
                  <motion.div
                    className="absolute -top-3 -left-3 w-14 h-14 border-t border-l pointer-events-none"
                    style={{ borderColor: 'rgba(212,163,77,0.3)' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute -bottom-3 -right-3 w-14 h-14 border-b border-r pointer-events-none"
                    style={{ borderColor: 'rgba(212,163,77,0.3)' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  />
                </motion.div>
              </TiltImage>
            </FadeUp>

            {/* Buttons moved here */}
            <FadeUp delay={0.4}>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Book a Visit
                </button>
                <button
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline-gold"
                >
                  Our Services
                </button>
              </div>
            </FadeUp>
          </div>

          {/* ── Content Side ── */}
          <div ref={ref} className="space-y-6 glass-panel p-8 lg:p-10 relative">
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,163,77,0.04) 0%, transparent 60%)', borderRadius: 'inherit' }}
            />
            <SectionHeader
              label="Our Story"
              title={<>Where Every<br /><span className="italic gold-text">Celebration</span> Begins</>}
              subtitle="Aarav Wedding Hall is designed to make your special occasions truly unforgettable. With elegant interiors, modern amenities and exceptional service, we provide the perfect setting for weddings, receptions, engagements and more."
              center={false}
            />

            <FadeUp delay={0.3}>
              <ul className="space-y-3 mt-6">
                {features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3.5 font-outfit text-sm group cursor-default"
                    style={{ color: 'rgba(242,232,218,0.65)' }}
                    whileHover={{ x: 4, color: 'rgba(242,232,218,0.9)' }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#D4A34D', boxShadow: '0 0 6px rgba(212,163,77,0.6)' }}
                      whileHover={{ scale: 1.5, boxShadow: '0 0 12px rgba(212,163,77,0.9)' }}
                    />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

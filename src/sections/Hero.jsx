import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

/* ─────────────────────────────────────────
   FLOATING GOLD PARTICLES
───────────────────────────────────────── */
const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: 1 + Math.random() * 98,
  delay: Math.random() * 16,
  duration: 10 + Math.random() * 14,
  size: 1.2 + Math.random() * 3.4,
  drift: (Math.random() - 0.5) * 80,
  opacity: 0.55 + Math.random() * 0.45,
}))

function GoldParticle({ left, delay, duration, size, drift, opacity }) {
  return (
    <motion.span
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${left}%`,
        bottom: '-4px',
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(255,228,145,${opacity}) 0%, rgba(212,163,77,0.45) 55%, transparent 100%)`,
        boxShadow: `0 0 ${size * 4}px ${size * 1.8}px rgba(212,163,77,0.38)`,
        willChange: 'transform, opacity',
      }}
      animate={{
        y: [0, -(Math.random() * 300 + 580)],
        x: [0, drift],
        opacity: [0, opacity, opacity * 0.7, 0.2, 0],
        scale: [0.4, 1.1, 0.9, 0.45, 0.1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
        repeatDelay: Math.random() * 6,
      }}
    />
  )
}

/* ─────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const scroll = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  /* Staggered text reveal */
  const fadeUp = {
    hidden: { opacity: 0, y: 38 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.2,
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden flex"
      style={{ height: '100vh', minHeight: '700px', background: '#050203' }}
    >

      {/* ══════════════════════════════════════════
          BACKGROUND LAYER — full-bleed cinematic image
          Parallax on scroll, infinite Ken Burns zoom
      ══════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
      >
        {/* ① BASE IMAGE — Ken Burns: scale 1 → 1.08, 20s infinite alternate */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/hero_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform',
          }}
          animate={{ scale: [1, 1.08] }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

        {/* ② LUXURY GRADIENT OVERLAY — left dark → readable → image visible right
             Left:   rgba(5,5,5,0.92)
             Centre: rgba(20,5,10,0.75)
             Right:  rgba(0,0,0,0.25)
        */}
        <div
          className="absolute inset-0 z-[4]"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.92) 8%, rgba(12,4,8,0.86) 20%, rgba(20,5,10,0.75) 38%, rgba(10,3,6,0.50) 55%, rgba(0,0,0,0.30) 72%, rgba(0,0,0,0.25) 100%)',
          }}
        />

        {/* ③ TOP DARK PULL */}
        <div
          className="absolute inset-0 z-[5]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(4,1,2,0.78) 0%, rgba(4,1,2,0.38) 10%, transparent 26%)',
          }}
        />

        {/* ④ BOTTOM DARK PULL */}
        <div
          className="absolute inset-0 z-[5]"
          style={{
            background:
              'linear-gradient(to top, rgba(4,1,2,0.82) 0%, rgba(4,1,2,0.35) 16%, transparent 36%)',
          }}
        />

        {/* ⑤ PREMIUM VIGNETTE — all edges */}
        <div
          className="absolute inset-0 z-[6] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 94% 94% at 50% 50%, transparent 30%, rgba(3,1,2,0.48) 68%, rgba(3,1,2,0.85) 100%)',
          }}
        />

        {/* ⑥ WARM LUXURY COLOR GRADING — gold + amber tint */}
        <motion.div
          className="absolute inset-0 z-[7] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 60% at 62% 42%, rgba(212,163,77,0.11) 0%, rgba(180,110,35,0.06) 45%, transparent 72%)',
          }}
          animate={{ opacity: [0.65, 1, 0.78, 1, 0.68] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ⑦ DEEP BURGUNDY DEPTH — cinematic colour grade */}
        <div
          className="absolute inset-0 z-[7] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 65% at 68% 50%, rgba(65,10,24,0.30) 0%, transparent 68%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* ⑧ CHANDELIER GOLDEN GLOW — top centre-right */}
        <motion.div
          className="absolute z-[8] pointer-events-none"
          style={{
            top: '-8%',
            left: '38%',
            right: 0,
            height: '60%',
            background:
              'radial-gradient(ellipse at 52% 6%, rgba(255,230,140,0.14) 0%, rgba(212,163,77,0.07) 38%, transparent 68%)',
          }}
          animate={{ opacity: [0.65, 1, 0.80, 1, 0.68] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Tight hot bulb glow */}
        <motion.div
          className="absolute z-[8] pointer-events-none"
          style={{
            top: 0,
            left: '52%',
            transform: 'translateX(-50%)',
            width: '18%',
            height: '22%',
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(255,248,200,0.22) 0%, rgba(212,163,77,0.10) 50%, transparent 80%)',
          }}
          animate={{ opacity: [0.78, 1, 0.65, 1, 0.82] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* ⑨ CANDLE AISLE FLOOR WARMTH */}
        <motion.div
          className="absolute bottom-0 left-[35%] right-0 z-[8] pointer-events-none"
          style={{
            height: '32%',
            background:
              'linear-gradient(to top, rgba(190,110,30,0.18) 0%, rgba(212,163,77,0.07) 50%, transparent 90%)',
          }}
          animate={{ opacity: [0.65, 1, 0.78, 1, 0.65] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ⑩ FLOATING GOLD PARTICLES */}
        <div className="absolute inset-0 z-[12] overflow-hidden pointer-events-none">
          {PARTICLES.map(p => <GoldParticle key={p.id} {...p} />)}
        </div>

        {/* ⑪ SUBTLE FILM GRAIN */}
        <div
          className="absolute inset-0 z-[13] pointer-events-none mix-blend-overlay"
          style={{
            opacity: 0.028,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />

        {/* ⑫ BOTTOM GOLD SHIMMER LINE */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px z-[14] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 4%, rgba(212,163,77,0.32) 32%, rgba(240,215,135,0.55) 50%, rgba(212,163,77,0.32) 68%, transparent 96%)',
          }}
          animate={{ opacity: [0.38, 0.88, 0.48, 0.88, 0.38] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ══════════════════════════════════════════
          LEFT CONTENT PANEL
      ══════════════════════════════════════════ */}
      <div className="relative z-30 flex flex-col justify-center pt-[100px] pb-20 px-10 lg:px-16 xl:px-20 w-full lg:w-[54%] xl:w-[50%] shrink-0">
        <div className="max-w-[560px]">

          {/* ── PRE-TITLE BADGE ── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mb-10"
          >
            <motion.div
              className="h-px w-10"
              style={{ background: 'linear-gradient(90deg, transparent, #D4A34D)' }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
            <div
              className="flex items-center gap-2.5 px-4 py-2"
              style={{
                background: 'rgba(212,163,77,0.07)',
                border: '1px solid rgba(212,163,77,0.22)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#D4A34D', boxShadow: '0 0 8px rgba(212,163,77,0.9)' }}
                animate={{ scale: [1, 1.7, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <p
                className="font-outfit"
                style={{
                  letterSpacing: '0.28em',
                  fontSize: '0.62rem',
                  color: 'rgba(212,163,77,0.90)',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}
              >
                Coimbatore's Finest Wedding Venue
              </p>
              <motion.span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#D4A34D', boxShadow: '0 0 8px rgba(212,163,77,0.9)' }}
                animate={{ scale: [1, 1.7, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              />
            </div>
            <motion.div
              className="h-px w-10"
              style={{ background: 'linear-gradient(90deg, #D4A34D, transparent)' }}
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          {/* ── HEADLINE — fade up stagger ── */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-cormorant leading-[0.92] mb-7"
            style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
          >
            <motion.span
              className="block font-light tracking-wide"
              style={{ color: '#F0E8DC' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.60, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Where Dreams
            </motion.span>
            <motion.span
              className="block font-light tracking-wide"
              style={{ color: '#EAE0D0' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Become
            </motion.span>
            <motion.span
              className="block italic font-semibold gold-text-shimmer mt-1"
              style={{ fontSize: 'clamp(3.2rem, 5.5vw, 5.4rem)' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.04, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Eternal Memories
            </motion.span>
          </motion.h1>

          {/* ── ORNAMENTAL DIVIDER ── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              className="h-px max-w-[60px] flex-1"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.65))' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.25, duration: 0.9 }}
            />
            <motion.span
              style={{ color: '#D4A34D', fontFamily: 'serif', fontSize: '1rem' }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >✦</motion.span>
            <div className="h-px w-5" style={{ background: 'rgba(212,163,77,0.30)' }} />
            <span style={{ color: 'rgba(212,163,77,0.40)', fontFamily: 'serif', fontSize: '0.7rem' }}>✦</span>
            <div className="h-px w-3" style={{ background: 'rgba(212,163,77,0.15)' }} />
          </motion.div>

          {/* ── DESCRIPTION — fade up ── */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-outfit tracking-wide mb-10"
            style={{
              fontSize: '0.96rem',
              color: 'rgba(224,210,188,0.82)',
              maxWidth: '430px',
              lineHeight: 1.85,
            }}
          >
            Exquisite celebrations crafted with elegance, tradition, and
            unmatched luxury — where every detail tells your love story.
          </motion.p>

          {/* ── BUTTONS — fade up ── */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            {/* Primary gold */}
            <motion.button
              id="hero-book-btn"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold relative overflow-hidden"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: '0 4px 24px rgba(212,163,77,0.25)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 55px rgba(212,163,77,0.55), 0 0 100px rgba(212,163,77,0.20), 0 4px 24px rgba(0,0,0,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(212,163,77,0.25)'}
            >
              Book Your Date
            </motion.button>

            {/* Secondary outline */}
            <motion.button
              id="hero-explore-btn"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-gold"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(212,163,77,0.18), inset 0 0 20px rgba(212,163,77,0.04)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              Explore the Hall
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* ── RIGHT CORNER WATERMARK ── */}
      <motion.div
        className="absolute bottom-12 right-10 z-30 text-right pointer-events-none hidden xl:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          className="font-cormorant text-sm italic tracking-[0.25em]"
          style={{ color: 'rgba(212,163,77,0.35)' }}
        >
          Grand Mandap Experience
        </p>
        <motion.div
          className="mt-1.5 ml-auto h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.32))',
            width: '58px',
          }}
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.button
        id="hero-scroll-btn"
        onClick={scroll}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-10 left-10 lg:left-16 xl:left-20 z-30"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              border: '1px solid rgba(212,163,77,0.42)',
              background: 'rgba(212,163,77,0.07)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 24px rgba(212,163,77,0.38)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <FiChevronDown className="text-[#D4A34D]" style={{ fontSize: '1rem' }} />
          </div>
        </motion.div>
      </motion.button>

    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'py-3 border-b'
            : 'py-5 bg-transparent'
          }`}
        style={
          scrolled
            ? {
              background: 'rgba(10,5,7,0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderColor: 'rgba(212,163,77,0.12)',
            }
            : {}
        }
      >
        {/* Top shimmer line */}
        {!scrolled && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.25), transparent)' }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* RESPONSIVENESS: Added px-3 for smaller screens, ensure items-center and justify-between for the 3 elements */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 flex items-center justify-between w-full">

          {/* ── Logo ── */}
          <a
            href="#home"
            id="navbar-logo"
            // RESPONSIVENESS: flex-shrink-0 to prevent collision, adjusted gap
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            onClick={(e) => { e.preventDefault(); handleNav('#home') }}
          >
            <div
              // RESPONSIVENESS: Scaled down logo mark on mobile
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,163,77,0.4)]"
              style={{ border: '1px solid rgba(212,163,77,0.45)', background: 'rgba(212,163,77,0.06)' }}
            >
              <span className="font-cormorant text-[#D4A34D] text-sm sm:text-lg font-semibold leading-none">A</span>
            </div>
            <div className="flex flex-col justify-center">
              {/* RESPONSIVENESS: Scaled down typography to fit center badge */}
              <p className="font-cormorant text-[#F2E8DA] text-[15px] sm:text-lg font-semibold leading-none tracking-wide group-hover:text-[#D4A34D] transition-colors duration-300">
                Aarav
              </p>
              <p
                className="font-outfit text-[7px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.22em] uppercase leading-none mt-0.5"
                style={{ color: 'rgba(212,163,77,0.65)' }}
              >
                Wedding Hall
              </p>
            </div>
          </a>

          {/* ── Mobile Announcement Badge (Center) ── */}
          {/* RESPONSIVENESS: flex-1 and min-w-0 allows fluid width without forcing fixed sizes. Hidden on lg to preserve desktop design. */}
          <div className="flex lg:hidden flex-1 min-w-0 justify-center px-1.5 sm:px-4">
            <div
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-1.5 w-full max-w-[160px] sm:max-w-[220px]"
              style={{
                background: 'rgba(212,163,77,0.05)',
                border: '1px solid rgba(212,163,77,0.2)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '2px'
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0 hidden sm:block"
                style={{ background: '#D4A34D', boxShadow: '0 0 8px rgba(212,163,77,0.9)' }}
              />
              <p
                // RESPONSIVENESS: Balanced wrapping, proper line breaks, consistent letter spacing
                className="font-outfit text-center leading-[1.35] truncate whitespace-normal"
                style={{
                  letterSpacing: '0.12em',
                  fontSize: '0.45rem',
                  color: 'rgba(212,163,77,0.90)',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}
              >
                Coimbatore's<br/>Finest Wedding<br/>Venue
              </p>
              <span
                className="w-1 h-1 rounded-full flex-shrink-0 hidden sm:block"
                style={{ background: '#D4A34D', boxShadow: '0 0 8px rgba(212,163,77,0.9)' }}
              />
            </div>
          </div>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="luxury-link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Right Side (Menu & Button) ── */}
          {/* RESPONSIVENESS: flex-shrink-0 ensures hamburger touch area is preserved */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <button
              id="navbar-book-btn"
              onClick={() => handleNav('#contact')}
              className="hidden lg:block btn-gold"
              style={{ padding: '0.65rem 1.75rem', fontSize: '0.68rem' }}
            >
              Book Now
            </button>

            {/* Hamburger */}
            <button
              id="navbar-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              // RESPONSIVENESS: Reduced padding slightly to maximize space on 320px screens
              className="lg:hidden flex flex-col gap-[4px] sm:gap-[5px] p-1.5 sm:p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px"
                style={{ background: '#D4A34D' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-3.5 h-px ml-auto"
                style={{ background: '#D4A34D' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px"
                style={{ background: '#D4A34D' }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: 'rgba(43,10,18,0.95)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-12 left-8 w-12 h-12 border-t border-l" style={{ borderColor: 'rgba(212,163,77,0.2)' }} />
            <div className="absolute top-12 right-8 w-12 h-12 border-t border-r" style={{ borderColor: 'rgba(212,163,77,0.2)' }} />
            <div className="absolute bottom-12 left-8 w-12 h-12 border-b border-l" style={{ borderColor: 'rgba(212,163,77,0.2)' }} />
            <div className="absolute bottom-12 right-8 w-12 h-12 border-b border-r" style={{ borderColor: 'rgba(212,163,77,0.2)' }} />

            {/* Ambient glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(97,20,38,0.4) 0%, transparent 70%)' }}
            />

            <ul className="flex flex-col items-center gap-10 relative z-10">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-cormorant text-4xl font-light text-[#F2E8DA] hover:text-[#D4A34D] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.08, duration: 0.6 }}
              >
                <button
                  onClick={() => handleNav('#contact')}
                  className="btn-gold mt-4"
                >
                  Book Now
                </button>
              </motion.li>
            </ul>

            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[rgba(212,163,77,0.1)]"
              style={{ border: '1px solid rgba(212,163,77,0.25)' }}
              aria-label="Close menu"
            >
              <span className="font-cormorant text-[#D4A34D] text-xl">✕</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

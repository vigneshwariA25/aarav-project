import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import FadeUp from '../components/FadeUp'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]
const servicesList = [
  'Spacious Hall',
  'Catering Services',
  'Décor & Ambience',
  'Sound & Lighting',
  'Parking Facility',
  'Event Coordination',
]

const socials = [
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/weluvcoimbatore/videos/one-venue-endless-celebrations-aarav-wedding-hall-where-every-moment-becomes-a-g/1518353226071228/',
    label: 'Facebook',
  },
  { icon: FaInstagram, href: 'https://www.instagram.com/aarav_wedding_hall/', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/919655501679', label: 'WhatsApp' },
  { icon: FaYoutube, href: 'https://www.youtube.com/results?search_query=aarav+wedding+hall+coimbatore', label: 'YouTube' },
]

export default function Footer() {
  const scroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative overflow-hidden pt-24 pb-10"
      style={{ background: 'rgba(10,5,7,0.98)', borderTop: '1px solid rgba(212,163,77,0.1)' }}
    >
      {/* Background image subtle */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `url('https://dezinfox-web.github.io/AARAV-WEDDING-HALL/exterior.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(1)',
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom, rgba(10,5,7,0.8), rgba(10,5,7,0.98))' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(97,20,38,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top divider with ornament */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.25))' }} />
            <span className="font-cormorant text-[#D4A34D] text-2xl opacity-60">✦</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(212,163,77,0.25), transparent)' }} />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* ── Brand Column ── */}
          <FadeUp className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ border: '1px solid rgba(212,163,77,0.35)', background: 'rgba(212,163,77,0.06)' }}
              >
                <span className="font-cormorant text-[#D4A34D] text-3xl font-semibold">A</span>
              </div>
              <div>
                <p className="font-cormorant text-[#F2E8DA] text-3xl font-semibold leading-none">Aarav</p>
                <p
                  className="font-outfit text-[11px] tracking-[0.22em] uppercase mt-1 leading-none"
                  style={{ color: 'rgba(212,163,77,0.6)' }}
                >
                  Wedding Hall
                </p>
              </div>
            </div>

            <p className="font-outfit text-base leading-relaxed mb-8" style={{ color: 'rgba(242,232,218,0.4)' }}>
              We make your special moments more special with our perfect venue and premium services in the heart of Coimbatore.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-11 h-11 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(212,163,77,0.06)',
                    border: '1px solid rgba(212,163,77,0.15)',
                    borderRadius: '1px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212,163,77,0.4)'
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(212,163,77,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212,163,77,0.15)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Icon className="text-[#D4A34D] text-lg" />
                </motion.a>
              ))}
            </div>
          </FadeUp>

          {/* ── Quick Links ── */}
          <FadeUp delay={0.1}>
            <h4 className="font-cormorant text-2xl font-light mb-8" style={{ color: '#F2E8DA' }}>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scroll(href)}
                    className="font-outfit text-base flex items-center gap-3 group transition-colors duration-300 hover:text-[#D4A34D]"
                    style={{ color: 'rgba(242,232,218,0.4)' }}
                  >
                    <span
                      className="h-px bg-[rgba(212,163,77,0.25)] group-hover:bg-[rgba(212,163,77,0.6)] transition-all duration-300"
                      style={{ width: '16px', transition: 'width 0.3s ease, background 0.3s ease' }}
                    />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* ── Services ── */}
          <FadeUp delay={0.2}>
            <h4 className="font-cormorant text-2xl font-light mb-8" style={{ color: '#F2E8DA' }}>
              Services
            </h4>
            <ul className="space-y-4">
              {servicesList.map((s) => (
                <li key={s}>
                  <span className="font-outfit text-base flex items-center gap-3" style={{ color: 'rgba(242,232,218,0.4)' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(212,163,77,0.4)' }} />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* ── Contact ── */}
          <FadeUp delay={0.3}>
            <h4 className="font-cormorant text-2xl font-light mb-8" style={{ color: '#F2E8DA' }}>
              Visit Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FiMapPin className="text-[#D4A34D] text-base mt-1 flex-shrink-0 opacity-70" />
                <p className="font-outfit text-base leading-relaxed" style={{ color: 'rgba(242,232,218,0.4)' }}>
                  8/24, Pudhu Thottam, Ramasamy Nagar Extension, Urumandampalayam, Gounder Mills,<br />Coimbatore – 641029
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="text-[#D4A34D] text-base flex-shrink-0 opacity-70" />
                <a
                  href="tel:+919655501679"
                  className="font-outfit text-base transition-colors duration-300 hover:text-[#D4A34D]"
                  style={{ color: 'rgba(212,163,77,0.6)' }}
                >
                  +91 96555 01679
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FiMail className="text-[#D4A34D] text-base flex-shrink-0 opacity-70" />
                <a
                  href="mailto:info@aaravweddinghall.com"
                  className="font-outfit text-base transition-colors duration-300 hover:text-[#D4A34D]"
                  style={{ color: 'rgba(212,163,77,0.6)' }}
                >
                  info@aaravweddinghall.com
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(212,163,77,0.08)' }}
        >
          <p className="font-outfit text-sm tracking-wide" style={{ color: 'rgba(242,232,218,0.2)' }}>
            © 2024 Aarav Wedding Hall. All Rights Reserved.
          </p>
          <p className="font-outfit text-sm tracking-wide" style={{ color: 'rgba(242,232,218,0.18)' }}>
            Crafted with <span style={{ color: 'rgba(212,163,77,0.4)' }}>♥</span> in Coimbatore
          </p>
        </div>
      </div>
    </footer>
  )
}

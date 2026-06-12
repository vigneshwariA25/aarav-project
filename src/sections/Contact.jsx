import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import FadeUp from '../components/FadeUp'

const eventTypes = [
  'Wedding',
  'Reception',
  'Engagement Party',
  'Corporate Event',
  'Birthday Celebration',
  'Social Gathering',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', event: '', date: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
    >
      {/* ═══════════════════════════════════════
          PREMIUM BACKGROUND — mandap image with deep luxury treatment
      ═══════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/mandap_hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          filter: 'brightness(0.35) contrast(1.1) saturate(0.75)',
        }}
      />

      {/* Deep luxury dark overlay — preserves image but creates premium darkness */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(160deg, rgba(8,2,5,0.82) 0%, rgba(35,8,16,0.78) 40%, rgba(8,2,5,0.88) 100%)',
        }}
      />

      {/* Warm cinematic amber tint */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'radial-gradient(ellipse at 50% 55%, rgba(180,120,35,0.10) 0%, rgba(100,30,50,0.08) 45%, transparent 70%)',
        }}
      />

      {/* Inner vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.75)' }}
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.35), rgba(240,210,130,0.5), rgba(212,163,77,0.35), transparent)' }}
      />

      {/* Ambient maroon glows */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(circle, rgba(97,20,38,0.22) 0%, transparent 70%)',
          transform: 'translate(35%, -50%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(circle, rgba(212,163,77,0.06) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Floating gold light specks */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none z-[3]"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${8 + i * 9}%`,
            top: `${15 + (i % 4) * 22}%`,
            background: 'rgba(212,163,77,0.55)',
            boxShadow: '0 0 8px rgba(212,163,77,0.45)',
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.25, 0.85, 0.25],
          }}
          transition={{
            duration: 3.2 + i * 0.45,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.38,
          }}
        />
      ))}

      {/* Bottom gold shimmer line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.3), transparent)' }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader
          label="Get In Touch"
          title={<>Begin Your<br /><span className="italic gold-text">Celebration Story</span></>}
          subtitle="Reach out to our team and let us start crafting your perfect day together."
        />

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-60 mt-16">

          {/* ── Info Side ── */}
          <div className="lg:col-span-2 space-y-8">
            <FadeUp>
              <div
                className="p-7 relative overflow-hidden"
                style={{
                  background: 'rgba(10,5,7,0.6)',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(212,163,77,0.15)',
                  borderRadius: '2px',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,163,77,0.04) 0%, transparent 60%)' }}
                />
                <h3 className="font-cormorant text-2xl font-light mb-6 relative z-10" style={{ color: '#F2E8DA' }}>
                  Contact Details
                </h3>
                <div className="space-y-5 relative z-10">
                  {[
                    { icon: FiPhone, label: 'Call Us', value: '+91 96555 01679', href: 'tel:+919655501679' },
                    { icon: FiMail, label: 'Email Us', value: 'info@aaravweddinghall.com', href: 'mailto:info@aaravweddinghall.com' },
                    { icon: FiMapPin, label: 'Visit Us', value: '8/24, Pudhu Thottam, Ramasamy Nagar Ext., Urumandampalayam, Coimbatore – 641029', href: 'https://share.google/8M6Zns1rxUYAkUxpb' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-11 h-11 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(212,163,77,0.3)]"
                        style={{
                          background: 'rgba(212,163,77,0.08)',
                          border: '1px solid rgba(212,163,77,0.2)',
                          borderRadius: '1px',
                        }}
                      >
                        <Icon className="text-[#D4A34D] text-base" />
                      </motion.div>
                      <div>
                        <p
                          className="font-outfit text-[10px] tracking-[0.22em] uppercase mb-0.5"
                          style={{ color: 'rgba(212,163,77,0.55)' }}
                        >
                          {label}
                        </p>
                        <p
                          className="font-outfit text-sm leading-snug transition-colors duration-300 group-hover:text-[#F2E8DA]"
                          style={{ color: 'rgba(242,232,218,0.65)' }}
                        >
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* WhatsApp CTA */}
            <FadeUp delay={0.2}>
              <a
                href="https://wa.me/919655501679"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 transition-all duration-300 group"
                style={{
                  background: 'rgba(37,211,102,0.07)',
                  border: '1px solid rgba(37,211,102,0.18)',
                  borderRadius: '1px',
                  backdropFilter: 'blur(20px)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.13)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(37,211,102,0.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.07)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.18)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(37,211,102,0.12)' }}
                >
                  <FaWhatsapp className="text-[#25D366] text-lg" />
                </div>
                <div>
                  <p className="font-outfit text-sm font-medium" style={{ color: '#F2E8DA' }}>
                    Chat on WhatsApp
                  </p>
                  <p className="font-outfit text-xs mt-0.5" style={{ color: 'rgba(242,232,218,0.45)' }}>
                    Instant response during business hours
                  </p>
                </div>
              </a>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.3}>
              <motion.div
                className="overflow-hidden"
                style={{ borderRadius: '2px', border: '1px solid rgba(212,163,77,0.15)' }}
                whileHover={{ boxShadow: '0 0 40px rgba(212,163,77,0.12)', borderColor: 'rgba(212,163,77,0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Aarav+Wedding+Hall+Coimbatore&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0, filter: 'grayscale(0.4) brightness(0.7) contrast(1.1) sepia(0.15)', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aarav Wedding Hall Location"
                />
              </motion.div>
            </FadeUp>
          </div>

          {/* ── Form ── */}
          <div className="lg:col-span-3">
            <FadeUp delay={0.1}>
              <form
                onSubmit={submit}
                className="p-8 space-y-5 relative overflow-hidden"
                style={{
                  background: 'rgba(10,5,7,0.7)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(212,163,77,0.2)',
                  borderRadius: '45px',
                  width: '600px',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,163,77,0.1)',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,163,77,0.06) 0%, transparent 70%)' }}
                />

                <div className="h-px w-full mb-6 relative z-10" style={{ background: 'linear-gradient(90deg, #D4A34D, rgba(212,163,77,0.3), transparent)' }} />

                <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                  <div>
                    <label className="font-outfit text-[10px] tracking-[0.22em] uppercase block mb-2" style={{ color: 'rgba(212,163,77,0.55)' }}>
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      required
                      placeholder="Your Name"
                      className="input-gold"
                    />
                  </div>
                  <div>
                    <label className="font-outfit text-[10px] tracking-[0.22em] uppercase block mb-2" style={{ color: 'rgba(212,163,77,0.55)' }}>
                      Phone *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      required
                      placeholder="+91 00000 00000"
                      className="input-gold"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <label className="font-outfit text-[10px] tracking-[0.22em] uppercase block mb-2" style={{ color: 'rgba(212,163,77,0.55)' }}>
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="your@email.com"
                    className="input-gold"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                  <div>
                    <label className="font-outfit text-[10px] tracking-[0.22em] uppercase block mb-2" style={{ color: 'rgba(212,163,77,0.55)' }}>
                      Event Type *
                    </label>
                    <select
                      name="event"
                      value={form.event}
                      onChange={handle}
                      required
                      className="input-gold"
                    >
                      <option value="" disabled>Select Event</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-outfit text-[10px] tracking-[0.22em] uppercase block mb-2" style={{ color: 'rgba(212,163,77,0.55)' }}>
                      Preferred Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handle}
                      className="input-gold"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <label className="font-outfit text-[10px] tracking-[0.22em] uppercase block mb-2" style={{ color: 'rgba(212,163,77,0.55)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={4}
                    placeholder="Tell us about your vision..."
                    className="input-gold resize-none"
                  />
                </div>

                <motion.button
                  id="contact-submit-btn"
                  type="submit"
                  whileHover={{ scale: 1.01, boxShadow: '0 0 50px rgba(212,163,77,0.4)' }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-gold w-full text-sm relative z-10"
                  style={{ padding: '1.1rem' }}
                >
                  {sent ? '✓ Message Sent — We\'ll Be In Touch Shortly' : 'Send Your Enquiry'}
                </motion.button>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MdOutlineVilla,
  MdOutlineRestaurant,
  MdOutlineLightbulb,
  MdOutlineAudiotrack,
  MdOutlineLocalParking,
} from 'react-icons/md'
import FadeUp from '../components/FadeUp'

const services = [
  {
    icon: MdOutlineVilla,
    title: 'Spacious Hall',
    desc: 'Grand halls configured for any occasion, from intimate ceremonies to lavish receptions.',
    img: '/hall_service.png',
  },
  {
    icon: MdOutlineRestaurant,
    title: 'Catering Services',
    desc: 'Exquisite multi-cuisine fine dining customized to your preferences and dietary needs.',
    img: '/catering_service.png',
  },
  {
    icon: MdOutlineLightbulb,
    title: 'Décor & Ambience',
    desc: 'Lush floral arrangements and thematic décor tailored to your unique love story.',
    img: '/decor_service.png',
  },
  {
    icon: MdOutlineAudiotrack,
    title: 'Sound & Lighting',
    desc: 'Concert-style sound and lighting systems for an unforgettable sensory experience.',
    img: '/sound_service.png',
  },
  {
    icon: MdOutlineLocalParking,
    title: 'Valet Parking',
    desc: 'Secured luxury parking facility ensuring seamless comfort for all your guests.',
    img: '/parking_service.png',
  },
]

function ServiceCard({ svc, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const Icon = svc.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -12,
        boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 0 40px rgba(212,163,77,0.1)',
        borderColor: 'rgba(212,163,77,0.4)',
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="relative flex flex-col rounded-[2px] overflow-hidden group cursor-default glass-card"
      style={{ transition: 'border-color 0.4s ease' }}
    >
      {/* Cinematic Image Top */}
      <div className="relative h-48 w-full overflow-hidden">
        <motion.img
          src={svc.img}
          alt={svc.title}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ filter: 'brightness(0.85) contrast(1.1)' }}
          whileHover={{ scale: 1.08, filter: 'brightness(0.95) contrast(1.12)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Soft bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(43,10,18,0.9) 0%, transparent 100%)' }} />
        {/* Hover gold tint overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,163,77,0.08) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content Area */}
      <div className="relative flex flex-col items-center px-5 pb-8 pt-2 z-10 flex-grow">
        {/* Overlapping Gold Icon */}
        <motion.div
          className="absolute -top-8 w-16 h-16 rounded-full flex items-center justify-center z-20"
          style={{
            background: 'rgba(27,10,13,0.95)',
            border: '1px solid rgba(212, 163, 77, 0.4)',
            backdropFilter: 'blur(10px)',
          }}
          whileHover={{
            scale: 1.15,
            boxShadow: '0 0 30px rgba(212,163,77,0.4)',
            borderColor: 'rgba(212,163,77,0.8)',
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="text-[#D4A34D] text-2xl group-hover:scale-110 transition-transform duration-500" />
        </motion.div>

        {/* Glow under icon on hover */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(212,163,77,0.12) 0%, transparent 70%)' }}
        />

        <h3
          className="font-cormorant text-[1.35rem] font-semibold mt-10 mb-3 text-center transition-colors duration-300 group-hover:text-[#E2C27A]"
          style={{ color: '#F2E8DA' }}
        >
          {svc.title}
        </h3>
        <p
          className="font-outfit text-[0.85rem] text-center leading-relaxed"
          style={{ color: '#D8C7B0' }}
        >
          {svc.desc}
        </p>

        {/* Bottom Line Accent - expands on hover */}
        <motion.div
          className="mt-6 h-px"
          style={{ background: 'rgba(212,163,77,0.3)', width: '1.5rem' }}
          whileHover={{ width: '3rem', background: 'rgba(212,163,77,0.8)', boxShadow: '0 0 8px rgba(212,163,77,0.5)' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0507 0%, #120608 50%, #0A0507 100%)' }}
    >
      {/* Huge subtle central spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(97,20,38,0.4) 0%, transparent 60%)' }}
      />
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.1), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.1), transparent)' }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

        <div className="text-center mb-16">
          <FadeUp>
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,163,77,0.8))' }} />
              <p className="font-outfit text-[0.65rem] tracking-[0.35em] uppercase" style={{ color: '#D4A34D' }}>
                Our Services
              </p>
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, rgba(212,163,77,0.8), transparent)' }} />
            </div>

            <div className="w-12 h-px mx-auto mb-5" style={{ background: 'linear-gradient(90deg, transparent, #D4A34D, transparent)' }} />

            <h2
              className="font-cormorant font-light leading-tight mt-4"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', color: '#F2E8DA' }}
            >
              Everything You Need,<br /><span className="italic gold-text">All In One Place</span>
            </h2>

            <p
              className="font-outfit text-base mt-5 leading-relaxed mx-auto"
              style={{ color: '#D8C7B0', maxWidth: '640px' }}
            >
              Comprehensive event services delivered with precision, passion, and uncompromising quality.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-14">
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

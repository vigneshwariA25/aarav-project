import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919655501679"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl glass-panel group"
      style={{
        border: '1px solid rgba(212,163,77,0.3)',
      }}
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        className="absolute inset-0 rounded-full transition-colors duration-500 group-hover:bg-[#25D366]"
        style={{ opacity: 0.15 }}
      />
      <FaWhatsapp className="text-[#D4A34D] text-2xl group-hover:text-[#25D366] transition-colors duration-500 relative z-10" />
    </motion.a>
  )
}

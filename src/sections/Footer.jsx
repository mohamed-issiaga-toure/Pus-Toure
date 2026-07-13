// Import Framer Motion
import { motion } from "framer-motion"

// Navigation
import navLinks from "../data/navLinks"
// Icônes Lucide
import { ArrowUp, Mail, Music } from "lucide-react"

// Icônes réseaux sociaux (react-icons)
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"




// ===== ANIMATIONS =====
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}


function Footer() {

  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-dark-card border-t border-dark-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ===== GRID TOP ===== */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-dark-border"
        >

          {/* ===== IDENTITÉ ===== */}
          <motion.div variants={item}>
            <p className="text-primary-light font-medium text-lg mb-3">
              Pus Touré Tech
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Développeur Web Full-stack, je transforme vos idées en projets concrêts, durables et maintenable.
            </p>
          </motion.div>

          {/* ===== NAVIGATION ===== */}
          <motion.div variants={item}>
            <p className="text-slate-200 font-medium text-sm mb-4">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-slate-500 hover:text-primary-pale text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ===== SOCIAL ===== */}
          <motion.div variants={item}>
            <p className="text-slate-200 font-medium text-sm mb-4">
              Suivez-moi
            </p>

            <div className="flex flex-wrap gap-3">

              <a href="https://github.com" className="icon">
                <FaGithub size={16} />
              </a>

              <a href="https://linkedin.com" className="icon">
                <FaLinkedin size={16} />
              </a>

              <a href="https://facebook.com" className="icon">
                <FaFacebook size={16} />
              </a>

              <a href="https://instagram.com" className="icon">
                <FaInstagram size={16} />
              </a>

              <a href="mailto:test@gmail.com" className="icon">
                <Mail className="w-4 h-4" />
              </a>

            </div>
          </motion.div>

        </motion.div>

        {/* ===== BOTTOM ===== */}
        <motion.div
          variants={item}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >

          <p className=" text-xs text-center text-primary-light">
            © {currentYear} Pus Touré Tech tous droits réservés. | Développé par Pus Touré
          </p>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            onClick={scrollToTop}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-dark-bg border border-dark-border"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>

        </motion.div>

      </div>
    </motion.footer>
  )
}

export default Footer
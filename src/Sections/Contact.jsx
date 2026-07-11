
// React state pour le formulaire
import { useState } from 'react'

// EmailJS pour l'envoi d'email
import emailjs from 'emailjs-com'

// Icônes
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react'

// Framer Motion
import { motion } from 'framer-motion'

// Animations centralisées
import { fadeUp, staggerContainer, defaultTransition } from '../util/animations'

import contactInfo from '../data/contactInfo'

// ===== CLÉS EMAILJS =====
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// ===== DONNÉES STATIQUES =====


function Contact () {

  // ===== ICÔNES =====
  const icons = {
    mail:  <Mail className="w-5 h-5" />,
    phone: <Phone className="w-5 h-5" />,
    map:   <MapPin className="w-5 h-5" />,
  }

  // ===== STATE FORM =====
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  // ===== UPDATE INPUT =====
  const handleChange = (e) => {
    if (status === 'success' || status === 'error') setStatus('idle')

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // ===== SUBMIT FORM =====
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.from_name || !formData.from_email || !formData.message) return

    setStatus('loading')

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      setStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-dark-bg">

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          // Animation du titre principal de section
          initial={{ opacity: 0, y: 40 }}       // invisible + bas
          whileInView={{ opacity: 1, y: 0 }}    // apparition vers le haut
          viewport={{ once: true, amount: 0.3 }} // déclenche une seule fois
          transition={defaultTransition}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Travaillons ensemble
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            Contact
          </h2>

          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </motion.div>

        {/* ================= CONTENU GLOBAL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ================= COLONNE GAUCHE ================= */}
          <motion.div
            // Animation entrée gauche → droite
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >

            {/* INTRO */}
            <motion.div
              // Animation légère du bloc intro
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-slate-200 font-medium text-lg mb-3">
                Parlons de votre projet
              </h3>

              <p className="text-primary-pale text-sm leading-relaxed">
                Vous avez un projet en tête ? Une opportunité ?
                Contactez-moi, réponse rapide.
              </p>
            </motion.div>

            {/* ================= INFOS CONTACT ================= */}
            <motion.div
              // Animation en cascade des éléments enfants
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.id}

                  // Animation de chaque item (cascade verticale)
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}

                  href={item.href}
                  className="flex items-center gap-4 group"
                >

                  {/* ICÔNE */}
                  <div className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors duration-200 shrink-0">
                    {icons[item.iconName]}
                  </div>

                  {/* TEXTE */}
                  <div>
                    <p className="text-slate-500 text-xs">
                      {item.label}
                    </p>
                    <p className="text-slate-200 text-sm group-hover:text-primary-pale transition-colors">
                      {item.value}
                    </p>
                  </div>

                </motion.a>
              ))}
            </motion.div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-xl p-4 flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              <p className="text-slate-400 text-sm">
                Disponible pour missions freelance & CDI
              </p>
            </motion.div>

          </motion.div>

          {/* ================= FORMULAIRE ================= */}
          <motion.div
            // Animation entrée droite → gauche
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-6"
          >

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* INPUT NOM */}
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-slate-200 text-sm"
              />

              {/* INPUT EMAIL */}
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Votre email"
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-slate-200 text-sm"
              />

              {/* TEXTAREA */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={5}
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-slate-200 text-sm resize-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {status === 'loading'
                  ? <><Loader className="w-4 h-4 animate-spin" /> Envoi...</>
                  : <><Send className="w-4 h-4" /> Envoyer</>
                }
              </button>

              {/* SUCCESS MESSAGE */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-300 text-sm text-center"
                >
                  Message envoyé ✔
                </motion.p>
              )}

              {/* ERROR MESSAGE */}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-300 text-sm text-center"
                >
                  Erreur d'envoi ❌
                </motion.p>
              )}

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Contact;
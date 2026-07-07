// Import de l’icône WhatsApp depuis react-icons
import { FaWhatsapp } from 'react-icons/fa'

// Import des hooks React
import { useEffect, useState } from 'react'

function WhatsAppButton() {

  // 📞 Mon numéro WhatsApp (format international SANS + ni espace)
  const phoneNumber = '224629640564'

  // 💬 Message automatique pré-rempli
  const message = 'Bonjour Mohamed, je vous contacte depuis votre portfolio.'

  // 🔗 Création du lien WhatsApp officiel
  // encodeURIComponent permet d’éviter les bugs avec les espaces et accents
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // 🎯 État pour gérer l’animation d’apparition
  const [visible, setVisible] = useState(false)

  // ⚡ useEffect = exécuté au chargement du composant
  useEffect(() => {
    // ⏳ On attend 800ms avant d’afficher le bouton (effet smooth)
    const timer = setTimeout(() => {
      setVisible(true)
    }, 800)

    // 🧹 Nettoyage du timer (bonne pratique React)
    return () => clearTimeout(timer)
  }, [])

  return (

    // 📦 Conteneur principal fixé à l’écran
    <div
      className={`
        fixed bottom-6 right-6 z-50   /* position bas droite + priorité affichage */
        transition-all duration-700   /* animation fluide */
        ${visible 
          ? 'opacity-100 translate-y-0'   // visible
          : 'opacity-0 translate-y-10'   // caché au départ
        }
      `}
    >

      {/* 💬 Tooltip (petit texte au survol) */}
      <div className="
        absolute right-16 bottom-1/2 translate-y-1/2
        bg-gray-900 text-white text-sm px-3 py-1 rounded-md
        opacity-0 group-hover:opacity-100
        transition duration-300
        whitespace-nowrap shadow-md
      ">
        Discuter sur WhatsApp
      </div>

      {/* 🟢 Bouton WhatsApp */}
      <a
        href={whatsappUrl}              // 🔗 lien vers mon WhatsApp
        target="_blank"                // ouvre dans un nouvel onglet
        rel="noreferrer"              // sécurité
        aria-label="Contacter sur WhatsApp"

        className="
          group relative
          w-14 h-14                   /* taille du bouton */
          flex items-center justify-center
          rounded-full                /* forme ronde */
          bg-green-500                /* couleur WhatsApp */
          shadow-lg                   /* ombre */
          transition-all duration-300
          hover:scale-110             /* zoom au survol */
          hover:shadow-green-400/50   /* glow vert */
        "
      >

        {/* 💥 Effet pulse (animation moderne) */}
        <span className="
          absolute inline-flex
          h-full w-full
          rounded-full
          bg-green-400
          opacity-75
          animate-ping
        "></span>

        {/* 📱 Icône WhatsApp */}
        <FaWhatsapp
          size={28}
          className="text-white relative z-10"
        />

      </a>
    </div>
  )
}

// 📤 Export du composant
export default WhatsAppButton
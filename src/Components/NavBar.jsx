import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import navLinks from '../data/navLinks'
import useScrollSpy from '../hooks/useScrollSpy'

// IDs des sections à surveiller
const SECTIONS = ['hero', 'about', 'skills', 'projects', 'services', 'album', 'contact']

function NavBar() {

  // true si scrollé de plus de 50px
  const [isScrolled, setIsScrolled] = useState(false)

  // true si le menu burger est ouvert
  const [menuOpen, setMenuOpen] = useState(false)

  // Section active détectée automatiquement
  const activeSection = useScrollSpy(SECTIONS)

  // --- EFFET SCROLL ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // --- FERMETURE MENU AU RESIZE ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (

    // Fond transparent en haut → sombre après 50px de scroll
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-dark-bg border-b border-dark-border shadow-lg"
        : "bg-dark-bg border-b border-dark-border"
    }`}>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      
        <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent shadow-primary-light">
          Pus <span className="text-primary font-bold shadow-3xm text-2xl tracking-wide from-cyan-400 to-blue-500 bg-clip-text shadow-primary-pale">
            Touré
          </span>
        </h1>

        {/* ===== LIENS DESKTOP — hidden sur mobile ===== */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.id}>
              
                <a href={link.href}
                className={`text-sm font-bold transition-all ${
                  // Lien actif → bleu clair | inactif →
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary-light border-b-2 border-primary-light pb-0.5'
                    : 'text-slate-400 hover:text-primary-light'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ===== BOUTON CTA DESKTOP ===== */}
        
          <a href="#contact"
              className="border-2 border-dark-border font-bold hover:border-primary text-slate-400 hover:text-primary-pale text-sm px-6 py-3 rounded-full transition-colors duration-400"
        >
          Me contacter
        </a>

        {/* ===== BOUTON BURGER MOBILE — visible uniquement sur mobile ===== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {/* Alterne entre icône hamburger et croix */}
          {menuOpen
            ? <X className="w-6 h-6" />
            : <Menu className="w-6 h-6" />
          }
        </button>

      </div>

      {/* ===== MENU MOBILE DÉROULANT ===== */}
      {menuOpen && (
        <div className="md:hidden bg-dark-card border-t border-dark-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.id}>
                
                <a href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-bold transition-all block ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary-light'
                      : 'text-slate-400 hover:text-primary-light'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton contact dans le menu mobile */}
          
         <a href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-primary font-bold hover:bg-primary-light text-white text-sm px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Me contacter
          </a>
        </div>
      )}

    </nav>
  )
}

export default NavBar
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import navLinks from '../data/navLinks'
import useScrollSpy from '../hooks/useScrollSpy'

const SECTIONS = ['hero', 'about', 'skills', 'services', 'projects', 'album', 'contact']

function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const activeSection = useScrollSpy(SECTIONS)
  const navigate = useNavigate()

  // Gestion navigation — ancres ET pages
  const handleNav = (href) => {
    if (href.startsWith('/#')) {
      // Ancre → on va sur Home puis on scrolle vers la section
      const sectionId = href.replace('/#', '')
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      // Page séparée → navigation directe
      navigate(href)
    }
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-dark-bg border-b border-dark-border shadow-lg'
        : 'bg-dark-bg border-b border-dark-border'
    }`}>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => navigate('/')}>
          <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Pus <span className="text-primary font-bold text-2xl tracking-wide">
              Touré
            </span>
          </h1>
        </button>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-bold transition-all ${
                  activeSection === link.href.replace('/', '').replace('#', '')
                    ? 'text-primary-light border-b-2 border-primary-light pb-0.5'
                    : 'text-slate-400 hover:text-primary-light'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <button
          onClick={() => navigate('/contact')}
          className="hidden md:block border-2 border-dark-border font-bold hover:border-primary text-slate-400 hover:text-primary-pale text-sm px-6 py-3 rounded-full transition-colors duration-200"
        >
          Me contacter
        </button>

        {/* Burger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen
            ? <X className="w-6 h-6" />
            : <Menu className="w-6 h-6" />
          }
        </button>

      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-dark-card border-t border-dark-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`text-sm font-bold transition-all block w-full text-left ${
                    activeSection === link.href.replace('/', '').replace('#', '')
                      ? 'text-primary-light'
                      : 'text-slate-400 hover:text-primary-light'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => { navigate('/contact'); setMenuOpen(false) }}
            className="mt-4 block w-full text-center bg-primary font-bold hover:bg-primary-light text-white text-sm px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Me contacter
          </button>
        </div>
      )}

    </nav>
  )
}

export default NavBar
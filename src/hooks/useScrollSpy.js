import { useState, useEffect } from 'react'

// Hook qui détecte quelle section est visible à l'écran
// sections : tableau des ids des sections ex: ['hero', 'about', 'skills'...]

function useScrollSpy(sections) {

  // Id de la section actuellement visible
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {

    // IntersectionObserver — API native du navigateur
    // Détecte quand un élément entre/sort du viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Si la section est visible à plus de 50% → elle devient active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // threshold: 0.3 = la section doit être visible à 30% minimum
        threshold: 0.3,
      }
    )

    // On observe chaque section
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Nettoyage — on arrête d'observer quand le composant se démonte
    return () => observer.disconnect()

  }, [sections])

  return activeSection
}

export default useScrollSpy
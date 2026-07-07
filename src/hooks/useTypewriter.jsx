import { useState, useEffect } from 'react'

// Hook personnalisé qui gère l'effet machine à écrire
// Paramètres :
// - words : tableau de mots/phrases à écrire
// - speed : vitesse d'écriture en ms (défaut 100ms)
// - delay : pause entre chaque mot en ms (défaut 1500ms)

function useTypewriter(words = [], speed = 100, delay = 2000) {

  // Le texte actuellement affiché à l'écran
  const [displayText, setDisplayText] = useState('')

  // Index du mot en cours dans le tableau words
  const [wordIndex, setWordIndex] = useState(0)

  // true = on est en train d'écrire | false = on efface
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {

    // Sécurité : si le tableau est vide on ne fait rien
    if (words.length === 0) return

    // Le mot actuellement en cours d'écriture/effacement
    const currentWord = words[wordIndex]

    let timeout

    if (isTyping) {
      // --- PHASE ÉCRITURE ---
      if (displayText.length < currentWord.length) {
        // On ajoute une lettre toutes les `speed` ms
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, speed)
      } else {
        // Mot complètement écrit → on attend `delay` ms puis on efface
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delay)
      }
    } else {
      // --- PHASE EFFACEMENT ---
      if (displayText.length > 0) {
        // On supprime une lettre toutes les `speed / 2` ms
        // (l'effacement est 2x plus rapide que l'écriture)
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, speed / 2)
      } else {
        // Mot complètement effacé → on passe au mot suivant
        setIsTyping(true)
        setWordIndex(prev => (prev + 1) % words.length)
        // % words.length : revient à 0 après le dernier mot (boucle infinie)
      }
    }

    // Nettoyage : on annule le timeout si le composant se démonte
    return () => clearTimeout(timeout)

  }, [displayText, isTyping, wordIndex, words, speed, delay])

  // On retourne le texte à afficher
  return displayText
}

export default useTypewriter
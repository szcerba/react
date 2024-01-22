import { getRandomFact } from '../services/facts.js'
import { useEffect, useState } from 'react'

export const useCatFact = () => {
  const [fact, setFact] = useState('')
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

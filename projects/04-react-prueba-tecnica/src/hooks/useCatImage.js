import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    console.log(firstWord)
    setImageUrl(`https://picsum.photos/400?${firstWord}`)
  }, [fact])

  return { imageUrl }
} // devolver imageUrl

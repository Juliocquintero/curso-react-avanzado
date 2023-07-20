import { useEffect, useState } from 'react'

const useScrollFixed = () => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showFixed])

  return {
    showFixed
  }


}

export default useScrollFixed
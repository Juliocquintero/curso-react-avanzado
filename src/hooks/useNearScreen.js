import { useEffect, useRef, useState } from 'react'

const useNearScreen = () => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
    ).
      then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0]

          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
    return () => {

    }
  }, [ref])

  return {
    ref, show
  }
}



export default useNearScreen
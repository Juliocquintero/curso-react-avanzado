import { useState } from 'react'

const useLocalSotrage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLogalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (err) {
      console.error(err)
    }
  }

  return [
    storedValue, setLogalStorage
  ]



}

export default useLocalSotrage
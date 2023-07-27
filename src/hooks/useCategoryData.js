import { useEffect, useState } from 'react'
import axios from "axios"

const useCategoryData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const getCategories = async () => {
    setLoading(true)
    try {
      const URL = 'https://curso-react-avanzado-server.vercel.app/categories'
      const resp = await axios.get(URL)
      const data = await resp.data
      setCategories(data)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    getCategories()
    return () => {

    }
  }, [])
  return {
    categories, loading
  }
}

export default useCategoryData
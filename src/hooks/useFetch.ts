import { useState, useEffect } from 'react'
import axios from 'axios'
import { Options } from '../types'

const useFetch = <T = any>(url: string, options?: Options) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleFetch = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await axios.get(url, options)
      setData(response.data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err)
    }
  }

  const refetch = () => {
    handleFetch()
  }

  useEffect(() => {
    handleFetch()
  }, [url])

  return {
    data,
    loading,
    error,
    refetch
  }
}

export default useFetch

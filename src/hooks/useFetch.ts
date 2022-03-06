import { useState, useEffect } from 'react'
import axios from 'axios'
import { Options } from '../types'

const useFetch = (url: string, options?: Options) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleFetch = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await axios.get(url, options)
      setData(response.data)

      setLoading(false)
    } catch (err: any) {
      setError(err)
    }
  }

  const refetch = (): void => {
    handleFetch()
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return {
    data,
    loading,
    error,
    refetch
  }
}

export default useFetch

import React, { useEffect } from 'react'
import axios from 'axios'

const FrontReady = () => {

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/front_ready/`)
  }, [])

  return (
    <div className='text-light'>
      Front Ready
    </div>
  )
}

export default FrontReady
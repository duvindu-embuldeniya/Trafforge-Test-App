import React, { useEffect } from 'react'
import axios from 'axios'

const FrontLive = () => {

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/front_live/`)
  }, [])

  return (
    <div className='text-light'>
      Front Live
    </div>
  )
}

export default FrontLive
import React, { useEffect } from 'react'
import axios from 'axios'

const FrontStart = () => {

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/front_start/`)
  }, [])

  return (
    <div className='text-light'>
      Front Start
    </div>
  )
}

export default FrontStart
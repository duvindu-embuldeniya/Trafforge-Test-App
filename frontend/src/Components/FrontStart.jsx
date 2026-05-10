import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FrontStart = () => {

  const [status, setStatus] = useState('')

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/front_start/`)
      .then(res => setStatus(res.data))
      .catch(() => setStatus("Error"))
  }, [])

  return (
    <div className='text-light'>
      Front Start: {status}
    </div>
  )
}

export default FrontStart
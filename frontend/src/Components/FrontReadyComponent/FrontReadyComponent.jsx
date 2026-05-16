import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FrontReadyComponent = () => {

  const [status, setStatus] = useState('')

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/front_ready/`)
      .then(res => setStatus(res.data))
      .catch(() => setStatus("DB Error"))
  }, [])

  return (
    <div className='text-light'>
      Front Ready: {status}
    </div>
  )
}

export default FrontReadyComponent
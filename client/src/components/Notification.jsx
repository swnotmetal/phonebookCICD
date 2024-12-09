/* eslint-disable linebreak-style */
import React, { useEffect } from 'react'

const Notification = ({ message, setMessage }) => {
  useEffect(() => {
    if (message !== null) {
      const timer = setTimeout(() => {
        setMessage(null)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [message, setMessage])

  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

export default Notification

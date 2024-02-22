import React, {useState} from 'react'

function MessageChange() {

    const [message, setMessage] = useState('Hello')

    setInterval(() => {
        setMessage('Welcome')
    }, 2000)
  return (
    <>
        <h1>{message}</h1>
    </>
  )
}

export default MessageChange
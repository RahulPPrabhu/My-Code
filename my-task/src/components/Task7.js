import React, {useState, useRef, useEffect} from 'react'

// Using useRef hook
function Task7() {

    const [uname, setUname] = useState('')
    const inputEle = useRef(0)

    useEffect(() => {
        inputEle.current.focus()
    })

  return (
    <>
        <input
            type='text'
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            ref={inputEle}
            placeholder='Auto Focus...'
        />
    </>
  )
}

export default Task7
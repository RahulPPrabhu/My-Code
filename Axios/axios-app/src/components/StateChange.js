import React, {useState} from 'react'

function StateChange() {

    const [state, setState] = useState(true)

    if (!state) {
        document.body.style.backgroundColor = "#ddd"
    } else {
        document.body.style.backgroundColor = "#fff"
    }

    const handleState = () => {
        setState(!state)
        console.log(state)
    }
  return (
    <div>
        <button onClick={handleState}>Change State</button>
    </div>
  )
}

export default StateChange
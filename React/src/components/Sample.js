import React, {useState} from 'react'

function Sample() {

    const [count, setCount] = useState(0)

    const handleCountChange = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>Sample App</h1>
        <button onClick={handleCountChange}>Click</button>
        <p>The Current Count is: {count}</p>
    </div>
  )
}

export default Sample
import axios from 'axios'
import React, {useState} from 'react'

function Jokes() {

    const [setup, setSetup] = useState('')
    const [punchline, setPunchline] = useState('')

    const handleClick = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then((res) => {
                console.log(res.data)
                setSetup(res.data.setup)
                setPunchline(res.data.punchline)
            })
            .catch((err) => {
                console.log(err)
            })
    }
  return (
    <div>
        <h4>{setup}</h4>
        <h5>{punchline}</h5>
        <button onClick={handleClick}>Click to Get Jokes</button>
    </div>
  )
}

export default Jokes
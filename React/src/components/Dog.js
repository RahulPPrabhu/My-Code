import React, {useState} from 'react'
import axios from 'axios'
import './Dog.css'

function Dog() {

    const [link, setLink] = useState('')
    const [status, setStatus] = useState('Not Active')
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if (clicked !== 'false') {
            axios.get("https://dog.ceo/api/breeds/image/random")
            .then((res) => {
                console.log(res.data)
                setLink(res.data.message)
                setClicked(true)
                setStatus(res.data.status)
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            console.log('Not Valid')
        }
        
    }
  return (
    <div>
        <h2>API Status: {status}</h2>
        <h4><a href={link} className={clicked ? '': 'disabled'}>Here is the Link</a></h4>
        <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Dog
import React, {useState} from 'react'
import axios from 'axios'

function Rest() {

    const [name, setName] = useState('')
    const placeholder = "Enter Name"

    const handleClick = () => {
        axios.get('http://127.0.0.1:5000/users')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handlePostClick = () => {
        console.log(name)
        axios.post('http://127.0.0.1:5000/addUser', name)
        .then(() => {
            console.log("User Added Successfully")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
  return (
    <div>
        <button onClick={handleClick}>Get User</button>
        <br /> <br />
        <input type="text" placeholder={placeholder} value={name} onChange={handleNameChange} />
        <button onClick={handlePostClick}>Add User</button>
    </div>
  )
}

export default Rest
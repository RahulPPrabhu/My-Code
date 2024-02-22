import './Timer.css';
import React, {useState} from 'react'
import axios from 'axios'

function Timer() {

    const [uname, setUname] = useState('')
    const [age, setAge] = useState('')
    const placeholder = "Enter Your Name"

    const handleNameChange = (e) => {
        setUname(e.target.value)
        setAge('')
    }

    const handleClick = () => {
        axios.get(`https://api.agify.io?name=${uname}`)
        .then((res) => {
            console.log(res.data)
            let uAge = res.data.age
            if(uAge != null) {
                setAge(uAge)
            } else {
                setAge('Unknown Name')
            }
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
  return (
    <div>
        <h1>Predict Age Based on the Name</h1>

        <div className='inputArea'>
            <input type="text" id='userInput' placeholder={placeholder} value={uname} onChange={handleNameChange}/>
            <button id='btn' onClick={handleClick}>Click to Check Your Age</button>
        </div>
        
        <div className='details'>
            <h2 className='username'>Name: {uname}</h2>
            <h2 className='userage'>Your Age: {age}</h2>
        </div>
    </div>
  )
}

export default Timer
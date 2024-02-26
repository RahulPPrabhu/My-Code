import axios from 'axios'
import React, {useState} from 'react'

function Gender() {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')

    const handleGender = () => {
        axios.get(`https://api.genderize.io/?name=${name}`)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setGender(res.data.gender)
        })
        .catch((err) => {
            console.log(err)
        })

        // axios.get(`https://api.nationalize.io/?name=${name}`)
        //     .then((res) => {
        //         console.log(res.data.country)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    
  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleGender}>Click</button>
        <p>{gender}</p>
    </div>
  )
}

export default Gender
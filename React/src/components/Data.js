import axios from 'axios'
import React, {useState} from 'react'

function Data() {

    const [datas, setData] = useState('Hi')

    const handleDataChange = () => {
        axios.get('http://127.0.0.1:5000/user')
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
        <p>Content: {datas}</p>
        <button onClick={handleDataChange}>Data</button>
    </>
  )
}

export default Data
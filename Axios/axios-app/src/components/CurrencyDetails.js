import React, {useState} from 'react'
import axios from 'axios'
import './coin.css'

function CurrencyDetails() {

    const [code, setCode] = useState([])
    const countryCode = code.map((c, index) => (<td key={index}>{c.code}</td>))
    const rate = code.map((c, index) => (<td key={index}>{c.rate}</td>))
    const time = code.map((c, index) => (<td key={index}>{c.time}</td>))
    const date = code.map((c, index) => (<td key={index}>{c.date}</td>))

    axios.get('http://127.0.0.1:4000/currencyDetails')
        .then((res) => {
            setCode(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
  return (
    <div>
        <h1>Currency Value Changes Over Time</h1>
        <table>
            <tbody>
                <tr>{countryCode}</tr>
                <tr>{rate}</tr>
                <tr>{time}</tr>
                <tr>{date}</tr>
            </tbody>
            
        </table>
    </div>
  )
}

export default CurrencyDetails
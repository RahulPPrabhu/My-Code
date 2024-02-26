import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './coin.css'
import CurrencyDetails from './CurrencyDetails'

function CoinIndex() {

    const [EURCode, setEURCode] = useState('')
    const [EURCurrency, setEURCurrency] = useState('')
    const [EURrate, setEURRate] = useState(0)

    const [USDCode, setUSDCode] = useState('')
    const [USDCurrency, setUSDCurrency] = useState('')
    const [USDrate, setUSDRate] = useState(0)

    const [GBPCode, setGBPCode] = useState('')
    const [GBPCurrency, setGBPCurrency] = useState('')
    const [GBPrate, setGBPRate] = useState(0)

    const sendData = {
        code: EURCode,
        currency: EURCurrency,
        rate: EURrate,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    }

    const sendUSDData = {
        code: USDCode,
        currency: USDCurrency,
        rate: USDrate,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    }

    const sendGBPData = {
        code: GBPCode,
        currency: GBPCurrency,
        rate: GBPrate,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    }

    useEffect(() => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((res) => {
                console.log(res.data.bpi)

                setEURCode(res.data.bpi.EUR.code)
                setEURCurrency(res.data.bpi.EUR.description)
                setEURRate(res.data.bpi.EUR.rate_float)

                setUSDCode(res.data.bpi.USD.code)
                setUSDCurrency(res.data.bpi.USD.description)
                setUSDRate(res.data.bpi.USD.rate_float)

                setGBPCode(res.data.bpi.GBP.code)
                setGBPCurrency(res.data.bpi.GBP.description)
                setGBPRate(res.data.bpi.GBP.rate_float)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleStoreData = () => {
        axios.post('http://127.0.0.1:4000/details', sendData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            window.location.reload()
    }

    const handleUSDStoreData = () => {
        axios.post('http://127.0.0.1:4000/details', sendUSDData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            window.location.reload()
    }

    const handleGBPStoreData = () => {
        axios.post('http://127.0.0.1:4000/details', sendGBPData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            window.location.reload()
    }

  return (
    <div className='main'>
        <h1>Bit Coin Price Index</h1>
        <div className='flex'>
                <div className='flex-item'>
                <p><span>Country Code:</span> {EURCode}</p>
                <p><span>Currency:</span> {EURCurrency}</p>
                <p><span>Rate:</span> {EURrate}</p>
            </div>

            <div className='flex-item'>
                <p><span>Country Code:</span> {USDCode}</p>
                <p><span>Currency:</span> {USDCurrency}</p>
                <p><span>Rate:</span> {USDrate}</p>
            </div>

            <div className='flex-item'>
                <p><span>Country Code:</span> {GBPCode}</p>
                <p><span>Currency:</span> {GBPCurrency}</p>
                <p><span>Rate:</span> {GBPrate}</p>
            </div>
        </div>
        <button className='btn' onClick={handleStoreData}>Store EUR Details</button>
        <button className='btn' onClick={handleUSDStoreData}>Store USD Details</button>
        <button className='btn' onClick={handleGBPStoreData}>Store GBP Details</button>
        <CurrencyDetails />
        
    </div>
  )
}

export default CoinIndex
const express = require('express')
const CurrencyDetails = require('../Schema/currency')

const router = express()

router.post('/details', (req, res) => {
    console.log(req.body)
    const {code, currency, rate, time, date} = req.body;
    console.log(code + " " + currency + " " + rate + " " + date + " " + time)
    res.send("Added Successfully")
    
    const currencyData = new CurrencyDetails({
        code: code,
        currency: currency,
        rate: rate,
        time: time,
        date: date
    })

    currencyData.save()
        .then((res) => {
            console.log('Data saved to Mongodb', res)
        })
        .catch((err) => {
            console.log('Error Storing Data', err)
        })
})

router.get('/currencyDetails', async (req, res) => {
    const data = await CurrencyDetails.find()
    res.json(data)
})

module.exports = router
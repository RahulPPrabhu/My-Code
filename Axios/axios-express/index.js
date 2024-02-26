const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./Routes/route')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',routes)

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log("Connected to MongoDb")
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(4000, () => {
    console.log("Port is running at http://127.0.0.1:4000/")
})
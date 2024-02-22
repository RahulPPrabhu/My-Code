const express = require('express')
const cors = require('cors')

const hostname = '127.0.0.1'
const PORT = 5000

const app = express()

app.use(cors())


//default route
app.get('/', (req,res) => {
    res.send('Welcome')
})

//user route
app.get('/user', (req, res) => {
    res.send("Welcome to the App")
})

//route parameter
app.get('/sample/:id', (req,res) => {
    res.send("Hello")
    console.log(req.params.id)
})

app.listen(PORT, () => {
    console.log(`Server is Running at port http://${hostname}:${PORT}/`)
})
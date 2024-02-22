const express = require('express')
const parser = require('body-parser')

const app = express()
app.use(parser.json())

const urlencodedParser = parser.urlencoded({extended: false})

const hostname = '127.0.0.1'
const PORT = 5000

app.get('/', (req, res) => {
    return res.json({
        'message': 'Successfully fetched the data'
    })
})

app.get('/user', (req,res) => {
    return res.json({
        'name': 'Luffy',
        'age': 21,
        'goal': 'To find the one piece'
    })
})

app.post('/newuser', urlencodedParser, (req, res) => {
    try {
        console.log(req.body.name)
        console.log(req.body.age)
        return res.json({
            'message': 'User Added',
            'name': req.body.name,
            'age': req.body.age
        })
    } catch(err) {
        console.log(err)
    }
})

app.put('/updateUser', urlencodedParser, (req,res) => {
    console.log(req.body)
    return res.json({
        'message': 'User Updated',
        'name': 'Sanji',
        'age': 40
    })
})

// delete the data based on the id
app.delete('/deleteUser/:id', urlencodedParser, (req,res) => {
    console.log(req.body)
    if (req.body.id === 1) {
        return res.json({
            'message': 'User Deleted',
            'id': 1,
            'name': 'Minato',
            'age': 29
        })
    } else {
        return res.json({
            'message': 'User Does not exist'
        })
    }
})

app.listen(PORT, () => {
    console.log(`The Server is Running at http://${hostname}:${PORT}/`)
})
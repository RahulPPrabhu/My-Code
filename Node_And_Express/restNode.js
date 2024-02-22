const express = require('express')
const app = express()
const CORS = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(CORS())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const hostname = '127.0.0.1'
const PORT = 5000

let user = [
    {"id": 1, "name": "Luffy", "age": 21},
    {"id": 2, "name": "Zoro", "age": 22}
]

// display all the users
app.get('/users', (req,res) => {
    res.json(user)
})

// display the users based on the id
app.get('/users/:id', (req, res) => {
    const userInfo = user.find(u => u.id === parseInt(req.params.id))
    if (!userInfo) {
        res.send("User not Found")
    }
    res.json(userInfo)
})

// adding new user
app.post('/addUser', (req, res) => {
    const userInfo = {
        "id": user.length + 1,
        "name": req.body.name,
        "age": req.body.age
    }
    console.log(req.body.name)
    user.push(userInfo)
    res.status(201).json(userInfo)
})

//updating the existing user
app.put('/updateUser/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    const userIndex = user.findIndex(u => u.id === userID)
    console.log(`User Found at ${userIndex}`)
    if (userIndex == -1) {
        res.status(400).send("User Not Found")
    }
    const userInfo = {
        "id": req.params.id,
        "name": req.body.name,
        "age": req.body.age
    }
    user.splice(userIndex, userInfo)
    res.status(201).json(userInfo)
})

//delete user
app.delete('/delete/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const userIndex = user.findIndex(u => u.id === userId)
    console.log(userIndex)
    if (userIndex == -1) {
        res.status(400).send("User not found")
    } else {
        res.send("User Deleted")
        user.splice(userIndex, 1)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at http://${hostname}:${PORT}/`)
})

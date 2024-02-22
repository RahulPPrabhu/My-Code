const fs = require('fs')

fs.readFile('abc.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})
const express = require("express")
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname + '/images')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/work.html')
})

app.listen((3000), ()=>{
    console.log("Server is running!")
})

module.exports = app;
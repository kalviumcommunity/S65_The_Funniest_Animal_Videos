const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes')
const connectDB = require('./database/database')
const dotenv = require('dotenv').config()

app.use(express.json())
const port = process.env.PORT || 5000

app.get('/ping', (req,res) => {
    res.send('pong')
})

app.use('/user', userRoutes)

connectDB()

app.listen(port, function() {
    console.log(`Server is running on port ${port}`)
})
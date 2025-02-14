const express = require('express')
const app = express()


app.use(express.json())
const port = process.env.PORT || 5000

app.get('/ping', (req,res) => {
    res.send('pong')
})

app.listen(port, function() {
    console.log(`Server is running on port ${port}`)
})
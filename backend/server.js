const express = require('express')
const dotenv = require('dotenv').config()

//creating the port we want to use. the env.Port allows us to access the port variable anywhere else in the backend. 
const port = process.env.PORT || 5000

//initializing express 
const app = express()

//Get api - sending a request (req) and a receiveing a response (res) variable
app.get('/api/ulwazi', (req, res ) => {
    res.send('Ulwazi is live')
})

//listening event for the port technique
app.listen(port, () => console.log(`Server started on port ${port}`))
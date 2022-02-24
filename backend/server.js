const express = require('express')
const dotenv = require('dotenv').config()
//calling the errorhandler function from the Middleware folder
const {errorHandler} = require('./middleware/errorMiddleware')
//creating the port we want to use. the env.Port allows us to access the port variable anywhere else in the backend. 
const port = process.env.PORT || 5000

//initializing express 
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/ulwazi', require('./routes/ulwaziRoutes'))

//error handling app use
app.use(errorHandler)

//listening event for the port technique
app.listen(port, () => console.log(`Server started on port ${port}`))
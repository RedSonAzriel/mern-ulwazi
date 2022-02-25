//using this file to connect to mongoDB and using mongoose to make this happen. 
const mongoose = require('mongoose')
//function to connect to DB, all mongoose methods are async because they return a promise
const connectDB = async () => {
    //try catch
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        //within the connection variable(conn) this is a connection object and a host. The cyan comes from the colors package (line 2 of server.js)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error)
        //exit the process with failure so we use a 1
        process.exit(1)
    }    
}

module.exports = connectDB
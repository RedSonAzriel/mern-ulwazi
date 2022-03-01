//JSON Web Tokens package/dependency
const jwt = require('jsonwebtoken')
//async Handling 
const asyncHandler = require('express-async-handler')
//model 
const User = require('../models/userModel')

//This middleware runs as the http request is made, checking for error. 
const protect = asyncHandler(async(req, res, next) => {
    let token
    //checking the authorization header and that it is a Bearer token
    if(
    req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer')
    ){
        try{
            //assigning the token to the varibale - Get token from header
            token = req.headers.authorization.split('')[1]

          //Verify token
          const decoded = jwt.verify(token, process.env.JWT_SECRET)
          
          //GET user from the token
          req.user = await User.findById(decoded.id).select('-password')
        
          //calling the next piece of middleware, 401 indicates token not verified and unable to get user data/info from token
          next()
        } catch (error) {
          console.log(error)
          res.status(401)
          throw new Error('Not authorized')  
        }
    }
    //if not token at all if statement
    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }
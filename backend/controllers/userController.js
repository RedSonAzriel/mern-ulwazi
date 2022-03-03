//JSON Web Tokens package/dependency
const jwt = require('jsonwebtoken')
//encryption package/dependency 
const bcrypt = require('bcryptjs')
//async Handling 
const asyncHandler = require('express-async-handler')
//model 
const User = require('../models/userModel')


//@description - Register new user
//@route - POST /api/users
//@access - Public (can't acess a protected route w/o being logined, and you can't be logined w/o being a registered user)
const registerUser = asyncHandler(async(req, res) => {
    //body data for this request
    const{ name, email, password } = req.body
    //if statement to check the body data wanted is comming back correct(200 status) or incorrect(400 status)
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all required fields')
    }

    //check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password - using a bcrypt method - salt - to generate a password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json ({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }   else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@description - Authenticate a user
//@route - POST /api/users/login
//@access - Public 
const loginUser = asyncHandler(async(req, res) => {
    const{ email, password } = req.body

    //Check for user email
    const user = await User.findOne({email})

    //if statement to check the login password, accounting for the hashed password by using the bcrypt method - compare
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json ({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }   else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

    res.json({message: 'Login User'})
})

//@description - Get user data
//@route - GET /api/users/me
//@access - Private 
const getMe = asyncHandler(async(req, res) => {
        //Dont need to find the user because the authenticate Middleware 
    // const {_id, name, email } = await User.findById(req.user.id)
    res.status(200).json ({
        _id: _id,
        name,
        email,
    })
    // res.json({message: 'Display User Data'})
})

//Generate a JWT Token with a expiration timer on it. 
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: '30d', 
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}

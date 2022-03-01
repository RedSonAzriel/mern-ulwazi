//Three routes we want to create, one to register/create the user, one to login the user, one to get users information

const express = require('express')
const router = express.Router()
//controller function calling registerUser, loginUser, getMe http requests for users 
const { 
    registerUser, 
    loginUser, 
    getMe 
} = require('../controllers/userController')
//incorporating the authentication middleware variable 
const { protect } = require('../middleware/authenticateMiddleware')

//to add a user (a resource) we call a controller function called registerUser
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router
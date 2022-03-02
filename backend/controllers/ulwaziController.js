const asyncHandler = require('express-async-handler')

const Africa = require('../models/africaModel')

//@description - Get Ulwazi country
//@route - GET /api/ulwazi
//@access - Private 
const getUlwazi = asyncHandler(async(req, res) => {
    //connected with the token authorization, returning the user by id when a GET request is made
    const africa = await Africa.find({ user: req.user.id})
    res.status(200).json(africa)
})

//@description - Set Ulwazi country
//@route - POST /api/ulwazi
//@access - Private 
const setUlwazi = asyncHandler(async(req, res) => {
    //using a if statement to check if there is content from the server to the client
    if(!req.body.text) {
        //400 is a client error (bad request)
        res.status(400)
        throw new Error ('Please add a text field')
    }

    const africa = await Africa.create({
        text: req.body.text,
        user: req.user.id,
    })
    
    res.status(200).json(africa)
})

//@description - Update Ulwazi country
//@route - PUT /api/ulwazi/:id
//@access - Private 

const updateUlwazi = asyncHandler(async(req, res ) => {
    const africa = await Africa.findById(req.params.id)

    if(!africa) {
        res.status(400)
        throw new Error('Africa not updated')
    }

    const user = await User.findById(req.user.id)

    //checks for the user exists in the database
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the loggined in user matches the ulwazi user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedAfrica = await Africa.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedAfrica)
})

//@description - Delete Ulwazi country
//@route - DELETE /api/ulwazi/:ID
//@access - Private 

const deleteUlwazi = asyncHandler(async(req, res ) => {
    const africa = await Africa.findById(req.params.id)

    if(!africa) {
        res.status(400)
        throw new Error('Africa not deleted')
    }

    const user = await User.findById(req.user.id)

    //checks for the user exists in the database
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the loggined in user matches the ulwazi user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    await Africa.remove()

    res.status(200).json({id: req.params.id})
})

//exporting this getUlwazi function
module.exports = {
    getUlwazi, 
    setUlwazi,
    updateUlwazi,
    deleteUlwazi
}
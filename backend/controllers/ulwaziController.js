const asyncHandler = require('express-async-handler')

const Africa = require('../models/africaModel')

//@description - Get Ulwazi country
//@route - GET /api/ulwazi
//@access - Private 
const getUlwazi = asyncHandler(async(req, res) => {
    const africa = await Africa.find()
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
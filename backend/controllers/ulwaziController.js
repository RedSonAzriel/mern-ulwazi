const asyncHandler = require('express-async-handler')

//@description - Get Ulwazi country
//@route - GET /api/ulwazi
//@access - Private 
const getUlwazi = asyncHandler(async(req, res ) => {
    res.status(200).json({message: 'Ulwazi is live'})
})

//@description - Set Ulwazi country
//@route - POST /api/ulwazi
//@access - Private 
const setUlwazi = asyncHandler(async(req, res ) => {
    //using a if statement to check if there is content from the server to the client
    if(!req.body.text) {
        //400 is a client error (bad request)
        res.status(400)
        throw new Error (' Please add a text field')
    }
    res.status(200).json({message: 'Created Ulwazi'})
})

//@description - Update Ulwazi country
//@route - PUT /api/ulwazi/:id
//@access - Private 

const updateUlwazi = asyncHandler(async(req, res ) => {
    res.status(200).json({message: `Update Ulwazi ${req.params.id}`})
})

//@description - Delete Ulwazi country
//@route - DELETE /api/ulwazi/:ID
//@access - Private 

const deleteUlwazi = asyncHandler(async(req, res ) => {
    res.status(200).json({message: `Delete Ulwazi ${req.params.id}`})
})

//exporting this getUlwazi function
module.exports = {
    getUlwazi, 
    setUlwazi,
    updateUlwazi,
    deleteUlwazi
}
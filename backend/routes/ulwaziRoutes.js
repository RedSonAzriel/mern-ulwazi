//We first bring in express into the file (written in common js syntax) 
const express = require('express')
//creating a variable called router
const router = express.Router()
//calling our ulwazi get Function from the controller
const { getUlwazi,setUlwazi, updateUlwazi, deleteUlwazi 
} = require('../controllers/ulwaziController')

//authentication variable applied to uwlazi main
const { protect } = require('../middleware/authenticateMiddleware')

//GET HTTP + POST HTTP reuests simiplified, updated route method by adding "protect," after creating authentication middleware
router.route("/").get(protect, getUlwazi).post(protect, setUlwazi)

//PUT HTTP + Delete HTTP reuests simiplified, , updated route method by adding "protect," after creating authentication middleware
router.route("/:id").delete(protect, deleteUlwazi).put(protect, updateUlwazi)

//export variable 
module.exports = router


//LEGACY HTTP REQUESTS - REDUNDANT DUE TO SIMPLIFIED FORMAT
//GET api - sending a json request (req) to the server and a receiveing a response (res) to the client
//router.get('/', getUlwazi)

//POST api - adding content/data to the server
//router.post('/', setUlwazi)

//PUT api - including a :id because put request require an id,  sending a json request (req) and updating content/data.
//router.put('/:id', updateUlwazi)

//Delete api - including a :id because put request require an id, sending a json request (req) and deleting content/data.
//router.delete('/:id', deleteUlwazi)


const mongoose = require('mongoose')

const africaSchema = mongoose.Schema(
    {
        //setting our text to an object which is a string, required is set to an array
        text: {
            type:String,
            required: [true, 'Please add a text value'],
        },
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model('Africa', africaSchema)
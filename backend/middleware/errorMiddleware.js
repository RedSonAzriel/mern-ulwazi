//Middleware is functions that execute during the response request cycle.

//function called errorhandler, req=request, res=response, next=calls any further middleware
const errorHandler = (err, req, res, next) => {
    //variable called statusCode - related to what you/user has set in the controller - 500 means server error, ? is a turnary which means a conditional, : means else 
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        //the stack is only needed in development mode (change the stack type in the .env file)
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}
const {StatusCodes} = require('http-status-codes');
const AppError = require('./error-handlers');

class ClientError extends AppError{
    constructor(name , message , explanation , statusCode){
        super(
         name,
         message,
        explanation,
        statusCode
       ) 
    }
}

module.exports = ClientError;
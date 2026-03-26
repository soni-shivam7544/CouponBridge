const jwt = require('jsonwebtoken');
const Customer = require('../Models/customer.model');
const { errorResponseBody } = require('../Utils/responsebody');

const verifyToken = async (req, res, next) => {
    
    try {
        const token = req.headers.authorization;

        if(!token) {
            throw { err: "No token! Authentication Failed! Login first. ", code: 401 };
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        const user = await  Customer.findById( decoded.id );
        if(!user){
            throw { err: "User Not found!", code: 400 };
        }
        req.user = user;
        
        next();

        
    } catch (error) {
        console.log(error);
        if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Something went wrong!";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Something happened wrong!";
        return res.status(500).json(errorResponseBody);
    }
}


module.exports = verifyToken;
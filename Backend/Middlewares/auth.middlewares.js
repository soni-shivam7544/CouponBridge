const jwt = require('jsonwebtoken');
const Provider = require('../Models/provider.model');
const { errorResponseBody } = require('../Utils/responsebody');

const verifyProviderToken = async (req, res, next) => {
    
    try {
        const token = req.headers.authorization;

        if(!token) {
            throw { err: "Authentication failed! No token provided, login first. ", code: 401 };
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        const user = await  Provider.findById( decoded.id );
        if(!user){
            throw { err: "Provider not found!", code: 400 };
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


module.exports = {
    verifyProviderToken
};
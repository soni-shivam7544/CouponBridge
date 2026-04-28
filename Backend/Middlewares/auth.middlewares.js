const jwt = require('jsonwebtoken');
const Provider = require('../Models/provider.model');
const { errorResponseBody } = require('../Utils/responsebody');
const Customer = require('../Models/customer.model');

const verifyProviderToken = async (req, res, next) => {
    
    try {
        const token = req.headers.authorization;

        if(!token) {
            throw { err: "Authentication failed! Login as Provider first.", code: 401 };
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        const user = await  Provider.findById( decoded.id );
        if(!user){
            throw { err: "Provider not found! Create an Account.", code: 400 };
        }
        req.user = user;
        
        next();

        
    } catch (error) {
        console.log(error);
        if(error.err) {
            errorResponseBody.error = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        return res.status(500).json(errorResponseBody);
    }
}

const verifyUserToken = async (req, res, next) => {
    
    try {
        const token = req.headers.authorization;

        if(!token) {
            req.user = null;
            return next();
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        let user = await  Customer.findById( decoded.id );
        if(!user){
           user = await Provider.findById( decoded.id);
           if(!user){
            req.user = null;
            next();
           }
        }
        req.user = user;
        
        next();

        
    } catch (error) {
        console.log(error);
        if(error.err) {
            errorResponseBody.error = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        return res.status(500).json(errorResponseBody);
    }
}

const isCustomerLoggedin = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if(!token) {
            throw { err: "Authentication failed! Login as Customer first.", code: 401 };
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        const user = await  Customer.findById( decoded.id );
        if(!user){
            throw { err: "Customer not found! Create an Account.", code: 400 };
        }
        req.user = user;
        
        next();

        
    } catch (error) {
        console.log(error);
        if(error.err) {
            errorResponseBody.error = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    verifyProviderToken,
    verifyUserToken,
    isCustomerLoggedin
};
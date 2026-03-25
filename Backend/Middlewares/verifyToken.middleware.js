const jwt = require('jsonwebtoken');
const Customer = require('../Models/customer.model');

const verifyToken = async (req, res, next) => {
    
    try {
        const token = req.headers.authorization;

        if(!token) {
            throw { err: "No token! Authentication Failed Login first. ", code: 401 }
        }
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            

            const user = await  Customer.findById ( decoded._id );
            req.user = user;
            
            next();
        }
        catch (error) {
            throw { err: error, code: 401 }
        }

        
    } catch (error) {
        throw error;
    }
}


module.exports = verifyToken;
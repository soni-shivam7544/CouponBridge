const cartServices = require('../Services/cart.services');
const { successResponseBody, errorResponseBody } = require('../Utils/responsebody');

const getUserCart = async (req, res) => {
    try {
        const response = await cartServices.getCart(req.user);
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    }catch(error){
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    getUserCart
}
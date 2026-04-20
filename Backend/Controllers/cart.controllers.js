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

const addToUserCart = async (req, res) => {
    try {
        const response = await cartServices.addToCart({user: req.user, couponId: req.body.couponId});
        successResponseBody.data = response;
        return res.status(201).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

const removeFromUserCart = async (req, res) => {
    try {
        const response = await cartServices.removeFromCart({user: req.user, couponId: req.params.id});
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    getUserCart,
    addToUserCart,
    removeFromUserCart
}
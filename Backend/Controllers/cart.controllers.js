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

const getUserCartCouponById = async(req, res) => {
    try {
        const response = await cartServices.getCartCouponById({user: req.user, couponId: req.params.id});
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

const addToUserCart = async (req, res) => {
    try {
        const response = await cartServices.addToCart({user: req.user, couponId: req.body.couponId});
        successResponseBody.data = response;
        successResponseBody.message = "Item added to cart";
        return res.status(201).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err = error.err;
            errorResponseBody.message = "Failed to add to cart";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        errorResponseBody.message = "Failed to add to cart";
        return res.status(500).json(errorResponseBody);
    }
}

const removeFromUserCart = async (req, res) => {
    try {
        const response = await cartServices.removeFromCart({user: req.user, couponId: req.params.id});
        successResponseBody.data = response;
        successResponseBody.message = "Item removed";
        return res.status(200).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err = error.err;
            errorResponseBody.message = "Failed to remove from cart";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        errorResponseBody.message = "Failed to remove from cart";
        return res.status(500).json(errorResponseBody);
    }
}

const updateUserCart = async (req, res) => {
    try {
        const {couponId, quantity} = req.body;
        const response =  await cartServices.updateInCart({user: req.user, couponId, quantity});
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
    removeFromUserCart,
    updateUserCart,
    getUserCartCouponById
}
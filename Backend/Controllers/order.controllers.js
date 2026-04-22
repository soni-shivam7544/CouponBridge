const orderServices = require('../Services/order.services');
const { successResponseBody, errorResponseBody } = require('../Utils/responsebody');

const createOrder = async(req, res) => {
    try {
        const response = await orderServices.create({ user: req.user, data: req.body});
        successResponseBody.data = response;
        return res.status(201).json(successResponseBody);
    } catch (error) {
        console.log(error);
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}

const getAllOrder = async (req, res) => {
    try {
        const response = await orderServices.getAll(req.user);
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);

    } catch (error) {
        console.log(error);
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
}


module.exports = {
    createOrder,
    getAllOrder
}
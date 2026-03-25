const customerService = require('../Services/customer.services.js');
const { successResponseBody, errorResponseBody } = require('../Utils/responsebody.js');


const signUp = async (req, res) => {
    try {
        const response = await customerService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "The customer signed up successfully.";
        res.status(201).json(successResponseBody);
    }catch (error) {
        if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to sign up the customer.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to sign up the customer.";
        res.status(500).json(errorResponseBody);
    }
}

const signin = async (req, res) => {
    try {
        const response = await customerService.login( req.body );
        successResponseBody.data = response;
        successResponseBody.message = " The customer signed in successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        if( error.err ){
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to signin customer.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to signin customer.";
        res.status(500).json(errorResponseBody);
    }
}

const getAllCustomers = async (req, res) => {
    try {
        const response = await customerService.getAll();
        successResponseBody.data = response;
        successResponseBody.message = "The customers retrieved successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to retrieve the customers.";
        res.status(500).json(errorResponseBody);
    }
}
 
const getCustomerById = async(req, res) => {
    try {
        const response = await customerService.getById(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "The customer retrieved successsfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to retrieve the customer.";
        res.status(500).json(errorResponseBody);
    }
}

const updateCustomerById = async (req, res) => {
    try {
        const response = await customerService.update(req.params.id, req.body);
        successResponseBody.data = response;
        successResponseBody.message = "The customer updated successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        if( error.err ){
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to update the customer.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to update the customer.";
        res.status(500).json(errorResponseBody);
    }
}

const deleteCustomerById = async (req, res) => {
    try {
        const response = await customerService.destroy(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "The customer deleted successfully.";
        return res.status(200).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to delete the customer.";
        res.status(500).json(errorResponseBody);
    }
}

const getCouponsByCustomerId = async (req, res) => {
    try {
        const response = await customerService.getAllCoupons(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "The coupons retrieved successfully.";
        res.status(200).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to retrieve the coupons.";
        res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    signUp,
    signin,
    getAllCustomers,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById,
    getCouponsByCustomerId

}
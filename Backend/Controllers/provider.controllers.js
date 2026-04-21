const { successResponseBody, errorResponseBody } = require('../Utils/responsebody');
const providerService = require('../Services/provider.services.js');

const signUp = async (req, res) => {
    try {
        const response = await providerService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "You have registered as a provider successfully. Please login to your account ";
        res.status(201).json(successResponseBody);
    } catch (error) {
        if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to register the provider.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to register the provider.";
        res.status(500).json(errorResponseBody);
    }
}

const signin = async (req, res) => {
    try {
        const response = await providerService.signin( req.body );
        successResponseBody.data = response;
        successResponseBody.message = `Welcome back ${response.user.name}. Login to provider account successful.`;
        res.status(200).json(successResponseBody);

    } catch(error) {
        if( error.err ){
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to login provider.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to login provider.";
        res.status(500).json(errorResponseBody);
    }
}

const getAllProviders = async (req, res) => {
    try {
        const response = await providerService.getAll();
        successResponseBody.data = response;
        successResponseBody.message = "The providers retrieved successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to retrieve the providers.";
        res.status(500).json(errorResponseBody);
    }
}

const getProviderById = async( req, res ) => {
    try {
        const response = await providerService.getOne(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "The provider retrieved successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to retrieve the provider.";
        res.status(500).json(errorResponseBody);
    }
}

const updateProviderById = async (req, res) => {
    try {
        const response = await providerService.updateProvider(req.params.id, req.body);
        successResponseBody.data = response;
        successResponseBody.message = "The provider updated successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        if (error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to update the provider.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to update the provider.";
        res.status(500).json(errorResponseBody);
    }
}

const deleteProvider = async (req, res) => {
    try {
        const response = await providerService.destroy(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "The provider deleted successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to delete the provider.";
        res.status(500).json(errorResponseBody);
    }
}

const getCouponsByProviderId = async (req, res) => {
    try {
        const response = await providerService.getAllCoupons(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "The coupons of the provider retrieved successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to retrieve the coupons of the provider.";
        res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    signUp,
    signin,
    getAllProviders,
    getProviderById,
    updateProviderById,
    deleteProvider,
    getCouponsByProviderId
}
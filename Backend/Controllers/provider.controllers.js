const { successResponseBody, errorResponseBody } = require('../Utils/responsebody');
const providerService = require('../Services/provider.services.js');

const signUp = async (req, res) => {
    try {
        const response = await providerService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "The provider signed up successfully.";
        res.status(201).json(successResponseBody);
    } catch (error) {
        if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to sign up the provider.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to sign up the provider.";
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

module.exports = {
    signUp,
    getAllProviders,
    getProviderById
}
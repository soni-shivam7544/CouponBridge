const otpServices = require('../Services/otp.services');
const { successResponseBody, errorResponseBody }  = require('../Utils/responsebody');

const createOTP = async(req, res)=>{
    try {
        const response = await otpServices.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "OTP Created!";
        return res.status(201).json(successResponseBody);
    } catch (error) {
        console.log(error);
        if(error.err){
            errorResponseBody.error = error.err;
            errorResponseBody.message = error.message;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "OTP Not Created!";
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    createOTP
}
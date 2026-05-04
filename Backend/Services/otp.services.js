const OTP = require('../Models/otp.model');

const create = async(data) => {
    try{
        const { email } = data;
        const otpCode = `${Math.floor(Math.random() * 10000)}`;
        const otp = await OTP.create({
            email,
            otp: otpCode
        });
        return otp;
    } catch(error){
        if(error.name === 'TypeError'){
            throw {
                err: 'Email is missing.',
                message: 'Email is missing.',
                code: 400
            }
        }
        if(error.code == 11000){
            throw {
                err: 'Previous OTP is still valid.',
                message: 'Previous OTP is still valid.',
                code: 400
            }
        }
        throw error;
    }
}


module.exports = {
    create
}
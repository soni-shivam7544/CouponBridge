const OTP = require('../Models/otp.model');

const create = async(data) => {
    try{
        const { email } = data;
        await OTP.findOneAndDelete({email});
        const otpCode = `${Math.floor(1000 + Math.random() * 9000)}`;
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

const verify = async(data) => {
    try {
        const { email, otp } = data;
        const storedOTP = await OTP.findOne( { email, otp });
        if(!storedOTP){
            throw {
                err: "Invalid OTP!",
                message: "Invalid OTP!",
                code: 400
            }
        }
        await OTP.findOneAndDelete({email, otp});
        return true;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    create,
    verify
}
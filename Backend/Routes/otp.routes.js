const otpControllers = require('../Controllers/otp.controllers');

const OTPRouter = (app) => {

    // Create OTP
    app.post('/cb/v1/api/otp', otpControllers.createOTP);

    // Verify OTP
    app.post('/cb/v1/api/otp-verify', otpControllers.verifyOTP);
}

module.exports = OTPRouter;
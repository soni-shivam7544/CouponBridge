const otpControllers = require('../Controllers/otp.controllers');

const OTPRouter = (app) => {
    app.post('/cb/v1/api/otp', otpControllers.createOTP);
}

module.exports = OTPRouter;
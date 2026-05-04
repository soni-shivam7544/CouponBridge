const mongoose = require('mongoose');

const OTPSchema = mongoose.Schema({
    otp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60
    }

});

const OTP = mongoose.model('OTP', OTPSchema);

module.exports = OTP;

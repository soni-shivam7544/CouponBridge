const mongoose = require('mongoose');

const OTPSchema = mongoose.Schema({
    otp: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60
    }

});

const OTP = mongoose.model('OTP', OTPSchema);

module.exports = OTP;

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
    savedCoupons:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Coupon'
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
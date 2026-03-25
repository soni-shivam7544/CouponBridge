const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    expirationDate: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    merchant: {
        type: String,
        required: true
    },
    purchased: {
        type: Boolean,
        default: false
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        default: null
    }
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
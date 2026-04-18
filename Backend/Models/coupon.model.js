const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    discountValue: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    brand: {
        type: String,
        required: true
    },
    isPurchased: {
        type: Boolean,
        default: false
    },
    productId: {
        type: Number,
        required: true
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
    },
    category: {
        type: String,
        required: true
    },
    discountType: {
        type: String,
        enum: {
            values: ["Percentage", "Flat"],
            message: "{VALUE} is not supported"
        }

    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dquo06t4c/image/upload/v1776523679/alt_img_coupon_tlqym9.png'
    }
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
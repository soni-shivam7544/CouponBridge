const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    providerName: {
        type: String,
        required: true
    },
    providerEmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    noOfCoupons: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 6
    },
    couponIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon',
        default: []
    }],
    totalUsageCount: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
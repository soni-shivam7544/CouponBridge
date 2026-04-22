const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    items:[{
        coupon: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Coupon'
        },
        quantity:{
            type: Number,
            default: 1
        }
    }],
    subtotal: Number,
    platformFee: Number,
    total: Number,
    status: {
        type: String,
        enum:{
            values: ['pending','paid','failed'],
            message: 'Order status not valid!',
            default: 'pending'
        }
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
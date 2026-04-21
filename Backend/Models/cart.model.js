const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    items:[
        {
            coupon:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Coupon'
            },
            quantity:{
                type: Number,
                default: 1
            }
        }
    ]
}, {timestamps: true});

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;
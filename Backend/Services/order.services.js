const Order = require('../Models/order.model');
const Cart = require('../Models/cart.model');
const Coupon = require('../Models/coupon.model');
const mongoose = require('mongoose');

const create = async({user, data}) => {
    let order = null;
    console.log('in service');
    try {
        if(!user) throw { err: 'User not found!', code: 401};

        let purchasedItems = [];
        let subtotal = 0;
        let platformFee = 0;
        let total = 0;

        order = new Order({
            user: user._id,
            items: purchasedItems,
            subtotal,
            platformFee,
            total,
            status: 'pending'

        });

        await order.save();

        // const session = await mongoose.startSession();
        // session.startTransaction();

        for(let item of data.items){
            const coupon = await Coupon.findOneAndUpdate({
                _id: item.coupon._id,
                isPurchased: false
            },{
                isPurchased:true,
                isActive: false,
                customer: user._id
            },{
                new: true,
                // session
            });

            if (!coupon) {
                throw { err: 'One of the coupons is already sold'};
            }

            purchasedItems.push({
                coupon: coupon._id,
                quantity: item.quantity
            });

            subtotal += coupon.price * item.quantity;
        }

        platformFee = subtotal /20;
        total = subtotal + platformFee;

        order.status = 'paid';
        order.items = purchasedItems;
        order.subtotal = subtotal;
        order.platformFee = platformFee;
        order.total = total;

        // order.save({session});
        await order.save();

        if(data.mode === 'cart') await Cart.findOneAndDelete({ user: user._id });
        // await Cart.findOneAndDelete({ user: user._id }, {session});

        // await session.commitTransaction();
        // session.endSession();

        return order;

    } catch (error) {
        console.log(error);

        let purchasedItems = [];
        let subtotal = 0;
        let platformFee = 0;
        let total = 0;

        if(order){
            order.status = 'failed';
            
            await order.save();
            return order;
        }

        throw error;
        
    }
}

const getAll = async ( user ) => {
    try {
        if(!user) throw {err: 'User not found!'};
        const orders = await Order.find({ user: user._id});
        return orders;
    } catch (error) {
        console.log(error);
        throw error;      
    }
} 

module.exports = {
    create,
    getAll
}
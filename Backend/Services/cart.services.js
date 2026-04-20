const Cart = require("../Models/cart.model")

const getCart = async (user) => {
    try {

        if(user){
            const cart = await Cart.findOne({user: user._id});
            return cart;
        }
        throw {err: 'User not found.', code: '401'};
        
    } catch (err) {
        console.log(err);
        throw err;
        
    }
}

const addToCart = async ({ user, couponId}) => {
    try {
        if(user){
            let cart = await Cart.findOne({user: user._id});

            if(cart){
               const index =  cart.items.findIndex((item) => (item.coupon.toString() === couponId));
               if(index > -1){
                cart.items[index].quantity++;
                
               }else{
                cart.items.push({
                    coupon: couponId
                });
                
               }
               await cart.save();
            }
            else{
                cart = await Cart.create({
                    user: user._id,
                    items:[{coupon: couponId}]
                })
            }
            return cart;
        }
        throw {err: 'User not found!', code:401};
    } catch ( error ) {
        console.log(error);
        throw error;
    }
}

const removeFromCart = async({user, couponId}) => {
    try {
        if(!user) throw {err: 'User not found!', code: 401};

        const cart = await Cart.findOne({ user: user._id});
        if(!cart) throw { err: 'No item in your cart', code: 400};
        
        cart.items = cart.items.filter((item)=>{
            return item.coupon.toString() !== couponId;
        });
        await cart.save();
        
        return cart;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateInCart = async({user, couponId, quantity}) => {
    try {
        if(!user) throw { err: 'User not found!', code: 401};

        const cart = await Cart.findOne({ user: user._id});
        if(!cart) throw { err: 'No item in your cart', code: 400};

        const index = cart.items.findIndex( item => (item.coupon.toString() === couponId));

        if(index<0) throw { err: 'Coupon is not in your cart', code: 400};

        cart.items[index].quantity = quantity;

        await cart.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    updateInCart
}
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

module.exports = {
    getCart
}
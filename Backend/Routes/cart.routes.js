const cartControllers = require('../Controllers/cart.controllers');
const authMiddlewares = require('../Middlewares/auth.middlewares');

const cartRouter = (app) => {
    app.get('/cb/v1/api/cart',authMiddlewares.isCustomerLoggedin, cartControllers.getUserCart);
    app.get('/cb/v1/api/cart/coupons/:id', authMiddlewares.isCustomerLoggedin, cartControllers.getUserCartCouponById);
    app.post('/cb/v1/api/cart',authMiddlewares.isCustomerLoggedin, cartControllers.addToUserCart);
    app.delete('/cb/v1/api/cart/coupons/:id', authMiddlewares.isCustomerLoggedin, cartControllers.removeFromUserCart);
    app.put('/cb/v1/api/cart', authMiddlewares.isCustomerLoggedin, cartControllers.updateUserCart);
}

module.exports =  cartRouter;
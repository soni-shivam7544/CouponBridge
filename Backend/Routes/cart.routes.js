const cartControllers = require('../Controllers/cart.controllers');
const authMiddlewares = require('../Middlewares/auth.middlewares');

const cartRouter = (app) => {
    app.get('/cb/v1/api/cart',authMiddlewares.isCustomerLoggedin, cartControllers.getUserCart);
}
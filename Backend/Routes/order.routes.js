const orderControllers = require('../Controllers/order.controllers');
const authMiddlewares = require('../Middlewares/auth.middlewares');

const orderRouter = (app) => {
    app.post('/cb/v1/api/orders', authMiddlewares.isCustomerLoggedin, orderControllers.createOrder);
    app.get('/cb/v1/api/orders', authMiddlewares.isCustomerLoggedin, orderControllers.getAllOrder);
}

module.exports = orderRouter;
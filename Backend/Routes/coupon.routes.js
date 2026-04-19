const couponController = require('../Controllers/coupon.controllers.js');
const authMiddlewares = require('../Middlewares/auth.middlewares.js');

const couponRouter = ( app ) => {
    // Create a new coupon
    app.post('/cb/v1/api/coupons', authMiddlewares.verifyProviderToken, couponController.createCoupon);

    // Search coupons by merchant name or provider name
    app.get('/cb/v1/api/coupons/search', authMiddlewares.verifyCustomerToken ,couponController.searchCoupons);

    // Get all coupons
    app.get('/cb/v1/api/coupons', couponController.getAllCoupons);

    // Get a coupon by Id
    app.get('/cb/v1/api/coupons/:id',authMiddlewares.verifyCustomerToken, couponController.getCouponById);


    // Update a coupon by Id
    app.put('/cb/v1/api/coupons/:id', authMiddlewares.verifyProviderToken, couponController.updateCouponById);

    // Delete a coupon by Id
    app.delete('/cb/v1/api/coupons/:id', authMiddlewares.verifyProviderToken, couponController.destroyCoupon);
    
}

module.exports = couponRouter;
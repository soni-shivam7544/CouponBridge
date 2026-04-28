const couponController = require('../Controllers/coupon.controllers.js');
const authMiddlewares = require('../Middlewares/auth.middlewares.js');

const couponRouter = ( app ) => {
    // Create a new coupon
    app.post('/cb/v1/api/coupons', authMiddlewares.isProviderLoggedin, couponController.createCoupon);

    // Search coupons by merchant name or provider name
    app.get('/cb/v1/api/coupons/search', authMiddlewares.verifyUserToken ,couponController.searchCoupons);

    // Get all coupons
    app.get('/cb/v1/api/coupons', couponController.getAllCoupons);

    // Get purchased coupons
    app.get('/cb/v1/api/coupons/purchased',authMiddlewares.isCustomerLoggedin,couponController.getPurchasedCoupons);

    // Get Active coupons of Provider
    app.get('/cb/v1/api/coupons/active',authMiddlewares.isProviderLoggedin, couponController.getActiveCoupons);
    
    // Get Sold coupons of Provider
    app.get('/cb/v1/api/coupons/sold',authMiddlewares.isProviderLoggedin, couponController.getSoldCoupons);


    // Get a coupon by Id
    app.get('/cb/v1/api/coupons/:id',authMiddlewares.verifyUserToken, couponController.getCouponById);


    // Update a coupon by Id
    app.put('/cb/v1/api/coupons/:id', authMiddlewares.isProviderLoggedin, couponController.updateCouponById);

    // Delete a coupon by Id
    app.delete('/cb/v1/api/coupons/:id', authMiddlewares.isProviderLoggedin, couponController.destroyCoupon);
    
}

module.exports = couponRouter;
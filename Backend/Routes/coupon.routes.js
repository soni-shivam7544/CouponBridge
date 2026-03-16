const couponController = require('../Controllers/coupon.controllers.js');

const couponRouter = ( app ) => {
    // Create a new coupon
    app.post('/cb/v1/api/coupons', couponController.createCoupon);

    // Get all coupons
    app.get('/cb/v1/api/coupons', couponController.getAllCoupons);

    // Get a coupon by Id
    app.get('/cb/v1/api/coupons/:id', couponController.getCouponById);

    // Update a coupon by Id
    app.put('/cb/v1/api/coupons/:id', couponController.updateCouponById);

    // Delete a coupon by Id
    app.delete('/cb/v1/api/coupons/:id', couponController.destroyCoupon);
    
}

module.exports = couponRouter;
const couponController = require('../Controllers/coupon.controllers.js');

const couponRouter = ( app ) => {
    app.post('/coupon', couponController.createCoupon);
}

module.exports = couponRouter;
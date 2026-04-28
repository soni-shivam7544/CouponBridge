const { successResponseBody, errorResponseBody } = require('../Utils/responsebody');
const couponService = require('../Services/coupon.services.js');

// Create a new coupon
const createCoupon = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const response = await couponService.create({ ...data, provider: req.user._id });
        successResponseBody.data = response;
        successResponseBody.message = "The coupon created successfully.";
        res.status(201).json(successResponseBody);
    } catch (error) {
        if(error.err) {
            errorResponseBody.error = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to create the coupon.";
        res.status(500).json(errorResponseBody);
    }
}

// Get all coupons
const getAllCoupons = async (req, res) => {
    try {
        const response = await couponService.getAll();
        successResponseBody.data = response;
        successResponseBody.message = "Coupons fetched successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to fetch coupons.";
        res.status(500).json(errorResponseBody);
    }
}

// Get a coupon by its Id
const getCouponById = async (req, res) => {
    try {
        const response = await couponService.getById({ id:req.params.id, user:req.user});
        successResponseBody.data = response;
        successResponseBody.message = "Coupon fetched successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to fetch the coupon.";
        res.status(500).json(errorResponseBody);
    }
}

// Update a coupon by its Id
const updateCouponById = async (req, res) => {
    try {
        const response = await couponService.updateById(req.params.id, req.body);
        successResponseBody.data = response;
        successResponseBody.message = "Coupon updated successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        console.log(error);
        if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to update the coupon.";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to update the coupon.";
        res.status(500).json(errorResponseBody);
    }
}

// Destroy a coupon by its Id
const destroyCoupon = async (req, res) => {
    try {
        const response = await couponService.deleteById(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "Coupon deleted successfully.";
        res.status(200).json(successResponseBody);

    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to delete the coupon.";
        res.status(500).json(errorResponseBody);
    }
}

const searchCoupons = async (req, res) => {
    try {
        const response = await couponService.searchCoupons({query: req.query, user: req.user});
        successResponseBody.data = response;
        successResponseBody.message = "Coupons fetched successfully.";
        res.status(200).json(successResponseBody);
    } catch(error) {
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to fetch coupons.";
        res.status(500).json(errorResponseBody);
    }
}

const getPurchasedCoupons = async(req, res) => {
    try {
        const response = await couponService.getPurchased(req.user);
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.log(error);
        if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to get purchased coupons";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to get purchased coupons";
        return res.status(error.code).json(errorResponseBody);
        
    }
}

const getActiveCoupons = async(req, res)=>{
    try {
        const response = await couponService.getActives(req.user);
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.log(error);
         if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to get provider's active coupons";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to get provider's active coupons";
        return res.status(error.code).json(errorResponseBody);
    }
}

const getSoldCoupons = async(req, res) => {
    try {
        const response = await couponService.getSolds(req.user);
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.log(error);
         if(error.err) {
            errorResponseBody.error = error.err;
            errorResponseBody.message = "Failed to get provider's sold coupons";
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.error = error;
        errorResponseBody.message = "Failed to get provider's sold coupons";
        return res.status(error.code).json(errorResponseBody);
    }
}

module.exports = {
    createCoupon,
    getAllCoupons,
    getCouponById,
    updateCouponById,
    destroyCoupon,
    searchCoupons,
    getPurchasedCoupons,
    getActiveCoupons,
    getSoldCoupons
}
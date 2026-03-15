const Coupon = require("../Models/coupon.model.js")

const create = async ( couponData ) => {
    try {
        const coupon =  await Coupon.create(couponData);
        return coupon;
    }catch (error){
        console.log(error);
        if( error.name === "ValidationError" ){
            console.log("Validation Error :)))))");
            let err = {};
            Object.keys(error.errors).forEach( (key) => {
                err[key] = error.errors[key].message;
            });
            throw { err: err, code: 400};
        }
        throw error;
    }
}

const getAll = async () => {
    try {
        const coupons = await Coupon.find();
        return coupons;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getById = async (id) => {
    try {
        const coupon = await Coupon.findById(id);
        return coupon;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateById = async (id, updateData) => {
    try {
        const updatedCoupon = await Coupon.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        return updatedCoupon;
    } catch (error) {
        console.log(error);
        if( error.name === "ValidationError" ){
            let err = {};
            Object.keys(error.errors).forEach ( key => {
                err[key] = error.errors[key].message;
            });
            throw { err, code: 400 };
        }
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById
}
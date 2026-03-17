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
        const coupons = await Coupon.find().populate('providerId', 'providerName providerEmail').populate('customerId', 'customerName customerEmail');
        return coupons;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getById = async (id) => {
    try {
        const coupon = await Coupon.findById(id).populate('providerId', 'providerName providerEmail').populate('customerId', 'customerName customerEmail');
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

const deleteById = async (id) => {
    try {
        const response = await Coupon.findByIdAndDelete(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const searchCoupons = async (queryData) => {
    try {
        let { query } = queryData;
        query = query.toLowerCase().trim();
        
        let coupons = await Coupon.find({}).populate('providerId', 'providerName');
        coupons = coupons.filter( coupon => {
            return query.includes(coupon.merchant.toLowerCase().trim()) || query.includes(coupon.providerId.providerName.toLowerCase().trim());
        });
        return coupons;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    searchCoupons
}
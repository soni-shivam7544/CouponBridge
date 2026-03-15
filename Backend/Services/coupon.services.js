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

module.exports = {
    create
}
const Coupon = require("../Models/coupon.model.js");
const Customer = require("../Models/customer.model.js");

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
        const coupons = await Coupon.find().populate('provider', 'name email').populate('customer', 'name email');
        return coupons;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getById = async ({id,user}) => {
    try {
        let coupon = await Coupon.findById(id).populate('provider', 'name email').populate('customer', 'name email');
        
        if(user){
            const savedUser = await Customer.findById(user._id);
            if(savedUser){
                const savedIds = user.savedCoupons.map( id => id.toString());
                const updatedCoupon = {
                    ...coupon._doc,
                    isSaved: savedIds.includes(coupon._id.toString())
                };
                coupon = updatedCoupon;
            }
                
        }
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

const searchCoupons = async ({query,user}) => {
    try {
        let { search, sort, isVerified, category } = query;
        search = search.toLowerCase().trim();
        
        let sortOption = '';
        switch(sort){
            case 'Newest':
                sortOption = { createdAt : -1};
                break;
            case 'Oldest':
                sortOption = { createdAt : 1 };
                break;
            case 'Price: Low To High':
                sortOption = { price: 1 };
                break;
            case 'Price: High To Low':
                sortOption = { price: -1 };
                break;
            default:
                sortOption = { createdAt : -1 };
        }
        
        let coupons = await Coupon.find({isActive: true}).sort(sortOption).populate('provider', 'name email');
        
        if(user){
            const savedUser = await Customer.findById(user._id);
            if(savedUser){
                const savedIds = user.savedCoupons.map( id => id.toString());
                const updatedCoupons = coupons.map(coupon => ({
                    ...coupon._doc,
                    isSaved: savedIds.includes(coupon._id.toString())
                }));
                coupons = updatedCoupons;
            }
            coupons = coupons.filter(coupon => coupon.provider._id.toString()!== user._id.toString());
                
        }
        
        if(isVerified === "true"){
            coupons = coupons.filter(coupon => coupon.isVerified === true);
        }

        if(category !== "All Categories"){
            coupons = coupons.filter(coupon => coupon.category === category);
        }

        if(search === '')return coupons;

        coupons = coupons.filter( coupon => {
            return coupon.brand.toLowerCase().trim().includes(search) || coupon.provider.name.toLowerCase().trim().includes(search) || coupon.category.toLowerCase().trim().includes(search);
        });
        return coupons;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getPurchased = async(user) => {
    try {
        if(!user) throw {err: 'User no found', code: 401};

        const coupons = await Coupon.find( { customer: user._id });
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
    searchCoupons,
    getPurchased
}
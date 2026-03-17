const Coupon = require('../Models/coupon.model.js');
const Customer = require('../Models/customer.model.js');

const create = async (data) => {
    try {
        const customer = await Customer.create(data);
        return customer;
    } catch(error) {
        console.log(error);
        if(error.name === 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach( key => {
                err[key] = error.errors[key].message;
            });
            throw { err, code: 400 };
        }
        throw error;
    }
}

const getAll = async () => {
    try {
        const customers = await Customer.find();
        return customers;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const getById = async (id) => {
    try {
        const customer = await Customer.findById(id);
        return customer;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const update = async (id, data) => {
    try {
        const customer = await Customer.findByIdAndUpdate(id,data, {new:true, runValidators: true});
        return customer;
    }catch (error) {
        console.log(error);
        if(error.name === 'ValidationError' ) {
            let err = {};
            Object.keys(error.errors).forEach( key => {
                err[key] = error.errors[key].message;
            });
            throw { err, code: 400 };
        }
        throw error;
    }
}

const destroy = async (id) => {
    try {
        const customer = await Customer.findByIdAndDelete(id);
        return customer;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const getAllCoupons = async (customerId) => {
    try {
        const coupons = await Coupon.find( { customerId }).populate('providerId', 'providerName providerEmail');
        return coupons;
    } catch(error) {
        console.log(error);
        throw error;
    }
}
module.exports = {
    create,
    getAll,
    getById,
    destroy,
    update,
    getAllCoupons
}
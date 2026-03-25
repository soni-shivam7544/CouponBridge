const Provider = require('../Models/provider.model.js');
const Coupons = require('../Models/coupon.model.js');
const bcrypt = require('bcrypt');

const create = async (data) => {
    try {
        const { name, email, password } = data;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const provider = await Provider.create({ name, email, password: hashedPassword });
        
        return provider;
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
        const providers = await Provider.find();
        return providers;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const getOne = async (id) => {
    try {
        const provider = await Provider.findById(id);
        return provider;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const updateProvider = async (id, data) => {
    try {
        const provider = await Provider.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        return provider;
    } catch(error) {
        console.log(error);
        if(error.name === 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach ( key => {
                err[key] = error.errors[key].message;
            });
            throw { err, code: 400 };
        }
        throw error;
    }
}

const destroy = async (id) => {
    try {
        const provider = await Provider.findByIdAndDelete(id);
        return provider;
    } catch(error) {
        console.log(error);
        throw error;
    }
} 

const getAllCoupons = async (providerId) => {
    try {
        const coupons = await Coupons.find({ providerId}).populate('customer', 'name email');
        return coupons;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    updateProvider,
    destroy,
    getAllCoupons
}
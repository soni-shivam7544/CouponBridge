const Provider = require('../Models/provider.model.js');
const Coupons = require('../Models/coupon.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const create = async (data) => {
    try {
        const { name, email, password } = data;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const provider = await Provider.create({ name, email, password: hashedPassword });
        
        return provider;
    } catch(error) {
        console.log(error);
        if(error.code === 11000){
            throw {
                err: "Email already exists!",
                code: 400
            }
        }
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

const signin = async (data) => {
    try {

        const { email, password } = data;

        const user = await Provider.findOne( {email});
        if(!user){
            throw { err: "Email not found!", code: 401 };
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw { err: "Invalid Credentials. Password Incorrect.", code: 401};
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );

        return (
            {
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                }, 
                token
            }
        )

    } catch(error){
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
    signin,
    getAll,
    getOne,
    updateProvider,
    destroy,
    getAllCoupons
}
const Coupon = require('../Models/coupon.model.js');
const Customer = require('../Models/customer.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const create = async (data) => {
    try {
        const { customerName, customerEmail, customerPassword } = data;

        const hashedPassword = await bcrypt.hash(customerPassword, 10);

        const customer = await Customer.create({ customerName, customerEmail, customerPassword: hashedPassword });
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

const login = async (data) => {
    try {

        const { email, password } = data;

        const user = await Customer.findOne( { customerEmail: email });

        if(!user) throw { err: "User not found", code: 400};

        const isMatch = await bcrypt.compare(password, user.customerPassword);

        if(!isMatch) throw { err: "Invalid credentials", code: 400 };

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return { user: {
            _id: user._id,
            name: user.customerName,
            email: user.customerEmail
        }, token} ;

    } catch (error) {
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
    login,
    getAll,
    getById,
    destroy,
    update,
    getAllCoupons
}
const Coupon = require('../Models/coupon.model.js');
const Customer = require('../Models/customer.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const create = async (data) => {
    try {
        const { name, email, password } = data;

        const hashedPassword = await bcrypt.hash(password, 10);

        const customer = await Customer.create({ name, email, password: hashedPassword });
        return customer;
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

const login = async (data) => {
    try {

        const { email, password } = data;

        const user = await Customer.findOne( { email });

        if(!user) throw { err: "Email Not Found!", code: 400};

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) throw { err: "Invalid Credentials. Password Incorrect.", code: 400 };

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return { user: {
            _id: user._id,
            name: user.name,
            email: user.email
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
        const coupons = await Coupon.find( { customerId }).populate('provider', 'name email');
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
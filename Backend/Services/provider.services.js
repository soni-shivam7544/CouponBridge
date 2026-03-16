const Provider = require('../Models/provider.model.js');

const create = async (data) => {
    try {
        const provider = await Provider.create(data);
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
        const providers = await Provider.find().populate('couponIds');
        return providers;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const getOne = async (id) => {
    try {
        const provider = await Provider.findById(id).populate('couponIds');
        return provider;
    } catch(error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    create,
    getAll,
    getOne
}
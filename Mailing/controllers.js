const services = require('./services');

const composeNewMail = async (req, res) => {
    try{
        const response = await services.sendMail(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: "Mail sent successfully."
        })
    }catch(error) {
        console.log(error);
        if(error.err){
            return res.status(error.code).json({
                success: false,
                data:{},
                err: error.err,
                message: "Mail could not be send."
            })
        }
        return res.status(500).json({
            success: false,
            data:{},
            err: error.err,
            message: "Something went wrong."
        })
    }
}

module.exports = {
    composeNewMail
}
const { successResponseBody, errorResponseBody } = require("../Utils/responsebody")

const uploadImage = async(req, res) => {
    try {
        successResponseBody.data = {
            imageUrl: req.file.path,
            public_id: req.file.filename
        };
        return res.status(200).json(successResponseBody);
    } catch(err) {
        console.log(err);
        errorResponseBody.err = 'Upload Failed.';
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    uploadImage
}
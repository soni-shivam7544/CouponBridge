const { successResponseBody, errorResponseBody } = require("../Utils/responsebody")

const uploadImage = async(req, res) => {
    try {
        console.log('File: ', req.file);
        successResponseBody.data = {
            imageUrl: req.file.path,
            public_id: req.file.filename
        };
        return res.status(200).json(successResponseBody);
    } catch(err) {
        console.log("Real err: ", err);
        errorResponseBody.err = 'Image Upload Failed.';
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    uploadImage
}
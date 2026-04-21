const successResponseBody = {
    success: true,
    data: {},
    error: {},
    message: "The Request Processed Successfully."
}

const errorResponseBody = {
    success: false,
    data: {},
    error: {},
    message: "Something Went Wrong."
}

module.exports = {
    successResponseBody,
    errorResponseBody
}
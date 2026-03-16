const successResponseBody = {
    success: true,
    data: {},
    error: {},
    message: "The request processed successfully."
}

const errorResponseBody = {
    success: false,
    data: {},
    error: {},
    message: "Something went wrong."
}

module.exports = {
    successResponseBody,
    errorResponseBody
}
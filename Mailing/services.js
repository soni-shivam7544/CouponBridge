const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ''
    }
});

const sendMail = () => {

}

module.exports = {
    sendMail
}
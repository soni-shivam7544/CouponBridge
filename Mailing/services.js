const nodemailer = require('nodemailer');

const sendMail = async( mailingData ) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass:process.env.USER_PASS
        }
    });

    const mailOptions = {
        from: `"CouponBridge" <${process.env.USER_EMAIL}>`,
        to: mailingData.to,
        subject: mailingData.subject,
        html: mailingData.html
    }

    const info = await transporter.sendMail(mailOptions);
    return info;
}

module.exports = {
    sendMail
}
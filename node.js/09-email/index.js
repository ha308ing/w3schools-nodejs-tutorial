const nodemailer = require("nodemailer");
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD, EMAIL_RECIPIENT } = process.env;

const transporter = nodemailer.createTransport({
    // service: "gmail",
    service: EMAIL_SERVICE,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
    },
});

const mailOptions = {
    from: EMAIL_USER,
    // provide multiple in a string with commas
    to: `${EMAIL_RECIPIENT}`,
    subject: "Sending email using node.js",
    html: "<h1>Hello!</h1>",
    // text: "Hello!",
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.error(err);
    } else {
        console.log("Email sent: " + info.response);
    }
});

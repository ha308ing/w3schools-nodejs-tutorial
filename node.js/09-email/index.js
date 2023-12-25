const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "<service: yandex, gmail>",
    auth: {
        user: "<login>",
        pass: "<password>",
    },
});

const mailOptions = {
    from: "<from-email>",
    to: "<to-email-1>, <to-email-2>",
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

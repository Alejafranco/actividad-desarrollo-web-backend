const nodemailer = require("nodemailer");

class NodemailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'mafa1008@gmail.com', // generated ethereal user
                pass: 'livonsjuoqeincxm', // generated ethereal password
            },
        });
    }
    getTransporter() {
        return this.transporter;
    }
}

module.exports = NodemailService;
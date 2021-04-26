const nodemailer = require("nodemailer");

class NodemailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'testeobackend4569852@gmail.com', // generated ethereal user
                pass: 'pbqndiuprskwsdpc', // generated ethereal password
            },
        });
    }
    getTransporter() {
        return this.transporter;
    }
}

module.exports = NodemailService;
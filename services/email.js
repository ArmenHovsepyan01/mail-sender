import nodemailer from 'nodemailer';

import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
    }
});

const createMailConfig = (to, subject, html) => {
    return {
        from: process.env.MAIL,
        to,
        subject,
        html
    };
};

async function sendMailToCustomer(email) {
    const customerHtml = `<h1>Congrats you successfully apply to Sebastatsi college</h1>`;
    const html = `<h1>${email} apply to Sebastatsi college.</h1>`;

    const customerMailOptions = createMailConfig(email, 'Apply for College', customerHtml);
    const mailOptions = createMailConfig(process.env.MAIL, 'Applying for College', html);

    try {
        await transporter.sendMail(customerMailOptions);
        await transporter.sendMail(mailOptions);

        return `Mails sent successfully.`;
    } catch (error) {
        throw new Error(`Failed to send registration confirmation email::${error}`);
    }
}

export default sendMailToCustomer;
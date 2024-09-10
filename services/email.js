import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
import {renderHtml} from "../helpers/renderHtml.js";
import fetchImageAsBuffer from "../helpers/fetchImageAsBuffer.js";

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

const createMailConfig = (to, subject, html, file = {}) => {
    const config =  {
        from: process.env.MAIL,
        to,
        subject,
        html
    };

    if(Object.values(file).length) {
        config.attachments = [
            file
        ];
    }

    return config;
};

async function sendMailToCustomer(data, file = {}) {
    const {email, name} = data;
    const logo = `${process.env.IMAGE_URL}/logo.jpg`;
    const customerHtml = await renderHtml('applicant.hbs', {name});
    const html =  await renderHtml('owner.hbs', data);

    const logoBuffer = await fetchImageAsBuffer(logo);

    const customerMailOptions = createMailConfig(email, 'Apply for College', customerHtml, {
        filename: 'Logo.png',
        content: logoBuffer,
        cid: 'logo'
    });

    const mailOptions = createMailConfig(process.env.MAIL, 'Applying for College', html, file);

    try {
        await transporter.sendMail(customerMailOptions);
        await transporter.sendMail(mailOptions);

        return `Appeal mail sent successfully.`;
    } catch (error) {
        throw new Error(`Failed to send registration confirmation email::${error}`);
    }
}

export default sendMailToCustomer;
import validateMail from "../../validators/mail.validator.js";
import sendMailToCustomer from "../../services/email.js";
import * as fs from "node:fs";
import getFileExtension from "../../helpers/getFileExtension.js";

const sendMail = async (req, res) => {
    try {
        const body = Object.assign({}, req.body);

        if(!req?.file) {
            return res.status(400).send({
                message: 'File is required.'
            })
        }

        const {error} = validateMail(body);

        if (error) {
            return res.status(400).send({
                message: error.details[0].message,
            });
        }

        const fileExtension = getFileExtension(req.file.mimetype);

        if(fileExtension?.error){
            return res.status(400).send({
                message: fileExtension.error.message,
            });
        }

        const file = {
            filename: `attachment.${fileExtension}`,
            content: req.file.buffer,
        }

        const sendMailResponse = await sendMailToCustomer(body, file);

        return res.status(200).json({
            message: sendMailResponse
        });
    } catch (e) {
        console.log(e);
        console.error(`Error in sendMail ${e.message}`);
    }
}

export default sendMail;
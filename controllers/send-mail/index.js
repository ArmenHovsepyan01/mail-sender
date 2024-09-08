import validateMail from "../../validators/mail.validator.js";
import sendMailToCustomer from "../../services/email.js";

const sendMail = async (req, res) => {
    try {
        const {body} = req;
        const {error} = validateMail(body);

        if (error) {
            return res.status(400).send({
                message: error.details[0].message,
            });
        }

        const sendMailResponse = await sendMailToCustomer(body.email);

        return res.status(200).json({
            message: sendMailResponse
        });
    } catch (e) {
        console.log(e);
        console.error(`Error in sendMail ${e.message}`);
    }
}

export default sendMail;
import Joi from 'joi';

const validateMail = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string.',
            'string.email': 'Email must be a valid email address.',
            'string.empty': 'Email cannot be empty.',
            'any.required': 'Email is required.'
        })
    });

    return schema.validate(data);
}

export default validateMail;
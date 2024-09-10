import Joi from 'joi';

const validateMail = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string.',
            'string.email': 'Email must be a valid email address.',
            'string.empty': 'Email cannot be empty.',
            'any.required': 'Email is required.'
        }),
        phone: Joi.string()
            .pattern(/^\+374(10|11|33|41|43|44|46|55|77|91|93|94|95|96|98|99|97)\d{6}$/)
            .message('Phone number must be in the format +374XXXXXXXXXX, where X is a digit and the code should be valid.')
            .required()
            .messages({
                'string.pattern.base': 'Phone number must be in the format +374XXXXXXXXXX, where X is a digit and the code should be valid.',
                'string.empty': 'Phone number is required.',
                'any.required': 'Phone number is required.'
            }),
        name: Joi.string().required().messages({
            'string.base': 'Name must be a string.',
            'string.empty': 'Name cannot be empty.',
            'any.required': 'Name is required.'
        }),
        faculty: Joi.string().required().messages({
            'string.base': 'Faculty must be a string.',
            'string.empty': 'Faculty cannot be empty.',
            'any.required': 'Faculty is required.'
        }),
    });

    return schema.validate(data);
}

export default validateMail;
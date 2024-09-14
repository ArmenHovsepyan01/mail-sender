import Joi from 'joi';

const validateSupportQuestion = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string.',
            'string.email': 'Email must be a valid email address.',
            'string.empty': 'Email cannot be empty.',
            'any.required': 'Email is required.'
        }),
        question: Joi.string().required().messages({
            'string.base': 'Question must be a string.',
            'string.empty': "Please write your question it can't be empty.",
            'any.required': 'Question is required.'
        }),
    });

    return schema.validate(data);
}

export default validateSupportQuestion;
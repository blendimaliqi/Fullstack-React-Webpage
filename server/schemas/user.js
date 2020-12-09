import Joi from 'joi';

const userSchema = {
  email: Joi.string().email().required().messages({
    'any.required': 'Epost må fylles ut',
    'string.email': 'Ikke riktig epost format',
    'string.empty': 'Fyll ut epost',
  }),

    password: Joi.string().min(3).required().messages({
        'any.required': 'Passord må fylles ut',
        'string.min': 'Må bestå av minst 3 tall eller bokstaver',
        'string.empty': 'Fyll ut passord'
    }),

};

export const registerSchema = Joi.object()
  .keys({
    name: Joi.string().required().messages({
      'string.empty': 'Navn feltet kan ikke være tomt',
    }),
    ...userSchema,
    /*password_confirmation: Joi.number().ref('password').min(1).messages({
        'number.min': 'Passord må bestå av minst 1 tall',
    }),*/
    role: Joi.string().required(),
  })
  .options({ abortEarly: false });

export const loginSchema = Joi.object()
  .keys({
    ...userSchema,
  })
  .options({ abortEarly: false });

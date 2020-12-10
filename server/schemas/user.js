import Joi from 'joi';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Valideringsskjema som brukes av mellomvare for å validere email
 * og passord til bruker. Email: sjekker at den ikke er tom, at det
 * er i epost format. Passord: sjekker at det ikke er tomt og at det
 * inneholder minst 3 karakterer.
 */
const userSchema = {
  email: Joi.string().email().required().messages({
    'any.required': 'Epost må fylles ut',
    'string.email': 'Ikke riktig epost format',
    'string.empty': 'Fyll ut epost',
  }),

  password: Joi.string().min(3).required().messages({
    'any.required': 'Passord må fylles ut',
    'string.min': 'Må bestå av minst 3 tall eller bokstaver',
    'string.empty': 'Fyll ut passord',
  }),
};

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Valideringsskjema som brukes av mellomvare ved registrering av bruker.
 * Sjekker at navn ikke er tomt og bruker userSchema sine valideringer i
 * tillegg.
 */
export const registerSchema = Joi.object()
  .keys({
    name: Joi.string().required().messages({
      'string.empty': 'Navn feltet kan ikke være tomt',
    }),
    ...userSchema,
    role: Joi.string().required(),
  })
  .options({ abortEarly: false });

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Valideringsskjema som brukes av mellomvare ved innlogging.
 * Benytter seg av userSchema valideringene.
 */
export const loginSchema = Joi.object()
  .keys({
    ...userSchema,
  })
  .options({ abortEarly: false });

import { validationError } from '../utils/validation.js';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Mellomvare som brukes for validering ved hjelp av Joi
 * i backend
 * @param {Validerngs} schema - som innehar de ulike valideringsjekkene
 */
export const validateFields = (schema) => async (req, res, next) => {
  const validationErrors = await validationError(schema, req.body, res);

  if (!validationErrors) {
    next();
  }
};

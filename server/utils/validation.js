/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Metode som kjører den faktisk validering basert på et validerings-
 * skjema og  input, benyttes i metoden validationError som igjen
 * benyttes i mellomvaren
 * @param {Validerings} schema - som benyttes for validering
 * @param {Valider} input - input som skal valideres
 */
export const validateInput = async (schema, input) => {
  try {
    return await schema.validateAsync({ ...input });
  } catch (error) {
    return error;
  }
};

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Funksjon som benyttes av mellomvaren for å kjøre validering
 * basert på et skjema og input, og returnerer 400 (bad request)
 * med valideringsfeilene hvis det er noen ellers bare false
 * (ingen feil)
 * @param {Validerings} schema - som benyttes for validering
 * @param {Valider} input - input som skal valideres
 * @param {ValidationMessages} res - resultat av validering
 */
export const validationError = async (schema, input, res) => {
  const validation = await validateInput(schema, input, res);
  // isJoi = Samme som å si er det noen feil
  if (
    validation.isJoi &&
    Array.isArray(validation.details) &&
    validation.details.length > 0
  ) {
    const validationMessages = validation.details.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return res.status(400).json({ message: validationMessages });
  }
  return false;
};

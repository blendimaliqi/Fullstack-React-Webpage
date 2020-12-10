/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Higher order funksjon som brukes for å håndtere
 * promises
 */
export default (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next);
};

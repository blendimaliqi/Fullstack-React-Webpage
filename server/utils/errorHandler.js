/* GJENBRUKT FRA FORELESERS EKSEMPEL
Klasse som brukes for errorhåndtering,
tar i mot en melding og en statuskode
EKS: new ErrorHandler('error melding', 400) */
export default class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

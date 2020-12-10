import jwt from 'jsonwebtoken';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Mellomvare som brukes for å sjekke at bruker har en jwt token, om ikke
 * kast en 401(Unauthorized) med errormelding. Hvis bruker har en token,
 * verifiser, hente bruker baser på dekodet id. Hvis bruker ikke finnes
 * kast en 404(not found). Ellers sett request bruker til uthentet bruker
 * og gå videre.
 */
export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(
      new ErrorHandler('Du er ikke logget inn eller mangler rettigheter.', 401)
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userService.getUserById(decoded.id);

  if (!user) {
    return next(new ErrorHandler('Finner ikke brukeren', 404));
  }

  req.user = user;
  next();
});

/** GJENBRUK FRA FORELESERS EKSEMPLER OG UTVIDET MED EKSTRA ROLLESJEKK
 * Mellomvare som brukes for å sjekke at bruker er autorisert, sjekker
 * om brukers rolle samsvarer med innsendt rolle, om ikke kast en 403(forbidden)
 * med errormelding. Sjekk så om bruker er admin eller superadmin for så å gå videre.
 * @param {User.role} - Rollesjekke basert på innsendte rolle/roller
 */
export const isAuthorized = ([...roles]) => (req, res, next) => {
  console.log(req.user.role);
  if (!roles.includes(req.user.role)) {
    return next(new ErrorHandler(`${req.user.role}`, 403));
  }
  if (req.user.role === 'admin' || req.user.role === 'superadmin') {
    next();
  }
};

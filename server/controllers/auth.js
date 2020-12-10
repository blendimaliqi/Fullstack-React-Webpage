import jwt from 'jsonwebtoken';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendToken } from '../utils/jwtToken.js';
import { sendMail } from '../utils/sendEmail.js';

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API controller funksjon for registrering av bruker. Håndterer promises
 * via mellomvare. Lager bruker baser på request body, sender velkomst mail
 * til den nye brukern og sender med token.
 */
export const register = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);

  try {
    await sendMail({
      email: user.email,
      subject: 'Velkommen som bruker',
      message: `Du har fått en ny brukerkonto med epost: ${user.email}`,
    });
  } catch (error) {
    // Logg dette ordentlig
    console.log(error);
  }

  sendToken(user, res);
});

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API controller funksjon for å logge inn. Håndterer promises
 * via mellomvare. Sjekker om bode inneholder email og passord,
 * om ikke kast en 400 (bad request) med error melding. Om det
 * er sendt med hent bruker via email, sjekke om bruker finnes
 * om ikke kast 400(bad request) med error melding. Om den finnes
 * sjekk om passordet er valid om ikke kast en 400(bad request) med
 * error melding. Om det matcher login og send med token.
 */
export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Fyll ut riktig epost og passord', 400));
  }

  const user = await userService.getUserByEmail({ email }, true);

  if (!user) {
    return next(new ErrorHandler('Fyll ut riktig epost og passord', 400));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Fyll ut riktig epost og passord', 400));
  }

  sendToken(user, res);
});

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API controller funksjon for å logge ut. Håndterer promises
 * via mellomvare. Terminer token til innlogget bruker og
 * kast en 200 (ok) sammen med melding om at man er logget ut.
 */
export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: 'Logget ut',
  });
});

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API controller funksjon for å hente innlogget bruker. Håndterer promises
 * via mellomvare. Hent bruker med brukers id, om den ikke er tilstede
 * kast en 404(not found) ellers kast en 200 (OK) sammen med bruker.
 */
export const currentUser = catchAsyncErrors(async (req, res, next) => {
  // const { id } = req.user;
  // const user = await userService.getUserById(id);

  const user = await userService.getUserById(req.user.id);

  console.log('USER I CURRENT: ', user);
  // const user = await userService.getUserById(req.params);
  /* let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userService.getUserById(decoded.id); */

  if (!user) {
    return next(new ErrorHandler('Finner ikke brukeren', 404));
  }
  res.status(200).json({
    success: true,
    data: user,
    message: `Velykket innlogging. Du er logget inn som ${user.email}`,
  });
});

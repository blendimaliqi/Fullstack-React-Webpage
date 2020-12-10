import jwt from 'jsonwebtoken';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendMail } from '../utils/sendEmail.js';
import { sendMailAdmin } from '../utils/sendEmailAdmin.js';
import { mailService, userService } from '../services/index.js';

/** Linje 18-21, 27-29 er GJENBRUK FRA FORELESERS EKSEMPLER
 * API controller funksjon for å sende mail til bruker. Håndterer promises via
 * mellomvare. Hvis bruker er innlogget, bruker vi token til bruker for å hente ut
 * brukerinfo  for å sende bekreftelsesmail til bruker ellers bruker vi informasjon
 * fra request for å sende bekreftelsesmail til hendvender. Til sist last opp kopi av
 * mail til database.
 */
export const sendUserMail = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  try {
    if (token?.undefined) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await userService.getUserById(decoded.id);

      await sendMail({
        from: `${process.env.EMAIL_FROM}`,
        email: user.email,
        subject: 'Takk for hendvendelsen!',
        message: `Hei ${user.name}, vi har motatt din epost og jobber med å svare deg tilbake snarest mulig.
                    Under finner du kopi av din hendvendelse.
                    Vennlig hilsen,
                    LG Rør AS. 

                    Kopi av mailen du sendte: 

                    ${req.body.question}

                    `,
      });

      res.json(200, {
        success: true,
        message: `Hendvendelse motatt av LGrør, bekreftelse sendt til ${req.body.email}`,
      });
    } else {
      await sendMail({
        from: `${process.env.EMAIL_FROM}`,
        email: req.body.email,
        subject: 'Takk for hendvendelsen!',
        message: `Hei ${req.body.name}, vi har motatt din epost og jobber med å svare deg tilbake snarest mulig.
                    Under finner du kopi av din hendvendelse.
                    Vennlig hilsen,
                    LG Rør AS.

                    Kopi av mailen du sendte: 

                    ${req.body.question}
                    `,
      });

      res.json(200, {
        success: true,
        message: `Hendvendelse motatt av LGrør, bekreftelse sendt til ${req.body.email}`,
      });
    }
  } catch (error) {
    console.log(error);
  }

  // Sender hendvendelsen til databasen
  try {
    await mailService.createMail(req.body);
  } catch (error) {
    console.log(error);
  }
});

/** Linje 90-93 og 96-97 er GJENBRUK FRA FORELESERS EKSEMPLER
 * API controller funksjon for å sende kopi til admin, håndterer promises via
 * mellomvare. Også her brukes token for å hente ut brukerinformasjon fra innlogget
 * hendvender. Dette var måten vi satt det opp for å kunne sende kopi til admin.
 */
export const sendAdminMail = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decoded.id);
    await sendMailAdmin({
      from: `${user.email}`,
      email: `${user.email}`,
      subject: `Ny mail fra ${user.name}`,
      message: `Du har fått en ny henvendelse fra ${user.name} med epost: ${user.email}.

                Kopi av mailen:

                ${req.body.question}

                `,
    });

    res.json(200, {
      success: true,
      message: `Du har motatt ny mail fra  ${req.body.name}`,
    });
  } catch (error) {
    console.log(error);
  }
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å hente mail basert på id. Håndterer promises
 * via mellomvare. Hvis mail ikke finnes kast en 404 (not found) med error melding,
 * ellers kast en 200 (OK) sammen med hentet mail.
 */
export const get = catchAsyncErrors(async (req, res, next) => {
  const mail = await mailService.getMailById(req.params.id);
  if (!mail) {
    return next(new ErrorHandler(`Finner ikke mail`, 404));
  }
  res.status(200).json(mail);
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å liste ut mails. Håndterer promises
 * via mellomvare. Sender med en request query fordi vi benytter paginering
 * i inbox for en mer oversiktlig visning av mailer. Kast en 200 (OK) sammen
 * med alle mailene.
 */
export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await mailService.listMails(req.query);
  // console.log("RESULT LOL: ", result)
  // const userData = await mailService.listMails();
  res.status(200).json({
    success: true,
    data: result,
  });
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å lage mail. Håndterer promises
 * via mellomvare. Sender med body basert på Mail modellen, kast en
 * 201 (created) sammen med resultatet
 */
export const create = catchAsyncErrors(async (req, res, next) => {
  const mail = await mailService.createMail(req.body);
  res.status(201).json(mail);
});

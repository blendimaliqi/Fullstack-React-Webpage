import jwt from 'jsonwebtoken';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendMail } from '../utils/sendEmail.js';
import { sendMailAdmin } from '../utils/sendEmailAdmin.js';
import { mailService, userService } from '../services/index.js';

export const sendUserMail = catchAsyncErrors(async (req, res, next) => {
  // console.log("SERVERSIDE REQ.BODY: " ,req);

  let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  // console.log("USER: i server: ", user);

  // Sender bekreftelse til kunden om at vi har mottatt mailen
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
        message: `Mailen ble sendt til bruker ${user.name}`,
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
        message: `Mailen ble sendt til bruker ${req.body.name}`,
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

export const get = catchAsyncErrors(async (req, res, next) => {
  const mail = await mailService.getMailById(req.params.id);
  if (!mail) {
    return next(new ErrorHandler(`Finner ikke mail`, 404));
  }
  res.status(200).json(mail);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await mailService.listMails(req.query);
  // console.log("RESULT LOL: ", result)
  // const userData = await mailService.listMails();
  res.status(200).json({
    success: true,
    data: result,
  });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const mail = await mailService.createMail(req.body);
  res.status(201).json(mail);
});

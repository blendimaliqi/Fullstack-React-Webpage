import jwt from 'jsonwebtoken';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendEmail.js';
import {mailService, userService} from '../services/index.js';

export const sendUserMail = catchAsyncErrors(async (req, res, next) => {

    //console.log("SERVERSIDE REQ.BODY: " ,req);

    let token;
    if (req.cookies?.token) {
      token = req.cookies.token;
    }
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decoded.id);

    console.log("USER: i server: ", user);

    //Sender bekreftelse til kunden om at vi har mottatt mailen 
    try {
        await sendMail({
            from: `${process.env.EMAIL_FROM}`,
            email: user.email,
            subject: 'Takk for hendvendelsen!',
            message: `Hei ${user.name}, vi har motatt din epost og jobber med å svare deg tilbake snarest mulig.
            Vennlig hilsen,
            LG Rør AS.
            `,
          });

          res.json(200, ({
              success: true,
              message: `Mailen ble sendt til bruker ${user.name}`,
          }));
    } catch (error) {
        console.log(error);
    }

    //Sender hendvendelsen til databasen
    try {
        await mailService.createMail(req.body);
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
    const result = await mailService.listMails();
    res.status(200).json(result);
});
    
export const create = catchAsyncErrors(async (req, res, next) => {
    const mail = await mailService.createMail(req.body);
    res.status(201).json(mail);
});
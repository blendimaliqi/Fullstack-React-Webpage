import jwt from 'jsonwebtoken';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendEmail.js';
import { currentUser } from './auth.js';
import {userService} from '../services/index.js';

export const sendUserMail = catchAsyncErrors(async (req, res, next) => {

    //console.log("SERVERSIDE REQ.BODY: " ,req);

    let token;
    if (req.cookies?.token) {
      token = req.cookies.token;
    }
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decoded.id);

    console.log("USER: i server: ", user);

    try {
        await sendMail({
            from: `${process.env.EMAIL_FROM}`,
            email: user.email,
            subject: 'Takk for hendvendelsen!',
            message: `Hei, vi har motatt din epost og jobber med å svare deg tilbake snarest mulig.
            Vennlig hilsen,
            LG Rør AS.
            `,
          });

          res.json(200, ({
              success: true,
              message: 'Mailen ble sendt til bruker',
          }));
    } catch (error) {
        console.log(error);
    }
});
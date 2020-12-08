import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';
import connectDatabase from './config/db.js';
import event from './routes/event.js';
import user from './routes/user.js';
import article from './routes/article.js';
import category from './routes/category.js';
import auth from './routes/auth.js';
import author from './routes/author.js';
import image from './routes/image.js';
import contact from './routes/contact.js';

import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';
import csrf from 'csurf';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';


const app = express();

//legger inn ekstra headers for økt sikkerhet
app.use(helmet());
//Mongosanitize: Saniteter innholdet for å finne NOsql / injections
app.use(mongoSanitize());
//Renser appen ved å blant annet fjerne script tags for at folk ikke skal kunne legge inn script i post kall
app.use(xssClean());
//parameter polution for å hindre NOsql feil.
app.use(hpp());

// CSRF: Windowms: hvor mange request pr minutt vi skal godkjenne. sier at vi godkjenner 10 requests pr minutt. Max 100 request fra samme ip uavehngig av tidsintervall
const limiter  = rateLimit({
  windowMs: 10* 60* 1000,
  max: 100,
});

//CSRF
app.use(limiter);



if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};

app.use(express.json());
app.use(express.static('./public'));

//Vil få cors feil hvis koden blir kalt fra andre URL
app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    //får lov til å hente cookies med credentials true
    credentials: true,
  })
);

app.use(cookieParser());

/**
 * CSURF (må brukes etter cookieparser). Vi trenger cookie parser for å få 
 * cookie ut fra CSRF som bruker dobbel test av cookie for økt sikkerhet.
 */
app.use(csrf({ cookie: true }));

app.get(`${process.env.BASEURL}/csrf-token`, (req,res) => {
  res.status(200).json({data: req.csrfToken()});
});

app.use(`${process.env.BASEURL}/events`, event);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/authors`, author);
app.use(`${process.env.BASEURL}/`, image);
app.use(`${process.env.BASEURL}/sendmail`, contact);
app.use(`${process.env.BASEURL}/`, auth);

app.use(errorMiddleware);

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});

import nodemailer from 'nodemailer';

export const sendMailAdmin = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const message = {
    from: `${options.email}`,
    to: process.env.EMAIL_FROM,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};

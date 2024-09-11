import nodemailer from 'nodemailer';
import loadEnvironmentConfig from '../config/env.js';

loadEnvironmentConfig();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = async (options) => {
  const message = {
    from: `${process.env.FROM_NAME}<${process.env.FROM_EMAIL}>`, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
  };
  await transporter.sendMail(message);
};

export default sendEmail;

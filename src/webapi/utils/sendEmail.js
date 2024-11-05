import nodemailer from 'nodemailer';
import loadEnvironmentConfig from '../config/env.js';

loadEnvironmentConfig();

const transporter = nodemailer.createTransport({
  host: process.env.smtp_host,
  port: process.env.smtp_port,
  secure: false,
  auth: {
    user: process.env.smtp_email,
    pass: process.env.smtp_password,
  },
});

const sendEmail = async (options) => {
  const message = {
    from: `${process.env.from_name}<${process.env.from_email}>`, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
  };
  await transporter.sendMail(message);
};

export default sendEmail;

import nodemailer from 'nodemailer';
import util from 'util';
import dotenv from 'dotenv';

const ENV = process.env.NODE_ENV || 'development';
if (ENV === 'development') {
  console.log('Loading development environment variables from .env file'.yellow.bold);
  dotenv.config(); // Load from .env file in development
} else {
  console.log(`Loading ${ENV} environment variables from config/config.env file`.yellow.bold);
  dotenv.config({ path: './config/config.env' }); // Load from config/config.env in other environments
}

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

  const info = await transporter.sendMail(message);
  console.log('Message sent: %s', info.messageId);
};

export default sendEmail;

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import bootcamps from './routes/bootcamps.js';
import courses from './routes/courses.js';
import auth from './routes/auth.js';
import users from './routes/users.js';
import reviews from './routes/reviews.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';

const ENV = process.env.NODE_ENV || 'development';
if (ENV === 'development') {
  dotenv.config(); // Load from .env file in development
} else {
  dotenv.config({ path: './config/config.env' }); // Load from config/config.env in other environments
}

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

// Middleware registration
app.use(express.json()); // Body parser
app.use(cookieParser()); // Cookie parser
app.use(mongoSanitize()); // Sanitize data
app.use(helmet()); // Set security headers
app.use(fileUpload()); // File upload
app.use(express.static(path.join(path.resolve(), 'public'))); // Set static folder
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/reviews', reviews);
app.use(errorHandler);
if (ENV === 'development' ? app.use(morgan('dev')) : null); // Logging

app.get('/', (req, res) => {
  res.send('Welcome to MERN bootcamp API!');
});

const server = app.listen(PORT, () => {
  console.log(`API server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.error(`Error: ${error.message}`.red);
  server.close(() => process.exit(1));
});

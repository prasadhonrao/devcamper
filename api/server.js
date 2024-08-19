import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import bootcamps from './routes/bootcamps.js';
import courses from './routes/courses.js';
import auth from './routes/auth.js';
import users from './routes/users.js';
import reviews from './routes/reviews.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';

const ENV = process.env.NODE_ENV || 'development';
if (ENV === 'development') {
  dotenv.config();
} else {
  dotenv.config({ path: './config/config.env' });
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
app.use(xss()); // Prevent cross site scripting attacks

const rateLimitMax = process.env.RATE_LIMIT_MAX || 1;
const rateLimitWindowMs = process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000; // Default to 15 minutes

const limiter = rateLimit({
  windowMs: rateLimitWindowMs, // Use environment variable or default to 15 minutes
  max: rateLimitMax, // Use environment variable or default to 1
});

app.use(limiter); // Rate limiting
app.use(hpp()); // Prevent http param pollution
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

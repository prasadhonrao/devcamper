import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import fileUpload from 'express-fileupload';
import bootcamps from './routes/bootcamps.js';
import courses from './routes/courses.js';
import auth from './routes/auth.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

// Body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to MERN bootcamp API!');
});

// Define logging middleware using morgan
if (ENV === 'development') {
  app.use(morgan('dev'));
}

// File upload middleware
app.use(fileUpload());

// Set static folder
app.use(express.static(path.join(path.resolve(), 'public')));

// Define routes
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`API server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.error(`Error: ${error.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

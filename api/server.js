import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import bootcamps from './routes/bootcamps.js';
import connectDB from './config/db.js';

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to MERN bootcamp API!');
});

// Define logging middleware using morgan
if (ENV === 'development') {
  app.use(morgan('dev'));
}

// Define routes
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
  console.log(`API server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.error(`Error: ${error.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

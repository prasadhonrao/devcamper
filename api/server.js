import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bootcamps from './routes/bootcamps.js';

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

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
  console.log(`API server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to MERN bootcamp API!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

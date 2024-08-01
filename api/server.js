import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to MERN bootcamp API!');
});

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Show bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(201).json({ success: true, message: 'Create new bootcamp' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(204).json({ success: true, message: `Delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to MERN bootcamp API!');
});

router.get('/status', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'OK',
    timestamp: new Date().toISOString(),
    ip: req.ip,
    url: req.originalUrl,
  });
});

export default router;

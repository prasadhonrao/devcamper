import ErrorResponse from '../utils/errorResponse.js';

function errorHandler(err, req, res, next) {
  let error = { ...err };
  error.message = err.message;

  // Log to console for dev
  console.log(`Error: ${err.stack}`.red);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join('. ');
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}

export default errorHandler;

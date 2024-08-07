import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/User.js';

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]; // Set token from Bearer token in header
  } else if (req.cookies.token) {
    token = req.cookies.token; // Set token from cookie
  }

  // Check if token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`Decoded token ${decoded}`);

    // Find user by id and set it to req.user so that we can use it in the controller
    req.user = await User.findById(decoded.id).select('-password'); // This is the id from JWT payload
    next();
  } catch (error) {
    console.log(`Error verifying token ${error}`);
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

export { protect };

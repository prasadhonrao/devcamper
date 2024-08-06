import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  return res.status(200).json({ success: true, data: user });
});

export { register };

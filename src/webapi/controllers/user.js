import crypto from 'crypto';
import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import sendEmail from '../utils/sendEmail.js';
import User from '../models/User.js';
import Review from '../models/Review.js';

// @desc    Register user
// @route   POST /api/v1/user/register
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

  sendTokenResponse(user, 200, res);
});

// @desc    Login user
// @route   POST /api/v1/user/login
// @access  Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password'), 400);
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password'); // Select is used to include the password field
  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc    Log user out / clear cookie
// @route   POST /api/v1/users/logout
// @access  Private
const logout = asyncHandler(async (req, res, next) => {
  // Clear the cookie
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 1 * 1000), // 1 second expiration
    httpOnly: true,
  });

  return res.status(200).json({ success: true, data: {} });
});

// @desc    Get current logged in user
// @route   GET /api/v1/users/me
// @access  Private
const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  return res.status(200).json({ success: true, data: user });
});

// @desc    Forgot password
// @route   POST /api/v1/users/forgotpassword
// @access  Public
const forgotPassword = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorResponse(`There is no user with email ${email}`, 404));
  }

  // Get reset token
  const resetToken = await user.getResetPasswordToken();

  // Save the user
  await user.save({ validateBeforeSave: false });

  // Create reset URL
  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;
  const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password reset token',
      message,
    });
    return res.status(200).json({ success: true, data: 'Email sent successfully' });
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorResponse('Email could not be sent', 500));
  }
});

// @desc    Reset password
// @route   PUT /api/v1/users/resetpassword/:resettoken
// @access  Public
const resetPassword = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const resetPassword = crypto.createHash('sha256').update(req.params.resettoken).digest('hex');

  // Find user by reset token
  const user = await User.findOne({ resetPasswordToken: resetPassword, resetPasswordExpire: { $gt: Date.now() } });

  if (!user) {
    return next(new ErrorResponse('Invalid token', 400));
  }

  // Set new password
  user.password = req.body.password;

  // Clear reset token
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  // Save the user
  await user.save();

  sendTokenResponse(user, 200, res);
});

// @desc    Update user details
// @route   PUT /api/v1/users/updatedetails
// @access  Private
const updateDetails = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ success: true, data: user });
});

// @desc    Update user password
// @route   PUT /api/v1/users/updatepassword
// @access  Private
const updatePassword = asyncHandler(async (req, res, next) => {
  // Find the user and include the password
  const user = await User.findById(req.user.id).select('+password');

  // Check current password
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new ErrorResponse('Password is incorrect', 401));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendTokenResponse(user, 200, res);
});

// Get token from model and create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  // Cookie options
  const options = {
    expires: new Date(Date.now() + process.env.jwt_cookie_expire * 24 * 60 * 60 * 1000), // Convert to days
    httpOnly: true,
  };

  // Set secure flag to true in production
  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  return res.status(statusCode).cookie('token', token, options).json({ success: true, token });
};

// @desc    enrollment add
// @route   PUT /api/v1/user/bootcamp/:id/enrollment
// @access  Private
const enrollBootcamp = asyncHandler(async (req, res, next) => {
  const bootcampId = req.params.bootcampId;

  // Fetch user with enrollments
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  // Check if bootcampId already exists in enrollment
  const existingEnrollment = user.enrollment.find(
    (e) => e.bootcamp_id.toString() === bootcampId
  );

  if (existingEnrollment) {
    if (existingEnrollment.active_flag === 1) {
      return res.status(400).json({
        success: false,
        message: 'User already actively enrolled in this bootcamp.',
      });
    } else {
      // Reactivate enrollment
      existingEnrollment.active_flag = 1;
    }
  } else {
    // Safely add new enrollment (no duplicates)
    user.enrollment.push({
      bootcamp_id: bootcampId,
      active_flag: 1,
    });
  }

  await user.save();

  return res.status(200).json({
    success: true,
    message: 'Enrollment successful.',
    data: user,
  });
});


// @desc    enrollment withdraw
// @route   Put /api/v1/user//withdraw/:bootcampId/enrollment
// @access  Private
const withdrawEnrollment = asyncHandler(async (req, res, next) => {

  const bootcampId = req.params.bootcampId;

  // check if user have active 1 bootcamp and then only update it's active flag 0
  const user = await User.findOneAndUpdate(
    {
      _id: req.user.id,
      enrollment: {
        $elemMatch: {
          bootcamp_id: bootcampId,
          active_flag: 1,
        },
      },
    },
    {
      $set: { 'enrollment.$[elem].active_flag': 0 },
    },
    {
      arrayFilters: [{ 'elem.bootcamp_id': bootcampId }],
      new: true,
      runValidators: true,
    }
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'No active bootcamp enrollment found for given bootcamp ID.',
    });
  }

  return res.status(200).json({ success: true, data: user });
});

// @desc    Get enrollments
// @route   Get /api/v1/enrollments
// @access  Private
const getEnrollments = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate('enrollment.bootcamp_id');

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found.',
    });
  }

  // get active 1 bootcamps only
  const activeEnrollments = user.enrollment.filter(e => e.active_flag === 1);

  if (activeEnrollments.length === 0) {
    return res.status(404).json({
      success: false,
      message: 'No active bootcamp enrollments found.',
    });
  }

  const bootcampIds = activeEnrollments.map(e => e.bootcamp_id._id);

  // find the review by user for that particular bootcamp
  const reviews = await Review.find({
    user: req.user.id,
    bootcamp: { $in: bootcampIds },
  });

  // Combine bootcamp and review data
  const response = activeEnrollments.map(enrollment => {
    const bootcamp = enrollment.bootcamp_id;
    const review = reviews.find(r => r.bootcamp.toString() === bootcamp._id.toString());

    return {
      bootcamp,
      review: review || null,
      active_flag: enrollment.active_flag,
    };
  });

  return res.status(200).json({
    success: true,
    data: response,
  });
});

export { register, login, getMe, forgotPassword, resetPassword, updateDetails, updatePassword, logout, enrollBootcamp, withdrawEnrollment, getEnrollments };

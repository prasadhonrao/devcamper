import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Bootcamp from '../models/Bootcamp.js';
import Review from '../models/Review.js';

// @desc    Get reviews
// @route   GET /api/v1/reviews
// @route   GET /api/v1/bootcamps/:bootcampId/reviews
// @access  Public
const getReviews = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.bootcampId;

  if (bootcampId) {
    const reviews = await Review.find({ bootcamp: bootcampId });
    return res.status(200).json({ success: true, count: reviews.length, data: reviews });
  } else {
    return res.status(200).json(res.advancedResults);
  }
});

// @desc    Get single review
// @route   GET /api/v1/review/:id
// @access  Public
const getReview = asyncHandler(async (req, res, next) => {
  let reviewId = req.params.id;
  const review = await Review.findById(reviewId).populate({ path: 'bootcamp', select: 'name description' });

  if (!review) {
    return next(new ErrorResponse(`Review not found with id of ${reviewId}`, 404));
  }

  return res.status(200).json({ success: true, data: review });
});

// @desc    Add new review
// @route   POST /api/v1/bootcamps/:bootcampId/reviews
// @access  Private
const addReview = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.bootcampId;
  let userId = req.user.id;

  // Add the bootcamp id to the request body
  req.body.bootcamp = bootcampId;
  // Add the user id to the request body
  req.body.user = userId;

  // Check if the bootcamp exists
  const bootcamp = await Bootcamp.findById(bootcampId);

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }

  // Check if the user has already submitted a review
  const alreadyReviewed = await Review.findOne({ bootcamp: bootcampId, user: userId });

  if (alreadyReviewed) {
    return next(new ErrorResponse('User has already submitted a review for this bootcamp', 400));
  }

  // Create the review
  const review = await Review.create(req.body);

  return res.status(201).json({ success: true, data: review });
});

// @desc    Update review
// @route   /api/v1/bootcamps/:bootcampId/reviews/:id
// @access  Private
const updateReview = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.bootcampId;
  let reviewId = req.params.id;
  let userId = req.user.id;

  // Check if the bootcamp exists
  const bootcamp = await Bootcamp.findById(bootcampId);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }

  let review = await Review.findById(reviewId);
  if (!review) {
    return next(new ErrorResponse(`Review not found with id of ${reviewId}`, 404));
  }

  // Make sure the review belongs to the user or the user is an admin
  if (review.user.toString() !== userId && req.user.role !== 'admin') {
    return next(new ErrorResponse('Not authorized to update review', 401));
  }

  // Update the review
  review = await Review.findOneAndUpdate({ _id: reviewId }, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({ success: true, data: review });
});

// @desc    Delete review
// @route   /api/v1/bootcamps/:bootcampId/reviews/:id
// @access  Private
const deleteReview = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.bootcampId;
  let reviewId = req.params.id;
  let userId = req.user.id;

  // Check if the bootcamp exists
  const bootcamp = await Bootcamp.findById(bootcampId);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }

  let review = await Review.findById(reviewId);
  if (!review) {
    return next(new ErrorResponse(`Review not found with id of ${reviewId}`, 404));
  }

  // Make sure the review belongs to the user or the user is an admin
  if (review.user.toString() !== userId && req.user.role !== 'admin') {
    return next(new ErrorResponse('Not authorized to update review', 401));
  }

  await review.deleteOne();
  return res.status(200).json({ success: true, data: {} });
});

export { getReviews, getReview, addReview, updateReview, deleteReview };

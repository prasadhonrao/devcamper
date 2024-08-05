import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Course from '../models/Course.js';

// @desc    Get all courses
// @route   GET /api/v1/courses
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
const getCourses = asyncHandler(async (req, res, next) => {
  let query;

  // If the bootcamp id is provided, get courses for that bootcamp
  if (req.params.bootcampId) {
    query = Course.find({
      bootcamp: req.params.bootcampId,
    });
  } else {
    query = Course.find().populate({
      path: 'bootcamp',
      select: 'name description',
    });
  }

  const courses = await query;

  return res.status(200).json({ success: true, count: courses.length, data: courses });
});

// @desc    Get single course
// @route   GET /api/v1/courses
// @access  Public
const getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({ path: 'bootcamp', select: 'name description' });
  console.log(course);
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404));
  }
  return res.status(200).json({ success: true, data: course });
});

export { getCourses, getCourse };

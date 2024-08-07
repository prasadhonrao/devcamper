import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Course from '../models/Course.js';
import Bootcamp from '../models/Bootcamp.js';

// @desc    Get all courses
// @route   GET /api/v1/courses
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
const getCourses = asyncHandler(async (req, res, next) => {
  // If the bootcamp id is provided, get courses for that bootcamp
  if (req.params.bootcampId) {
    const courses = await Course.find({ bootcamp: req.params.bootcampId });
    return res.status(200).json({ success: true, count: courses.length, data: courses });
  } else {
    return res.status(200).json(res.advancedResults);
  }
});

// @desc    Get single course
// @route   GET /api/v1/courses
// @access  Public
const getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({ path: 'bootcamp', select: 'name description' });
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404));
  }
  return res.status(200).json({ success: true, data: course });
});

// @desc    Add new course
// @route   POST /api/v1/bootcamps/:bootcampId/courses
// @access  Private
const addCourse = asyncHandler(async (req, res, next) => {
  // Add the bootcamp id to the request body
  req.body.bootcamp = req.params.bootcampId;

  // Check if the bootcamp exists
  const bootcamp = await Bootcamp.findById(req.params.bootcampId);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.bootcampId}`, 404));
  }

  // Create the course
  const course = await Course.create(req.body);
  return res.status(201).json({ success: true, data: course });
});

// @desc    Update course
// @route   PUT /api/v1/bootcamps/:bootcampId/courses/:id
// @access  Private
const updateCourse = asyncHandler(async (req, res, next) => {
  // Check if the course exists
  let course = await Course.findById(req.params.id);
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404));
  }
  // Check if the bootcamp exists
  const bootcamp = await Bootcamp.findById(req.params.bootcampId);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.bootcampId}`, 404));
  }

  // Update the course
  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ success: true, data: course });
});

// @desc    Delete course
// @route   DELETE /api/v1/bootcamps/:bootcampId/courses/:id
// @access  Private
const deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404));
  }
  await course.deleteOne();
  return res.status(200).json({ success: true, data: {} });
});

export { getCourses, getCourse, addCourse, updateCourse, deleteCourse };
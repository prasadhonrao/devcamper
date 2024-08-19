import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Course from '../models/Course.js';
import Bootcamp from '../models/Bootcamp.js';

// @desc    Get all courses for a bootcamp or get all the courses
// @route   GET /api/v1/courses
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
const getCourses = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.bootcampId;

  if (bootcampId) {
    const courses = await Course.find({ bootcamp: bootcampId });
    return res.status(200).json({ success: true, count: courses.length, data: courses });
  } else {
    return res.status(200).json(res.advancedResults);
  }
});

// @desc    Get single course
// @route   GET /api/v1/courses
// @access  Public
const getCourse = asyncHandler(async (req, res, next) => {
  let courseId = req.params.id;

  const course = await Course.findById(courseId).populate({ path: 'bootcamp', select: 'name description' });

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${courseId}`, 404));
  }

  return res.status(200).json({ success: true, data: course });
});

// @desc    Add new course
// @route   POST /api/v1/bootcamps/:bootcampId/courses
// @access  Private
const addCourse = asyncHandler(async (req, res, next) => {
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

  // Make sure user is bootcamp owner or an admin user
  if (bootcamp.user.toString() !== userId && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(`User ${userId} is not authorized to add a course to the bootcamp ${bootcampId}`, 401)
    );
  }

  // Create the course
  const course = await Course.create(req.body);
  return res.status(201).json({ success: true, data: course });
});

// @desc    Update course
// @route   PUT /api/v1/bootcamps/:bootcampId/courses/:id
// @access  Private
const updateCourse = asyncHandler(async (req, res, next) => {
  let courseId = req.params.id;

  // Check if the course exists
  let course = await Course.findById(courseId);

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${courseId}`, 404));
  }

  let bootcampId = req.params.bootcampId;

  // Check if the bootcamp exists
  const bootcamp = await Bootcamp.findById(bootcampId);

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }

  // Make sure user is course owner or an admin user
  if (course.user.toString() !== userId && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${userId} is not authorized to update a course ${course._id}`, 401));
  }

  // Update the course
  course = await Course.findOneAndUpdate({ _id: courseId }, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ success: true, data: course });
});

// @desc    Delete course
// @route   DELETE /api/v1/bootcamps/:bootcampId/courses/:id
// @access  Private
const deleteCourse = asyncHandler(async (req, res, next) => {
  let courseId = req.params.id;
  let userId = req.user.id;

  const course = await Course.findById(courseId);

  // Check if the course exists
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${courseId}`, 404));
  }

  // Make sure user is course owner or an admin user
  if (course.user.toString() !== userId && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${userId} is not authorized to delete a course ${course._id}`, 401));
  }

  // Delete the course
  await course.deleteOne();
  return res.status(200).json({ success: true, data: {} });
});

export { getCourses, getCourse, addCourse, updateCourse, deleteCourse };

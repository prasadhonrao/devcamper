import Bootcamp from '../models/Bootcamp.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    return res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

export { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp };

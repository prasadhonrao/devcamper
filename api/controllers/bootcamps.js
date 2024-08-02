import Bootcamp from '../models/Bootcamp.js';

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    return res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    console.error(error.message.red.bold);
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(404).json({ success: false, message: `Bootcamp not found with id of ${req.params.id}` });
    }
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.error(error.message.red.bold);
    res.status(500).json({ success: false, error: error.message });
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
    console.error(error.message.red.bold);
    res.status(500).json({ success: false, error: error.message });
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
      return res.status(404).json({ success: false, message: `Bootcamp not found with id of ${req.params.id}` });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.error(error.message.red.bold);
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(404).json({ success: false, message: `Bootcamp not found with id of ${req.params.id}` });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error.message.red.bold);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp };

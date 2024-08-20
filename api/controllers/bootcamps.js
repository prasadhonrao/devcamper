import path from 'path';
import Bootcamp from '../models/Bootcamp.js';
import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import geocoder from '../utils/geocoder.js';

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootcamps = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedResults);
});

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.id;

  const bootcamp = await Bootcamp.findById(bootcampId);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }
  return res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = asyncHandler(async (req, res, next) => {
  let userId = req.user.id;

  // Add user to the request body
  req.body.user = userId;

  // Check for published bootcamp
  const publishedBootcamp = await Bootcamp.findOne({ user: userId });

  // If the user is not an admin, they can only add one bootcamp
  if (publishedBootcamp && req.user.role !== 'admin') {
    return next(new ErrorResponse(`The user with id ${userId} has already published a bootcamp`, 400));
  }

  const bootcamp = await Bootcamp.create(req.body);
  return res.status(201).json({ success: true, data: bootcamp });
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const updateBootcamp = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.id;
  let bootcamp = await Bootcamp.findById(bootcampId);

  // Check if the bootcamp exists
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }

  let userId = req.user.id;
  // Make sure user is bootcamp owner or an admin user
  if (bootcamp.user.toString() !== userId && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${userId} is not authorized to update this bootcamp`, 401));
  }

  // Update the bootcamp
  bootcamp = await Bootcamp.findOneAndUpdate({ _id: bootcampId }, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcamp = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.id;
  let bootcamp = await Bootcamp.findById(bootcampId);

  // Check if the bootcamp exists
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }

  let userId = req.user.id;
  // Make sure user is bootcamp owner or an admin user
  if (bootcamp.user.toString() !== userId && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${userId} is not authorized to delete this bootcamp`, 401));
  }

  await bootcamp.deleteOne();
  return res.status(200).json({ success: true, data: {} });
});

// @desc    Get bootcamps within a radius
// @route   GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access  Public
const getBootcampsInRadius = asyncHandler(async (req, res, next) => {
  try {
    const { zipcode, distance } = req.params;

    // Get lat/lng from geocoder
    const loc = await geocoder.geocode(zipcode);

    if (!loc || loc.length === 0) {
      throw new ErrorResponse(`Geocoding failed for ${zipcode}`, 404);
    }

    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    // Calc radius using radians
    const radius = distance / 3963;

    const bootcamps = await Bootcamp.find({
      location: {
        $geoWithin: {
          $centerSphere: [[lng, lat], radius],
        },
      },
    });
    return res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    throw new ErrorResponse('Geocoding failed'.error.message, 500);
  }
});

const testGeocode = asyncHandler(async (req, res, next) => {
  const { address } = req.body;
  let result;
  if (!address) {
    return res.status(400).json({ success: false, error: 'Address is required' });
  }
  try {
    result = await geocoder.geocode(address);
  } catch (error) {
    return next(new ErrorResponse(`Geocode failed for address ${address}`, 404));
  }
  return res.status(200).json({ success: true, data: result });
});

// @desc    Upload photo for a bootcamp
// @route   PUT /api/v1/bootcamps/:id/photo
// @access  Private
const uploadBootcampPhoto = asyncHandler(async (req, res, next) => {
  let bootcampId = req.params.id;
  let bootcamp = await Bootcamp.findById(bootcampId);

  // Check if the bootcamp exists
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${bootcampId}`, 404));
  }

  let userId = req.user.id;

  // Make sure user is bootcamp owner or an admin user
  if (bootcamp.user.toString() !== userId && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${userId} is not authorized to update bootcamp photo`, 401));
  }

  // Make sure the user is sending a file
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure that the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Make sure the image is not too large
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400));
  }

  // Create custom filename
  file.name = `photo_${bootcamp._id}${path.parse(file.name).ext}`;

  // Upload file
  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err.message.red.bold);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    // Update the bootcamp with the photo
    await Bootcamp.findByIdAndUpdate(bootcampId, { photo: file.name });

    return res.status(200).json({ success: true, data: file.name });
  });
});

export {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  testGeocode,
  uploadBootcampPhoto,
};

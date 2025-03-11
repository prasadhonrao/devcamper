import mongoose from 'mongoose';
import slugify from 'slugify';
import geocoder from '../utils/geocoder.js';
import ErrorResponse from '../utils/errorResponse.js';

const BootcampSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Bootcamp name is required'],
      minlength: [5, 'Bootcamp name must be between 5 and 50 characters'],
      maxlength: [50, 'Bootcamp name must be between 5 and 50 characters'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Bootcamp description is required'],
      trim: true,
      minlength: [10, 'Bootcamp description must be between 10 and 500 characters'],
      maxlength: [500, 'Bootcamp description must be between 10 and 500 characters'],
    },
    slug: String,
    website: {
      type: String,
      match: [/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/, 'Please add a valid website URL'],
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please add a valid email'],
    },
    address: {
      type: String,
      required: [true, 'Bootcamp address is required'],
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
      },
      formattedAddress: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
    },
    careers: {
      type: [String],
      required: [true, 'Please add at least one career'],
    },
    averageRating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [10, 'Rating can not be more than 10'],
    },
    averageCost: Number,
    photo: {
      type: String,
      default: 'no-photo.png',
    },
    housing: {
      type: Boolean,
      default: false,
    },
    jobAssistance: {
      type: Boolean,
      default: false,
    },
    jobGuarantee: {
      type: Boolean,
      default: false,
    },
    acceptGi: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create bootcamp slug from the name
BootcampSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Geocode & create location field
BootcampSchema.pre('save', async function (next) {
  try {
    if (!this.address) {
      throw new Error('Address is required for geocoding');
    }

    const loc = await geocoder.geocode(this.address);

    if (!loc || loc.length === 0) {
      throw new Error('Geocoding failed, no location data returned');
    }

    this.location = {
      type: 'Point',
      coordinates: [loc[0].longitude, loc[0].latitude],
      formattedAddress: loc[0].formattedAddress,
      street: loc[0].streetName,
      city: loc[0].city,
      state: loc[0].stateCode,
      zipcode: loc[0].zipcode,
      country: loc[0].countryCode,
    };

    // Do not save address in DB
    this.address = undefined;
  } catch (error) {
    return next(new ErrorResponse(`Geocoding failed during save operation with error ${error.message}`, 500));
  }
  next();
});

// Reverse populate with courses
BootcampSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'bootcamp',
  justOne: false,
});

// Cascade delete courses when a bootcamp is deleted
BootcampSchema.pre('deleteOne', { document: true, query: false }, async function (next) {
  await this.model('Course').deleteMany({ bootcamp: this._id });
  next();
});

const Bootcamp = mongoose.model('Bootcamp', BootcampSchema);
export default Bootcamp;

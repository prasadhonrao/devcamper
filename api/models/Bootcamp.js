import mongoose from 'mongoose';

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
      match: [
        /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i,
        'Please add a valid website URL',
      ],
    },
    phone: {
      type: String,
      match: [/^\d{3}-\d{3}-\d{4}$/, 'Please add a valid phone number in the format XXX-XXX-XXXX'],
    },
    email: {
      type: String,
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please add a valid email address'],
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
      enum: [
        'Artificial Intelligence',
        'Business',
        'Cloud Computing',
        'Cyber Security',
        'Data Science',
        'DevOps',
        'Full Stack Development',
        'Machine Learning',
        'Mobile Development',
        'Other',
        'UI/UX',
        'Web Development',
      ],
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
  },
  {
    timestamps: true,
  }
);

const Bootcamp = mongoose.model('Bootcamp', BootcampSchema);
export default Bootcamp;

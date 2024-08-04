import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Course name is required'],
      trim: true,
      minlength: [5, 'Course name must be between 5 and 50 characters'],
      maxlength: [50, 'Course name must be between 5 and 50 characters'],
    },
    description: {
      type: String,
      required: [true, 'Course description is required'],
      trim: true,
      minlength: [10, 'Course description must be between 10 and 500 characters'],
      maxlength: [500, 'Course description must be between 10 and 500 characters'],
    },
    weeks: {
      type: String,
      required: [true, 'Course duration in weeks is required'],
    },
    tuition: {
      type: Number,
      required: [true, 'Course tuition cost is required'],
    },
    minimumSkill: {
      type: String,
      required: [true, 'Minimum skill level is required'],
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    scholarshipAvailable: {
      type: Boolean,
      default: false,
    },
    bootcamp: {
      type: mongoose.Schema.ObjectId,
      ref: 'Bootcamp',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;

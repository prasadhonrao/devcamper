import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema(
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
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Static method to get average of course tuitions
CourseSchema.statics.getAverageCost = async function (bootcampId) {
  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId },
    },
    {
      $group: {
        _id: '$bootcamp',
        averageCost: { $avg: '$tuition' },
      },
    },
  ]);

  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
    });
  } catch (error) {
    console.error(error);
  }
};

// Call getAverageCost after save
CourseSchema.post('save', async function () {
  await this.constructor.getAverageCost(this.bootcamp);
});

// Call getAverageCost before remove
CourseSchema.pre('deleteOne', { document: true, query: false }, async function () {
  await this.constructor.getAverageCost(this.bootcamp);
});

// Call getAverageCost after update
CourseSchema.post('findOneAndUpdate', async function (doc) {
  await doc.constructor.getAverageCost(doc.bootcamp);
});

const Course = mongoose.model('Course', CourseSchema);
export default Course;

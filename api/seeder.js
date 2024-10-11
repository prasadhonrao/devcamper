import fs from 'fs';
import colors from 'colors';
import Bootcamp from './models/Bootcamp.js';
import Course from './models/Course.js';
import User from './models/User.js';
import Review from './models/Review.js';
import connectDB from './config/db.js';
import loadEnvironmentConfig from './config/env.js';

// Load environment variables
loadEnvironmentConfig();

// Connect to MongoDB
connectDB();

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${process.cwd()}/_data/bootcamps.json`, 'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${process.cwd()}/_data/courses.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${process.cwd()}/_data/users.json`, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${process.cwd()}/_data/reviews.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Course.create(courses);
    await User.create(users);
    await Review.create(reviews);
    console.log('Data imported...'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error occurred while importing data: ${error.message}`);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Course.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log('Data deleted...'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error occurred while deleting data: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}

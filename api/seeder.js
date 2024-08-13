import fs from 'fs';
import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Load models
import Bootcamp from './models/Bootcamp.js';
import Course from './models/Course.js';
import User from './models/User.js';

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-bootcamp-db';
await mongoose.connect(MONGO_URI);

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${process.cwd()}/data/bootcamps.json`, 'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${process.cwd()}/data/courses.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${process.cwd()}/data/users.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Course.create(courses);
    await User.create(users);
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

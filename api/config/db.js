import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB: ${MONGO_URI}`.yellow.bold);
  } catch (error) {
    console.error(`Error occurred while connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

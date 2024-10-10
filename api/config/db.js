import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const {
      mongodb_host = '',
      mongodb_port = '',
      mongodb_username = '',
      mongodb_password = '',
      mongodb_db_name = '',
      mongodb_db_param = '',
    } = process.env;

    // Log environment variables for debugging
    console.log('Environment variables:');
    console.log(`mongodb_host: ${mongodb_host}`);
    console.log(`mongodb_port: ${mongodb_port}`);
    console.log(`mongodb_username: ${mongodb_username}`);
    console.log(`mongodb_password: ${mongodb_password}`);
    console.log(`mongodb_db_name: ${mongodb_db_name}`);
    console.log(`mongodb_db_param: ${mongodb_db_param}`);

    if (!mongodb_host || !mongodb_db_name) {
      throw new Error('mongodb_host and mongodb_db_name must be defined');
    }

    let mongodb_uri = 'mongodb://';

    if (mongodb_username) {
      mongodb_uri += `${mongodb_username}:${mongodb_password}@`;
    }

    mongodb_uri += `${mongodb_host}:${mongodb_port}/${mongodb_db_name}?${mongodb_db_param}`;

    console.log(`MongoDB URI: ${mongodb_uri}`.yellow.bold);
    await mongoose.connect(mongodb_uri);
  } catch (error) {
    console.error(`Error occurred while connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // const MONGO_URI = process.env.MONGO_URI;

    const {
      mongodb_host = 'localhost', // Default MongoDB host
      mongodb_port = '27017', // Default MongoDB port
      mongodb_username = '',
      mongodb_password = '',
      mongodb_db_name = 'devcamper-db', // Default MongoDB database name
      mongodb_db_param = '',
    } = process.env;

    if (!mongodb_host || !mongodb_db_name) {
      throw new Error('mongodb_host and mongodb_db_name must be defined');
    }

    let mongodb_uri = 'mongodb://';

    if (mongodb_username) {
      mongodb_uri += `${mongodb_username}:${mongodb_password}@`;
    }

    mongodb_uri += `${mongodb_host}:${mongodb_port}/${mongodb_db_name}?${mongodb_db_param}`;

    await mongoose.connect(mongodb_uri);

    console.log(`Connected to MongoDB: ${mongodb_uri}`.yellow.bold);
  } catch (error) {
    console.error(`Error occurred while connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

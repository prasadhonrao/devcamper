import dotenv from 'dotenv';

const loadEnvironmentConfig = () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  // Load environment variables from .env file only in development mode
  if (process.env.NODE_ENV === 'development') {
    dotenv.config();
  }

  // For test and production, assume environment variables are passed directly
  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production') {
    console.log(`Running in ${process.env.NODE_ENV} mode`);
  }
};

export default loadEnvironmentConfig;

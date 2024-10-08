import dotenv from 'dotenv';

const loadEnvironmentConfig = () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  dotenv.config();
  console.log(`Running in ${process.env.NODE_ENV} mode`);
};

export default loadEnvironmentConfig;

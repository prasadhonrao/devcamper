import dotenv from 'dotenv';

const loadEnvironmentConfig = () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  switch (process.env.NODE_ENV) {
    case 'development':
      dotenv.config();
      break;
    case 'test':
      dotenv.config({ path: '.env.test' });
      break;
    case 'production':
      dotenv.config({ path: '.env.production' });
      break;
    default:
      throw new Error('Environment not recognized');
  }
};

export default loadEnvironmentConfig;

import NodeGeocoder from 'node-geocoder';
import dotenv from 'dotenv';
dotenv.config();

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: process.env.geocoder_api_key,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;

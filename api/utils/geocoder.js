import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: process.env.geocoder_api_key,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;

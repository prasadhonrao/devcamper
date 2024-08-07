import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: '', // Add your own API key here
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;

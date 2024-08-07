import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: 'OjmS2KLXOtbB6i9qaNgeOespeKhWmx4W',
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;

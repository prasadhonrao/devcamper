let config = null;

export const fetchConfig = async () => {
  if (!config) {
    const response = await fetch('/config/config.json');
    if (!response.ok) {
      throw new Error('Failed to fetch configuration');
    }
    const json = await response.json();
    const env = process.env.NODE_ENV || 'development';
    console.log(`Using configuration for environment: ${env}`);
    console.log(`Configuration: ${JSON.stringify(json[env], null, 2)}`);
    config = json[env];
  }
  return config;
};

export const getConfigValue = async (key) => {
  const config = await fetchConfig();
  return config[key];
};

export const fetchApiEndPoint = async (endpoint) => {
  const config = await fetchConfig();
  const api = config.react_app_devcamper_base_api_uri;
  console.log(`fetchApi endpoint: ${api}${endpoint}`);
  return `${api}${endpoint}`;
};

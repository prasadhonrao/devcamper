export const fetchConfig = async () => {
  const configDir = '/config';
  const env = process.env.NODE_ENV || 'development';
  const configFileName =
    env === 'production' ? 'react_app_devcamper_base_api_prod_uri' : 'react_app_devcamper_base_api_dev_uri';
  const apiUri = await fetch(`${configDir}/${configFileName}`).then((res) => res.text());

  const config = {
    react_app_devcamper_base_api_uri: apiUri.trim(),
  };

  console.log(`Using configuration for environment: ${env}`);
  console.log(`Configuration: ${JSON.stringify(config, null, 2)}`);
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

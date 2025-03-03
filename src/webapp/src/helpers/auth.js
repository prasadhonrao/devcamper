export const getToken = () => {
  return localStorage.getItem('token');
};

export const getAuthHeaders = () => {
  const token = getToken();
  if (!token) {
    throw new Error('No token, authorization denied');
  }
  return {
    Authorization: `Bearer ${token}`,
  };
};

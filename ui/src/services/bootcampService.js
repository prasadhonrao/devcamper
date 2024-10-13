const API_BASE_URI = process.env.REACT_APP_DEVCAMPER_BASE_API_URI;

const bootcampService = {
  getBootcamps: async () => {
    const res = await fetch(`${API_BASE_URI}/api/v1/bootcamps`);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamps');
    }
    return res.json();
  },
  // Add more bootcamp-related methods as needed
};

export default bootcampService;

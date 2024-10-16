const API_BASE_URI = process.env.REACT_APP_DEVCAMPER_BASE_API_URI;

const bootcampService = {
  getBootcamps: async () => {
    const res = await fetch(`${API_BASE_URI}/bootcamps`);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamps');
    }
    return res.json();
  },

  getBootcampsByPublisher: async (publisherId) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/publisher/${publisherId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamps');
    }
    return res.json();
  },

  getBootcamp: async (id) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamp');
    }
    return res.json();
  },

  createBootcamp: async (bootcamp) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bootcamp),
    });
    if (!res.ok) {
      throw new Error('Failed to create bootcamp');
    }
    return res.json();
  },

  updateBootcamp: async (id, bootcamp) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bootcamp),
    });
    if (!res.ok) {
      throw new Error('Failed to update bootcamp');
    }
    return res.json();
  },

  deleteBootcamp: async (id) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete bootcamp');
    }
    return res.json();
  },

  getBootcampsInRadius: async (zipcode, distance) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/radius/${zipcode}/${distance}`);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamps in radius');
    }
    return res.json();
  },

  getBootcampCourses: async (id) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/${id}/courses`);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamp courses');
    }
    return res.json();
  },
};

export default bootcampService;

const API_BASE_URI = process.env.REACT_APP_DEVCAMPER_BASE_API_URI + '/courses';

const courseService = {
  getCourses: async () => {
    const res = await fetch(`${API_BASE_URI}/`);
    if (!res.ok) {
      throw new Error('Failed to fetch courses');
    }
    return res.json();
  },

  getCourse: async (courseId) => {
    const res = await fetch(`${API_BASE_URI}/${courseId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch course');
    }
    return res.json();
  },

  createCourse: async (bootcampId, course, token) => {
    const res = await fetch(`${API_BASE_URI}/bootcamps/${bootcampId}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(course),
    });
    if (!res.ok) {
      throw new Error('Failed to create course');
    }
    return res.json();
  },

  updateCourse: async (courseId, course) => {
    const res = await fetch(`${API_BASE_URI}/${courseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });
    if (!res.ok) {
      throw new Error('Failed to update course');
    }
    return res.json();
  },

  deleteCourse: async (courseId) => {
    const res = await fetch(`${API_BASE_URI}/${courseId}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete course');
    }
    return res.json();
  },
};

export default courseService;

const API_BASE_URI = process.env.REACT_APP_DEVCAMPER_BASE_API_URI;

const courseService = {
  getCourses: async () => {
    const res = await fetch(`${API_BASE_URI}/courses`);
    if (!res.ok) {
      throw new Error('Failed to fetch courses');
    }
    return res.json();
  },

  getCourse: async (id) => {
    const res = await fetch(`${API_BASE_URI}/courses/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch course');
    }
    return res.json();
  },

  createCourse: async (bootcampId, course, token) => {
    console.log(`Token is ${token}`);
    console.log(`Bootcamp ID is ${bootcampId}`);
    console.log(`Course is ${JSON.stringify(course)}`);

    const res = await fetch(`${API_BASE_URI}/bootcamps/${bootcampId}/courses`, {
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

  updateCourse: async (id, course) => {
    const res = await fetch(`${API_BASE_URI}/courses/${id}`, {
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

  deleteCourse: async (id) => {
    const res = await fetch(`${API_BASE_URI}/courses/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete course');
    }
    return res.json();
  },
};

export default courseService;

import { fetchApiEndPoint } from '../utils/configService';

const courseService = {
  getCourses: async () => {
    const uri = await fetchApiEndPoint(`/courses`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch courses');
    }
    return res.json();
  },

  getCourse: async (courseId) => {
    const uri = await fetchApiEndPoint(`/courses/${courseId}`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch course');
    }
    return res.json();
  },

  createCourse: async (bootcampId, course, token) => {
    const uri = await fetchApiEndPoint(`/courses/bootcamps/${bootcampId}/`);
    const res = await fetch(uri, {
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
    const uri = await fetchApiEndPoint(`/courses/${courseId}`);
    const res = await fetch(uri, {
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
    const uri = await fetchApiEndPoint(`/courses/${courseId}`);
    const res = await fetch(uri, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete course');
    }
    return res.json();
  },
};

export default courseService;

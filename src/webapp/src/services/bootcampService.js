import { getAuthHeaders } from '../helpers/auth';
import { fetchApiEndPoint } from '../utils/configService';

const bootcampService = {
  getBootcamps: async (fields) => {
    const query = fields ? `?select=${fields.join(',')}` : '';
    const uri = await fetchApiEndPoint(`/bootcamps${query}`);
    const res = await fetch(uri);
    if (!res.ok) {
      console.log(`Failed to fetch bootcamps: ${res.status}`);
      throw new Error('Failed to fetch bootcamps');
    }
    return res.json();
  },

  getBootcampsByPublisher: async (publisherId) => {
    const uri = await fetchApiEndPoint(`/bootcamps/publisher/${publisherId}`);
    const res = await fetch(uri, {
      headers: getAuthHeaders(),
    });
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamps');
    }
    return res.json();
  },

  getBootcamp: async (id) => {
    const uri = await fetchApiEndPoint(`/bootcamps/${id}`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamp');
    }
    return res.json();
  },

  createBootcamp: async (bootcamp) => {
    const uri = await fetchApiEndPoint(`/bootcamps`);
    const res = await fetch(uri, {
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
    const uri = await fetchApiEndPoint(`/bootcamps/${id}`);
    const res = await fetch(uri, {
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
    const uri = await fetchApiEndPoint(`/bootcamps/${id}`);
    const res = await fetch(uri, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete bootcamp');
    }
    return res.json();
  },

  getBootcampsInRadius: async (zipcode, distance) => {
    const uri = await fetchApiEndPoint(`/bootcamps/radius/${zipcode}/${distance}`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamps in radius');
    }
    return res.json();
  },

  getCoursesByBootcampId: async (bootcampId) => {
    const uri = await fetchApiEndPoint(`/bootcamps/${bootcampId}/courses`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch bootcamp courses');
    }
    return res.json();
  },
};

export default bootcampService;

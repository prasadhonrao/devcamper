const API_BASE_URI = process.env.REACT_APP_DEVCAMPER_BASE_API_URI + '/admin';

const adminService = {
  getUsers: async () => {
    const res = await fetch(`${API_BASE_URI}/users`);
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    return res.json();
  },

  getUser: async (id) => {
    const res = await fetch(`${API_BASE_URI}/users/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    return res.json();
  },

  createUser: async (user) => {
    const res = await fetch(`${API_BASE_URI}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error('Failed to create user');
    }
    return res.json();
  },

  updateUser: async (id, user) => {
    const res = await fetch(`${API_BASE_URI}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error('Failed to update user');
    }
    return res.json();
  },

  deleteUser: async (id) => {
    const res = await fetch(`${API_BASE_URI}/users/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete user');
    }
    return res.json();
  },
};

export default adminService;

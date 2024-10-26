import { fetchApiEndPoint } from '../utils/configService';

const adminService = {
  getUsers: async () => {
    const uri = await fetchApiEndPoint(`/admin/users`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    return res.json();
  },

  getUser: async (id) => {
    const uri = await fetchApiEndPoint(`/admin/users/${id}`);
    const res = await fetch(uri);
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    return res.json();
  },

  createUser: async (user) => {
    const uri = await fetchApiEndPoint(`/admin/users`);
    const res = await fetch(uri, {
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
    const uri = await fetchApiEndPoint(`/admin/users/${id}`);
    const res = await fetch(uri, {
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
    const uri = await fetchApiEndPoint(`/admin/users/${id}`);
    const res = await fetch(uri, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete user');
    }
    return res.json();
  },
};

export default adminService;

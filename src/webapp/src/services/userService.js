import { getToken } from '../helpers/auth';
import { fetchApiEndPoint } from '../utils/configService';

const userService = {
  register: async (user) => {
    const uri = await fetchApiEndPoint(`/user/register`);
    const res = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error('Failed to register');
    }
    return res.json();
  },

  login: async (user) => {
    const uri = await fetchApiEndPoint(`/user/login`);
    const res = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error('Failed to login');
    }
    return res.json();
  },

  logout: async () => {
    const uri = await fetchApiEndPoint(`/user/logout`);
    const res = await fetch(uri, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error('Failed to logout');
    }
    return res.json();
  },

  getMe: async () => {
    const uri = await fetchApiEndPoint(`/user/getMe`);
    const token = getToken();
    const res = await fetch(uri, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error('Failed to get user');
    }
    return res.json();
  },

  forgotPassword: async (email) => {
    const uri = await fetchApiEndPoint(`/user/forgotpassword`);
    const res = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });
    if (!res.ok) {
      throw new Error('Failed to send reset email');
    }
    return res.json();
  },

  resetPassword: async (password) => {
    const uri = await fetchApiEndPoint(`/user/resetpassword`);
    const res = await fetch(uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(password),
    });
    if (!res.ok) {
      throw new Error('Failed to reset password');
    }
    return res.json();
  },

  updateDetails: async (user) => {
    const token = getToken();
    const uri = await fetchApiEndPoint(`/user/updatedetails`);
    const res = await fetch(uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error('Failed to update details');
    }
    return res.json();
  },

  updatePassword: async (password) => {
    const uri = await fetchApiEndPoint(`/user/updatepassword`);
    const res = await fetch(uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(password),
    });
    if (!res.ok) {
      throw new Error('Failed to update password');
    }
    return res.json();
  },
};

export default userService;

const API_BASE_URI = process.env.REACT_APP_DEVCAMPER_BASE_API_URI;

const authService = {
  register: async (user) => {
    const res = await fetch(`${API_BASE_URI}/auth/register`, {
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
    const res = await fetch(`${API_BASE_URI}/auth/login`, {
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
    const res = await fetch(`${API_BASE_URI}/auth/logout`, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error('Failed to logout');
    }
    return res.json();
  },

  getMe: async () => {
    const res = await fetch(`${API_BASE_URI}/auth/me`, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error('Failed to get user');
    }
    return res.json();
  },

  forgotPassword: async (email) => {
    const res = await fetch(`${API_BASE_URI}/auth/forgotpassword`, {
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
    const res = await fetch(`${API_BASE_URI}/auth/resetpassword`, {
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
    const res = await fetch(`${API_BASE_URI}/auth/updatedetails`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error('Failed to update details');
    }
    return res.json();
  },

  updatePassword: async (password) => {
    const res = await fetch(`${API_BASE_URI}/auth/updatepassword`, {
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

export default authService;

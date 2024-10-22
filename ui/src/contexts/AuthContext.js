import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    const decodedUser = jwtDecode(token);
    setUser(decodedUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };

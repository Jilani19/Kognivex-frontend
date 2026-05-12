import React, { createContext, useEffect, useMemo, useState } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext(null);

const storedUser = localStorage.getItem('kognivexUser');
const initialUser = storedUser ? JSON.parse(storedUser) : null;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem('kognivexUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('kognivexUser');
      localStorage.removeItem('kognivexToken');
    }
  }, [user]);

<<<<<<< HEAD
  const login = async (username, password) => {
    const response = await authService.login({ username, password });
=======
  const login = async (email, password) => {
    const response = await authService.login({ email, password });
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
    setUser(response.user);
    return response;
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

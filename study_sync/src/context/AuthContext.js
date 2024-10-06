// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // State to hold the current user; null means not authenticated
  const [currentUser, setCurrentUser] = useState(null);

  // Mock login function
  const login = (username) => {
    // In a real app, you would handle authentication here
    // For mock, we'll just set a dummy user
    const user = { id: 1, name: username || 'Mock User' };
    setCurrentUser(user);
  };

  // Mock logout function
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

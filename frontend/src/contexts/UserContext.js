// src/contexts/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
export const UserContext = createContext();

// Custom hook to access the user context easily
export const useUser = () => useContext(UserContext);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds user data
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  const signIn = (userData) => {
    setUser(userData); // Save user data
    setIsAuthenticated(true); // Mark user as authenticated
  };

  const signOut = () => {
    setUser(null); // Clear user data
    setIsAuthenticated(false); // Mark user as logged out
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  const user = localStorage.getItem('user');
  
  // Check if user is authenticated
  const isAuthenticated = token && user;
  
  if (!isAuthenticated) {
    // Redirect to sign-in page if not authenticated
    return <Navigate to="/sign-in" replace />;
  }
  
  // Render the protected component if authenticated
  return children;
};

export default PrivateRoute;

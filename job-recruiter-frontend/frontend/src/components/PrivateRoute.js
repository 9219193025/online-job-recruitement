// src/components/PrivateRoute.js
// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // or any authentication logic
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

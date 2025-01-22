import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication hook
const useAuth = () => {
  // Mocking an authentication state
  const isAuthenticated = true; // Change to false to test redirection
  return isAuthenticated;
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/" replace />; // Redirect to home if not authenticated
  }

  return children; // Render the protected content if authenticated
};

export default ProtectedRoute;
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({x}) => {
    const isauthenticated = localStorage.getItem('loggedin');

  return isauthenticated ? x : <Navigate to="/login" />;
}

export default ProtectedRoute
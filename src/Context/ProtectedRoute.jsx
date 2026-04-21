import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import myContext from './myContext'; // Adjust the path if necessary

const ProtectedRoute = ({ children }) => {
  const { isPatientCreated } = useContext(myContext);

  if (!isPatientCreated) {
    return <Navigate to="/book-appointment" />;
  }

  return children;
};

export default ProtectedRoute;

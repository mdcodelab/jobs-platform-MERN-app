import React from 'react';
import {Navigate} from "react-router-dom";
import { useAppContext } from '../../context/appContext';

function ProtectedRoute({children}) {
    const {user}=useAppContext();

    if(!user) {
        return <Navigate to="/home"></Navigate>
    }
  return (children
  );
}

export default ProtectedRoute;

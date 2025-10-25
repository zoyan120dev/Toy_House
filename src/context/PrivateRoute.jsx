import React, { use } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router';

function PrivateRoute({children}) {
  const {user} =  use(AuthContext)
  const location = useLocation();
   
  if(user){
    return children;
  }
   
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
}

export default PrivateRoute
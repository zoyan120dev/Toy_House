import React, { use } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
  const {user} =  use(AuthContext)
   
  if(user){
    return children;
  }
   
  return <Navigate to='/login'></Navigate>
}

export default PrivateRoute
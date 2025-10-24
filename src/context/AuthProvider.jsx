import React, { createContext } from 'react'

const AuthContext = createContext(null)

function AuthProvider() {
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider
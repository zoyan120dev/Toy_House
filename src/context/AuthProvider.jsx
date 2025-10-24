import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

function AuthProvider({children}) {
  const [user , setUser] = useState(null)
  const signInWithGoogle = () => {
    return signInWithPopup(auth , googleProvider)
  }
  
  const signInWithEmailAndPassword = (emaill , password) => {
     return  createUserWithEmailAndPassword(auth , emaill , password)
  }
  const logoutMyaccount = () => {
    signOut(auth)
  }

  const authData = {
    signInWithGoogle,
    user,
    setUser,
    logoutMyaccount,
    signInWithEmailAndPassword,
  };

  useEffect(() => {
    const unsabcribe =  onAuthStateChanged(auth , (currentUser) => {
       setUser(currentUser)
    })
    return () => {
      unsabcribe()
    }
  } , [])

  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider;
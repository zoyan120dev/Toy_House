import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  , updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

function AuthProvider({children}) {
  const [user , setUser] = useState(null)
  const [showPassword , setshowPassword] = useState(false)

  const signInWithGoogle = () => {
    return signInWithPopup(auth , googleProvider)
  }
  
  const registerWithEmailAndPassword = (emaill, password) => {
    return createUserWithEmailAndPassword(auth, emaill, password);
  };
  const logoutMyaccount = () => {
    signOut(auth)
  }

  const handleShowPassword = (event) => {
    event.preventDefault();
    setshowPassword(!showPassword);
  };

  const LoginInWithEmailAndPassword = (email , password) => {
     return  signInWithEmailAndPassword(auth , email , password)
  }

  const updatedUser = (updateData) => {
    return updateProfile(auth.currentUser , updateData)
  }


  const authData = {
    signInWithGoogle,
    user,
    setUser,
    logoutMyaccount,
    registerWithEmailAndPassword,
    handleShowPassword,
    showPassword,
    updatedUser,
    LoginInWithEmailAndPassword,
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
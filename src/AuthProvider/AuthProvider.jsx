import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import React, { Children, createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const provider = new GoogleAuthProvider()

  const signUpWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const loginWithEmailPassword = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () =>{
    return signInWithPopup(auth, provider)
  }

  const userInfo = {
    user,
    signUpWithEmailPassword,
    loginWithEmailPassword,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

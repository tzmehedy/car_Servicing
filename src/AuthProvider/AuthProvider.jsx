import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import React, { Children, createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true)

  const provider = new GoogleAuthProvider()

  const signUpWithEmailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const loginWithEmailPassword = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  const logOut =()=>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, user=>{
        setLoading(false);
        setUser(user)
    })
    return ()=>{
        unSubscribe()
    }
  },[])

  const userInfo = {
    user,
    signUpWithEmailPassword,
    loginWithEmailPassword,
    signInWithGoogle,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

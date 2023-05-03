import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

 const [user,setUser] = useState(null);

  const Registered = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);

  };

  const signIn = (email,password) =>{
               return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut =()=>{
               return signOut(auth)
  }

  useEffect(()=>{
const loginAndLogout = onAuthStateChanged(auth,signIn=>{
// console.log('login and logout',signIn)
setUser(signIn)
               })

               return()=>{
                              loginAndLogout();
               }

               
  },[])


 
  const authInfo = {
                 user,
               Registered,
               signIn,
               logOut,

               
  };
  return (
    <AuthContext.Provider value={authInfo}>
               {children}
               </AuthContext.Provider>
  );
};

export default AuthProvider;

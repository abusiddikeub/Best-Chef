import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

 const [user,setUser] = useState(null);
 const [loading,setLoading] = useState(true);


  const Registered = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);

  };

  const signIn = (email,password) =>{
    setLoading(true);
               return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut =()=>{
    setLoading(true);
               return signOut(auth)
  }

  useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,signIn=>{
// console.log('login and logout',signIn)
setUser(signIn)
setLoading(false);

               })

               return()=>{
                              unsubscribe();
               }

               
  },[])


 
  const authInfo = {
                 user,
                 loading,
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

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);
  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userlogin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logouthande = () => {
    setloading(true);
    return signOut(auth);
  };
  const signupwithgoogle = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };
  const emailverification = () => {
    return sendEmailVerification(auth.currentUser);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setuser(currentUser);
      }
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const updateusername = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const authinfo = {
    user: user,
    createuser,
    userlogin,
    logouthande,
    signupwithgoogle,
    updateusername,
    loading,
    setloading,
    emailverification,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;

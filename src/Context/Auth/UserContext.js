import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase/app";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [fullname, setFullname] = useState("youssef");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfpassword] = useState("");
  const [currentUser, setcurrentUser] = useState(null);
  const [issuccess, setIssuccess] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const login = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const LoggedUser = firebase.auth().currentUser;
      await setcurrentUser(LoggedUser);
      await checkEmailVerification(LoggedUser);
    } catch (err) {
      setIserror(true);
      setErrorMsg(err.message);
    }
  };

  const signup = async () => {
    if (password !== confPassword) {
      setIserror(true);
      setErrorMsg("Password Does Not Match");
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        await setIssuccess(true);
      } catch (err) {
        setIserror(true);
        setErrorMsg(err.message);
      }
    }
  };

  const checkEmailVerification = async user => {
    if (user.emailVerified) await setIssuccess(true);
    else {
      setIserror(true);
      setErrorMsg("Please Verify Your Email , To Use Your Account");
    }
  };

  const sendEmailVerification = async () => {
    await firebase.auth().currentUser.sendEmailVerification();
    if (fullname)
      await firebase.auth().currentUser.updateProfile({
        displayName: fullname
      });
  };

  const resetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      await setIssuccess(true);
    } catch (err) {
      setIserror(true);
      setErrorMsg(err.message);
    }
  };

  const getCurrentUser = async () => {
    const LoggedUser = firebase.auth().currentUser;
    await setcurrentUser(LoggedUser);
    console.log(currentUser);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    const msgAutoHide = () => {
      if (iserror || issuccess) {
        setTimeout(() => {
          setIserror(false);
          setIssuccess(false);
        }, 5000);
      }
    };
    msgAutoHide();
  }, [issuccess, iserror]);

  return (
    <UserContext.Provider
      value={{
        issuccess,
        iserror,
        errorMsg,
        setFullname,
        setEmail,
        setPassword,
        setConfpassword,
        login,
        signup,
        resetPassword,
        currentUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

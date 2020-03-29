import React, { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfpassword] = useState("");
  const [currentUser, setcurrentUser] = useState(null);

  const login = async () => {
 
  };
  const signup = async () => {
  }

  const resetPassword = async () => {
    
  };

  const getCurrentUser = async () => {
  
  };

 
  return (
    <UserContext.Provider
      value={{
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

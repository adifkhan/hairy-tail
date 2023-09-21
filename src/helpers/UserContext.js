"use client";

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const getauth = async () => {
      const res = await axios.get("/api/users/auth");
      if (res.data.success) {
        setCurrentUser(res.data.user);
      }
    };
    getauth();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

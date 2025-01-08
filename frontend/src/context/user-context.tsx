"use client";

import axios from "axios";
import React, { useContext, useState, createContext, useEffect } from "react";

interface IUser {
  _id: string;
  email: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
  setIsLoggedIn: () => false,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loggedIn, setIsLoggedIn] = useState(false);

  const getCurrentUser = async () => {
    try {
      const userToken = localStorage.getItem("token");
      if (userToken) {
        const response = await axios.get(
          `http://localhost:8000/users/current-user`,
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        if (response.status === 200) {
          setUser(response.data.user);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log("user not found", { autoClose: 60 });
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, [loggedIn]);

  return (
    <UserContext.Provider value={{ user, setUser, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;

"use client";

import axios from "axios";

import { createContext, useContext, useState } from "react";


interface IUser {
  firstname: string;
  email: string;
}

interface IContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext<IContext>({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    
    </UserContext.Provider>
  );
};

export const useUser = () => {

  return useContext(UserContext);
};

export default UserProvider;
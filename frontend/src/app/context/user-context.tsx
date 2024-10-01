"use client";

import { createContext, useContext, useState } from "react";

interface IUser {
  firstname: string;
  email: string;
  cellphone: string;
  address: string;
}
interface IContext {
  user: IUser | null;
  setUser: Function;
  login: () => null;
}
export const UserContext = createContext<IContext>({
  user: null,
  setUser: Function,
  login: () => null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const login = () => {
    try {
      //axios ywulna
      return null;
    } catch (error) {
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};

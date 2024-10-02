"use client";

import axios from "axios";

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
  setToken: Function;
}
interface LContext {
  loggedIn: IUser | boolean;
  setLoggedIn: Function;
}
export const UserContext = createContext<IContext>({
  user: null,
  setUser: () => {},
  setToken: () => null,
});
export const LoginContext = createContext<LContext>({
  loggedIn: true,
  setLoggedIn: Function,
});
export const UserProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};

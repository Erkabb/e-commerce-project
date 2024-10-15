"use client";

import axios from "axios";

import { createContext, useContext, useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import Products from "../category/allproducts";
import ProductDetail from "../[id]/page";

interface IUser {
  _id: string;
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
function productsFetch(): any {
  throw new Error("Function not implemented.");
}

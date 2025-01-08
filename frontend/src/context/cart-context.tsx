'use client';
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface ICarts {
    _id:string,
      user: string;
      products: {
        name: string;
        description: string;
        price: number;
        size: string;
        images: [string];
        isBrandNew: boolean;
        quantity: number;
        discount: number;
        category: [];
      }[];
      totalAmount:number
};
interface ICartContext {
    carts:ICarts []|[],
    setCarts:React.Dispatch<React.SetStateAction<ICarts []|[]>>
};

export const CartsContext=createContext<ICartContext>({
    carts: [],
    setCarts:()=>{}
});

export const CartsProvider=({children}:{children:React.ReactNode})=>{
    const [carts, setCarts]=useState<ICarts[]>([]);
    const GetCarts=async()=>{
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`http://localhost:8000/carts/getcart`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
              setCarts(res.data.usercarts);
          } catch (error) {
            console.log("couldn't get cart", error);
          }
    }
    useEffect(()=>{
        GetCarts()
    }, []);
    return(
        <CartsContext.Provider value={{carts, setCarts}}>
            {children}
        </CartsContext.Provider>
    )
};
export const useCarts=()=>{
    return useContext(CartsContext);
}
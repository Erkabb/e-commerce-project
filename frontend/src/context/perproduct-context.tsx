'use client';
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState, createContext, useContext } from "react";

interface IEachProduct{
    name: string,
    price: string,
    description: string,
    images: [string],
    size: string,
};

interface IEachProductContext {
    product: IEachProduct | null,
    setEachProduct:React.Dispatch<React.SetStateAction<IEachProduct | null>>
};
export const EachProductContext=createContext<IEachProductContext>({
    product:  null,
    setEachProduct:()=>{}
});
export const EachProductProvider=({children}:{children:React.ReactNode})=>{
    const [eachProduct, setEachProduct]=useState<IEachProduct | null>(null);
    const {id}=useParams();
    const getProductData=async()=>{
        try {
            const response = await axios.get(`http://localhost:8000/products/${id}`);
            console.log("one product data:", response.data.product);
            if (response.status === 200) {
              setEachProduct(response.data.product);
            }
          } catch (error) {
            console.log("get one product is failed", error);
          }
    }
  useEffect(()=>{
    if (id) getProductData();
  }, [id]);
  return (
    <EachProductContext.Provider value={{product:eachProduct, setEachProduct}}>
        {children}
    </EachProductContext.Provider>
  )
};
export const useProduct=()=>{
    return useContext(EachProductContext);
}
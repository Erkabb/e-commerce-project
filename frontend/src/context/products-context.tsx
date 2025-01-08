'use client';

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface IProduct {
    _id:string,
    name:string,
    description:string,
    price:string,
    size:string,
    images:[string],
    quantity:number,
    category: {_id:string}
}   

interface IProductContext {
    products: IProduct [] | [],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[] | []>>
}

export const ProductContext=createContext<IProductContext>({
    products: [],
    setProducts:()=>{}
});

export const ProductProvider =({children}:{children:React.ReactNode})=>{
    const [products, setProducts]=useState<IProduct [] | []>([]);
    const fetchProductData=async()=>{
        try {
            const response = await axios.get(
              `http://localhost:8000/products/allproducts`
            );
            setProducts(response.data.products);
           
          } catch (error) {}
    }
   useEffect(()=>{
    fetchProductData();
   }, []);
    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
};
export const useProducts=()=>{
    return useContext(ProductContext);
};
'use client';
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

interface ICategories {
    _id:string,
    season: string,
    material:string,
    size:string
}  
 interface ICategoriesContext {
    categories: ICategories [] | [],
    setCategory:React.Dispatch<React.SetStateAction<ICategories []|[]>>
 };

 export const CategoriesContext=createContext<ICategoriesContext>({
    categories: [],
    setCategory:()=>{}
 });
 export const CategoriesProvider= ({children}:{children:React.ReactNode})=>{
    const [categories, setCategory] = useState<ICategories []>([]);
    const GetCategory=async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/category/category`);
            setCategory(res.data.category);
          } catch (error) {
            console.log("error", error);
          }
    }
    useEffect(()=>{
        GetCategory();
    },[]);
    return(
        <CategoriesContext.Provider value={{categories, setCategory}}>
            {children}
        </CategoriesContext.Provider>
    )
 };
 export const useCategories=()=>{
    return useContext(CategoriesContext);
 }
"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [category, setCategoryData] = useState<any []>([]);

  const getCategories = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/category/category`);
      console.log("category", res.data.category);
      setCategoryData(res.data.category);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex flex-nowrap text-[18px] gap-5">
       <div className="flex flex-col gap-2 text-[16px] text-black">
        <h1>
          <strong>Season</strong>
        </h1>
        {category?.map((season)=> <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
        {season.season} 
        </button>)}
         
      </div>
     
      <div className="flex flex-col gap-2 text-[16px]">
        <h1>
          <strong>Material</strong>
        </h1>
        {category?.map((material)=>   <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
        {material.material}
        </button>)}
      </div>
      <div className="flex flex-col gap-2 text-[16px]">
        <h1>
          <strong>Size</strong>
        </h1>
        {category?.map((size)=> <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
         {size.size}
        </button>)}
     
      </div>
    </div>
  );
};
export default Sidebar;

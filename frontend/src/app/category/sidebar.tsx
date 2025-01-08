"use client";

import { Button } from "@/components/ui/button";
import { useCategories } from "@/context/category-context";

const Sidebar = () => {
  const {categories}=useCategories();
  return (
    <div className="flex flex-col text-[18px] gap-5">
       <div className="flex flex-col gap-2 text-[16px] text-black">
        <h1>
          <strong>Season</strong>
        </h1>
        {categories?.map((season)=> 
        <Button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:h-[42px]"
        key={season.season}>
        {season.season} 
        </Button>)}
         
        </div>
     
        <div className="flex flex-col gap-2 text-[16px]">
        <h1>
          <strong>Material</strong>
        </h1>
        {categories?.map((material)=>  
         <Button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:h-[42px]"
         key={material.material}>
        {material.material}
        </Button>)}
      </div>
      <div className="flex flex-col gap-2 text-[16px]">
        <h1>
          <strong>Size</strong>
        </h1>
        {categories?.map((size)=> 
        <Button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:h-[42px]"
        key={size.size}>
         {size.size}
        </Button>)}
     
      </div>
    </div>
  );
};
export default Sidebar;

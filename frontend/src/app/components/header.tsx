import React from "react";
import { ShoppingCart, Heart, Search } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full h-[88px] bg-black flex text-[14px] items-center justify-evenly">
      <div className="flex gap-3 ">
        <div className="flex gap-3">
          <img src="./Vector.png" alt="" />
          <Link href={"/home"}><p className="text-white ">ECOMMERCE</p></Link>
        </div>
        <Link href={"/category"}><p className="text-slate-300" >Ангилал</p></Link>
      </div>
      <div className="flex  rounded-3xl  text-slate-100 items-center gap-2">
        <Search />
        <input
          type="text"
          placeholder="Бүтээгдэхүүн хайх"
          className="grow  w-[300px] h-[40px] rounded-3xl bg-[#18181B] text-slate-100 pl-5"
        />
      </div>
      <div className="flex gap-2 items-center">
       <Link href={"/likedproducts"}><ShoppingCart className="cart" /></Link> 
        <Link href={"/"}><Heart className="cart" /></Link>
        <Link href={"/signup"}>
          <button className="text-white btn w-[100px] h-[40px]  border-2 border-blue-700  rounded-3xl">
            Бүртгүүлэх
          </button>
        </Link>
        <Link href={"/login"}>
          <button className=" btn w-[80px] h-[40px] border-1 bg-blue-700 rounded-3xl text-white">
            Нэвтрэх
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

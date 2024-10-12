"use client";
import { User, ShoppingCart, Heart, Search, LogOut } from "lucide-react";
import Link from "next/link";



const Header = () => {
 
  return (
    <header className="flex flex-col">
      <div className="w-full h-[70px] bg-black flex text-[16px] items-center justify-evenly">
        <div className="flex gap-3 ">
          <div className="flex gap-3">
            <img src="./Vector.png" alt="" />
            <Link href={"/home"}>
              <p className="text-white ">
                <strong>ECOMMERCE</strong>
              </p>
            </Link>
          </div>
          <Link href={"/category"}>
            <p className="text-slate-300">
              <strong>Бүтээгдэхүүн</strong>
            </p>
          </Link>
        </div>
        <div className="flex  rounded-3xl  text-slate-100 items-center gap-2">
          <Search />
          <input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="grow  w-[300px] h-[40px] rounded-3xl bg-[#18181B] text-slate-100 pl-5"
          />
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"/product-cart"}>
            <ShoppingCart className="icon" />
          </Link>
          <Link href={"/wishlist"}>
            <Heart className="icon" />
          </Link>
       
            <div className="flex gap-2">
              <Link href={"/userprofile"}>
                <User className="icon" />
              </Link>
              <Link href="/login">
                <LogOut
                  className="icon"
                  onClick={() => {
                    localStorage.clear();
                  }}
                />
              </Link>
            </div>
        
         
       
        </div>
      </div>

    </header>
  );
};

export default Header;

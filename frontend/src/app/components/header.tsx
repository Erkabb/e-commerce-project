"use client";
import { User, ShoppingCart, Heart, Search, LogOut } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useUser } from "@/context/user-context";
import { useCategories } from "@/context/category-context";

const Header = () => {
  const {user} = useUser();
  const {categories}=useCategories();

  return (
    <header className="flex flex-col">
      <div className="w-full max-md:h-[70px] bg-black flex text-sm items-center justify-evenly py-2">
        <div className="flex gap-5 items-center ">
          
            <Link href={"/home"}>
            <Image src="/Vector.png" alt="g" width={20} height={20}/>
           
            </Link>
    
          <Link href={"/category"}>
            <p className="text-white text-sm pb-1">
              <strong>Бүтээгдэхүүн</strong>
            </p>
          </Link>
        </div>
        <div className="flex rounded-2xl text-slate-100 items-center gap-2">
          <Search size={20}/>
          <Input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="grow  w-[300px] h-[35px] rounded-3xl bg-[#18181B] text-slate-100 pl-5"
          />
        </div>
        <div className="flex gap-4 items-center">
         
          {user && (
            <div className="flex gap-4">
               <Link href={"/product-cart"}>
            <ShoppingCart className="icon" size={18}/>
          </Link>
          <Link href={"/wishlist"}>
            <Heart className="icon" size={18}/>
          </Link>
              <Link href={"/userprofile"}>
                <User className="icon" size={18}/>
              </Link>
              <Link href="/login">
                <LogOut
                  className="icon" size={18}
                  onClick={() => {
                    localStorage.clear();
                  }}
                />
              </Link>
            </div>
          )}
          {!user && (
            <div className="flex gap-2">
              <Link href={"/signup"}>
                <Button className=" btn text-white h-[35px]  border-2 border-blue-700  rounded-2xl hover:bg-blue-700 hover:w-[114px]">
                  Бүртгүүлэх
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button className=" btn h-[35px] border-1 bg-blue-700 rounded-2xl text-white  hover:border-2 hover:border-blue-700">
                  Нэвтрэх
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {user && (  <div className="w-full h-[50px] flex bg-black justify-center gap-10">
        {categories?.map((cat) => (
          <div className="dropdown py-2"  key={cat._id}>
            <div className="btn m-1 menu-horizontal flex-none text-sm "
          >
            <Button className="text-white"><strong>{cat.material}</strong></Button>
            </div>
          </div>
        ))}
      </div>)}
    
    </header>
  );
};

export default Header;

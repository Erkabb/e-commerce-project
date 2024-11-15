"use client";
import { User, ShoppingCart, Heart, Search, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [user, setUser] = useState(false);
  const [category, setCategory] = useState([]);
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8000/users/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
    } catch (error) {
      console.log("couldn't change header", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/category/category`);
      console.log("category", res.data.category);
      setCategory(res.data.category);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <header className="flex flex-col">
      <div className="w-full max-md:h-[70px] bg-black flex text-sm items-center justify-evenly py-2">
        <div className="flex gap-5 items-center ">
          
            <Link href={"/home"}>
            <img src="./Vector.png" alt="" />
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
            <div className="flex gap-2">
               <Link href={"/product-cart"}>
            <ShoppingCart className="icon" size={20}/>
          </Link>
          <Link href={"/wishlist"}>
            <Heart className="icon" size={20}/>
          </Link>
              <Link href={"/userprofile"}>
                <User className="icon" size={20}/>
              </Link>
              <Link href="/login">
                <LogOut
                  className="icon" size={20}
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
                <Button className=" btn text-white h-[35px]  border-2 border-blue-700  rounded-2xl hover:bg-blue-700">
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
      {user && (  <div className="w-[full] max-md:h-[50px] flex bg-black text-[24px] text-white justify-center gap-10">
        {category.map((cat:any) => (<div className="dropdown py-2">
            <div className="btn m-1 menu-horizontal flex-none text-sm">
            <p><strong>{cat.name}</strong></p>
            </div>
          </div>
        ))}
      </div>)}
    
    </header>
  );
};

export default Header;

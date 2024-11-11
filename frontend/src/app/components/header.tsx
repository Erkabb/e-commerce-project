"use client";
import { User, ShoppingCart, Heart, Search, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="w-full max-md:h-[70px] bg-black flex text-[16px] items-center justify-evenly py-2">
        <div className="flex gap-3 items-center">
          <div className="flex gap-3">
            <img src="./Vector.png" alt="" />
            <Link href={"/home"}>
              <p className="text-white ">
                <strong>ECOMMERCE</strong>
              </p>
            </Link>
          </div>
          <Link href={"/category"}>
            <p className="text-white text-sm pb-1">
              <strong>Бүтээгдэхүүн</strong>
            </p>
          </Link>
        </div>
        <div className="flex  rounded-3xl  text-slate-100 items-center gap-2">
          <Search size={20}/>
          <input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="grow  w-[300px] h-[40px] rounded-3xl bg-[#18181B] text-slate-100 pl-5"
          />
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"/product-cart"}>
            <ShoppingCart className="icon" size={20}/>
          </Link>
          <Link href={"/wishlist"}>
            <Heart className="icon" size={20}/>
          </Link>
          {user && (
            <div className="flex gap-2">
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
          )}
        </div>
      </div>
      <div className="w-[full] max-md:h-[50px] flex bg-black text-[24px] text-white justify-center gap-10">
        {category.map((cat:any) => (<div className="dropdown py-2">
            <div className="btn m-1 menu-horizontal flex-none text-sm">
            <p><strong>{cat.name}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;

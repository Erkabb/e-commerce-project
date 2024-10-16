"use client";
import { User, ShoppingCart, Heart, Search, LogOut } from "lucide-react";
import Link from "next/link";
import CategoryOnHeader, { categories } from "./category-onheader";
import { useUser } from "../context/user-context";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [user, setUser] = useState(false);
  const [category, setCategory] = useState({});
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

  const fetchCategories = async () => {};
  return (
    <header className="flex flex-col">
      <div className="w-full h-[88px] bg-black flex text-[16px] items-center justify-evenly">
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
          {user && (
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
      <div className="w-[full] h-[80px] flex bg-black text-[24px] text-white justify-center gap-10">
        {categories?.map(({ cat, subCat }) => (
          <CategoryOnHeader cat={cat} subCat={subCat} />
        ))}
      </div>
    </header>
  );
};

export default Header;

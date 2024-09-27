"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const signUp = async () => {
    const { firstname, lastname, email, password, repassword } = userData;
    if (password !== repassword) {
      toast.error("Нууц үг таарахгүй байна.");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/signup`,
        { firstname, lastname, email, password }
      );
      if (response.status === 201) {
        toast.success("Signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("Failed to signed up", error);
      toast.error("Failed to signed up. Please try again");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[350px] h-[550px] flex flex-col gap-7 ">
        <h1 className="text-center text-[24px]">
          <strong>Бүртгүүлэх</strong>
        </h1>
        <div className="flex flex-col gap-5 text-[14px]">
          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Нэр"
            onChange={(e) => {
              setUserData({ ...userData, firstname: e.target.value });
            }}
          />
          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Овог"
            onChange={(e) => {
              setUserData({ ...userData, lastname: e.target.value });
            }}
          />

          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаяг"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />

          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Нууц үг"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />

          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Нууц үг давтах"
            onChange={(e) => {
              setUserData({ ...userData, repassword: e.target.value });
            }}
          />

          <ul className="text-slate-500 text-[12px]">
            <li>Том үсэг орсон байх</li>
            <li>Жижиг үсэг орсон байх</li>
            <li>Тоо орсон байх</li>
            <li>Тэмдэгт орсон байх</li>
          </ul>
          <button
            className="btn btn-wide h-[40px] bg-blue-700 border-2 rounded-3xl text-white"
            onClick={signUp}
          >
            Үүсгэх
          </button>
        </div>
        <button className="btn btn-wide h-[40px] bg-white border-2 border-blue-700 rounded-3xl text-blue-700">
          <Link href={"/login"}>Нэвтрэх</Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;

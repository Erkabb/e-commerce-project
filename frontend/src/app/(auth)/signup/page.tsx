"use client";

import Link from "next/link";
import React from "react";

const Signup = () => {
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
          />

          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаяг"
          />

          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Нууц үг"
          />

          <input
            type="text"
            className="input border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Нууц үг давтах"
          />

          <ul className="text-slate-500 text-[12px]">
            <li>Том үсэг орсон байх</li>
            <li>Жижиг үсэг орсон байх</li>
            <li>Тоо орсон байх</li>
            <li>Тэмдэгт орсон байх</li>
          </ul>
          <button className="btn btn-wide h-[40px] bg-blue-700 border-2 rounded-3xl text-white">
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

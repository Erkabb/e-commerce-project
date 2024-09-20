"use client";
import React from "react";
import Link from "next/link";
const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[350px] h-[260p] flex flex-col gap-5">
        <h1 className="text-center text-[24px]">
          <strong>Нэвтрэх</strong>
        </h1>
        <div className="flex flex-col gap-5 text-[14px]">
          <input
            type="text"
            className="input  border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаяг"
          />

          <input
            type="text"
            className="input border-2 border-slate-100 rounded-3xl w-[348px] h-[40px]  bg-white pl-2"
            placeholder="Нууц үг"
          />

          <Link href={"/home"}>
            <button className="btn btn-wide bg-blue-700  w-[348px] h-[40px] border-2 rounded-3xl text-white">
              Нэвтрэх
            </button>
          </Link>
          <Link className="text-slate-400 text-center" href={"/signup"}>
            Нууц үг мартсан
          </Link>
        </div>
        <button className="btn btn-wide h-[40px] bg-white border-2 border-blue-700 rounded-2xl text-blue-700">
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};

export default Login;

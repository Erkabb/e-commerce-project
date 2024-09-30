"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";

const UserProfile = () => {
  return (
    <div className="flex my-96 justify-center gap-40 items-start">
      <Sidebar />
      <div className="flex flex-col gap-10">
        <h1 className="text-[20px]">
          <strong>Хэрэглэгчийн хэсэг</strong>{" "}
        </h1>
        <div className="border-t-2 border-slate-200 flex flex-col gap-10 pt-10 text-[1z8px]">
          <label className="input input-bordered flex items-center gap-2">
            <strong>Нэр</strong>
            <input type="text" className="grow client" placeholder="Нэр" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <strong>Овог</strong>
            <input type="text" className="grow client" placeholder="Овог" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <strong>Имэйл</strong>
            <input type="text" className="grow client" placeholder="" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <strong>Утасны дугаар</strong>
            <input
              type="text"
              className="grow client"
              placeholder="Утасны дугаар"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <strong>Хаяг</strong>
            <input type="text" className="grow" placeholder="Хаяг" />
          </label>
          <button className="btn w-[120px] h-[40px] bg-blue-700 rounded-xl shadow-sm text-white ml-[700px] hover:bg-black">
            <strong>Хадгалах</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;

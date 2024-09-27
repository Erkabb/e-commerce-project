"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const RecoverPass = () => {
  const router=useRouter()
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  // }, []);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSendOtp = () => {
    console.log(email);
    try {
      const res = axios.post(
        "http://localhost:8000/api/v1/auth/forgetpassword",
        {
          email,
        }
      );
      // if (res.status === 2000) {
        
      // }
    } catch (error) {
      toast.error("Please try again");
    }
  };
  return (
    <div className="flex flex-col my-96 gap-5">
      {step === 1 && (
        <>
        <h1 className="text-center text-[24px]">
        <strong>Нууц үг сэргээх</strong>
      </h1>
      <input
        type="text"
        className="input  border-2 border-slate-100  w-[348px] h-[40px] rounded-3xl bg-white pl-2"
        placeholder="Имэйл хаягаа оруулна уу"
        onChange={handleEmail}
      />
      <button
        className="btn w-[348px] h-[40px]  border-2 bg-blue-700 rounded-2xl text-white"
        onChange={handleSendOtp}
      >
        Илгээх
      </button></>
       )}
    </div>
  );
};

export default RecoverPass;

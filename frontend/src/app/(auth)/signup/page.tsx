"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const Signup = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passUpper, setPassUpper] = useState<boolean>(false);
  const [passLower, setPassLower] = useState<boolean>(false);
  const [passNumber, setPassNumber] = useState<boolean>(false);
  const [passSymbol, setPassSymbol] = useState<boolean>(false);
  const [iseEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const checkFreelancer = () => {
    const { email, password } = userData;
    try {
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setEmailCheck(true);
        setIsChecked(true);
      } else {
        setEmailCheck(false);
        setIsChecked(false);
      }

      if (!/[A-Z]/.test(password)) {
        setPassUpper(false);
        setIsChecked(false);
      } else {
        setPassUpper(true);
        setIsChecked(true);
      }

      if (!/[a-z]/.test(password)) {
        setPassLower(false);
        setIsChecked(false);
      } else {
        setPassLower(true);
        setIsChecked(true);
      }

      if (!/[0-9]/.test(password)) {
        setPassNumber(false);
        setIsChecked(false);
      } else {
        setPassNumber(true);
        setIsChecked(true);
      }

      if (!/[^A-Za-z0-9]/.test(password)) {
        setPassSymbol(false);
        setIsChecked(false);
      } else {
        setPassSymbol(true);
        setIsChecked(true);
      }
    } catch (error) {
      setIsChecked(false);
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

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
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[420px] h-[600px] flex flex-col gap-7 ">
        <h1 className="text-center text-[30px]">
          <strong>Бүртгүүлэх</strong>
        </h1>
        <div className="flex flex-col gap-5 text-[22px]">
          <Input
            type="text"
            className="input border-2 border-slate-100 h-[60px] rounded-3xl bg-white pl-2"
            placeholder="Нэр"
            onChange={(e) => {
              setUserData({ ...userData, firstname: e.target.value });
            }}
          ></Input>
          <Input
            type="text"
            className="input border-2 border-slate-100 h-[60px] rounded-3xl bg-white pl-2"
            placeholder="Овог"
            onChange={(e) => {
              setUserData({ ...userData, lastname: e.target.value });
            }}
          ></Input>

          <Input
            type="text"
            className="input border-2 border-slate-100 h-[60px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаяг"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          ></Input>
               {emailCheck === false ? (
                <p className="w-full rounded-[18px] px-3 py-1 text-sm text-[#E11D48]">
                  Зөв имэйл хаяг оруулна уу.
                </p>
              ) : (
                <></>
              )}

          <Input
           
            className="border-2 border-slate-100 h-[60px] rounded-3xl bg-white pl-2"
            value={userData.password}
            placeholder="Нууц үг"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            type={iseEyeOpen ? "text" : "password"} 
          ></Input>
            {iseEyeOpen ? (
                <FaRegEyeSlash
                  className=""
                  color="gray"
                  onClick={() => setIsEyeOpen(false)}
                />
              ) : (
                <FaRegEye
                  className=""
                  color="gray"
                  onClick={() => setIsEyeOpen(true)}
                />
              )}
          <Input
            type={iseEyeOpen ? "text" : "password"}
            className="input border-2 border-slate-100  w-[420px] h-[60px] rounded-3xl bg-white pl-2"
            placeholder="Нууц үг давтах"
            onChange={(e) => {
              setUserData({ ...userData, repassword: e.target.value });
            }}
          ></Input>

<div className=" flex flex-col gap-1">
              <p
                className={`bg-inherit border-none text-xs leading-[19px] ${
                  passUpper ? "text-[#71717A]" : "text-[#E11D48]"
                }  underline-offset-2`}
              >
                • Том үсэг орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passLower ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Жижиг үсэг орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passNumber ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Тоо орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passSymbol ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Тэмдэгт орсон байх
              </p>
            </div>
          <button
            className="btn  w-[420px] h-[60px] bg-blue-700 border-2 rounded-3xl text-white text-[22px]"
            onClick={signUp}
          >
            Үүсгэх
          </button>
        </div>
       
          <Link href={"/login"}> <button className="btn  w-[420px] h-[55px] bg-white border-2 border-blue-700 rounded-3xl text-blue-700 text-[22px]">Нэвтрэх </button></Link>
       
      </div>
    </div>
  );
};

export default Signup;

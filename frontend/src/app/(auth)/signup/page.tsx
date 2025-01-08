"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passUpper, setPassUpper] = useState<boolean>(false);
  const [passLower, setPassLower] = useState<boolean>(false);
  const [passNumber, setPassNumber] = useState<boolean>(false);
  const [passSymbol, setPassSymbol] = useState<boolean>(false);
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const checkUser = () => {
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
    }
  };

  const signUp = async () => {
    const { firstname, lastname, email, password, repassword } = userData;
   
    setIsLoading(true);
    if (password !== repassword) {
      toast.error("Нууц үг таарахгүй байна.");
      return;
    }
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await axios.post(`${API_URL}/api/v1/auth/signup`, {
        firstname,
        lastname,
        email,
        password,
      });
      if (response.status === 201) {
                router.push("/login");
      }
    } catch (error) {
      console.error("Failed to sign up:", error);
    } finally {
      setIsLoading(false);
    }   
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(checkUser, 300);
    return () => clearTimeout(debounceTimeout);
  }, [userData]);
  return (
    <section className="w-full h-full flex justify-center my-10">
      <div className="w-[270px] flex flex-col gap-7 pb-10">
        <h1 className="text-center text-lg">
          <strong>Бүртгүүлэх</strong>
        </h1>
        <div className="flex flex-col gap-5 ">
          <Input
            type="text"
            className="input border-2 border-slate-100  rounded-2xl bg-white pl-2"
            placeholder="Нэр"
            onChange={(e) => {
              setUserData({ ...userData, firstname: e.target.value });
            }}
          ></Input>
          <Input
            type="text"
            className="input border-2 border-slate-100 rounded-2xl bg-white pl-2"
            placeholder="Овог"
            onChange={(e) => {
              setUserData({ ...userData, lastname: e.target.value });
            }}
          ></Input>

          <Input
            type="text"
            className="input border-2 border-slate-100 rounded-2xl bg-white pl-2"
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
          <div className="relative">
            <Input
          className="border-2 border-slate-100 rounded-2xl bg-white pl-2 "
            value={userData.password}
            placeholder="Нууц үг"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            type={isEyeOpen ? "text" : "password"} 
          ></Input>
           {isEyeOpen ? (
            <FaRegEyeSlash
              className="absolute right-5 top-[12px]"
              color="gray"
              onClick={() => setIsEyeOpen(false)}
            />
          ) : (
            <FaRegEye
              className="absolute right-5 top-[12px]"
              color="gray"
              onClick={() => setIsEyeOpen(true)}
            />
          )}</div>
          
          <Input
            type={isEyeOpen ? "text" : "password"}
            className="input border-2 border-slate-100 rounded-2xl bg-white pl-2"
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
            <Button
  className="btn h-[40px] bg-blue-700 border-2 rounded-2xl text-white"
  onClick={signUp}
  disabled={isLoading || !isChecked}
>
{isLoading ? "Бүртгүүлж байна..." : "Үүсгэх"}
</Button>
        </div>
       
          <Link href={"/login"}> <Button className="btn w-[270px] h-[40px] bg-white border-2 border-blue-700 rounded-2xl text-blue-700">Нэвтрэх </Button></Link>
       
      </div>
    </section>
  );
};

export default Signup;

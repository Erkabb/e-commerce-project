"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user-context";
import { Input } from "@/components/ui/input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isEyeOpen, setIsEyeOpen]=useState(false);
  const logIn = async () => {
    const { email, password } = userData;
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/login`,
        { email, password }
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        setUser(user);
        router.push("/home");
      }
    } catch (error) {
     console.error("failed to sign in");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[270px] flex flex-col gap-5">
        <h1 className="text-center text-lg">
          <strong>Нэвтрэх</strong>
        </h1>
        <div className="flex flex-col gap-5">
          <Input
            type="text"
            className="input max-w-full border-2 border-slate-100 rounded-2xl bg-white pl-2"
            placeholder="Имэйл хаяг"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
          <div className="relative">
          <Input
            className="input max-w-full border-2 border-slate-100 rounded-2xl  bg-white pl-2"
            placeholder="Нууц үг"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            type={isEyeOpen ? "text" : "password"}>
              
            </Input>
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
          )}
          </div>
           
          <Button
            className="btn max-w-full bg-blue-700  border-2 rounded-2xl text-white hover:text-blue-700 hover:border-2 hover:border-blue-700"
            onClick={logIn}
          >
            Нэвтрэх
          </Button>

          <Link href={"/recover.pass"}>
            <Button variant="link" className="text-sm  max-w-full text-center">
              Нууц үг мартсан
            </Button>
          </Link>
        </div>
        <Link href={"/signup"}>
          {" "}
          <Button className="btn min-w-full bg-white border-2 border-blue-700 rounded-2xl text-blue-700 hover:bg-blue-700 hover:text-white">
            Бүртгүүлэх
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

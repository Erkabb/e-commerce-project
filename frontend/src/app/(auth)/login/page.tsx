"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import RecoverPass from "@/app/recover-pass/page";
import { Button } from "@/components/ui/button";
import { useUser } from "@/app/context/user-context";

const Login = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const logIn = async () => {
    const { email, password } = userData;
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/login`,
        { email, password }
      );
      if (response.status === 200) {
        toast.success("Signed in ", { autoClose: 1000 });
        const { token, user } = response.data;
        localStorage.setItem("token", token);

        setUser(user);
        router.push("/home");
      }
    } catch (error) {
      console.error("failed to sign in", error);
      toast.error("failed to sign in");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[420px] h-[300p] flex flex-col gap-5">
        <h1 className="text-center text-[30px]">
          <strong>Нэвтрэх</strong>
        </h1>
        <div className="flex flex-col gap-5 text-[22px]">
          <input
            type="text"
            className="input  border-2 border-slate-100  w-[400px] h-[60px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаяг"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />

          <input
            type="text"
            className="input border-2 border-slate-100 rounded-3xl w-[400px] h-[60px]  bg-white pl-2"
            placeholder="Нууц үг"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />

          <button
            className="btn btn-wide bg-blue-700  w-[400px] h-[60px] border-2 rounded-3xl text-white"
            onClick={logIn}
          >
            Нэвтрэх
          </button>

          <Link href={"/recover.pass"}>
            <Button variant="link" className="text-[20px] text-center">
              Нууц үг мартсан
            </Button>
          </Link>
        </div>
        <Link href={"/signup"}>
          {" "}
          <button className="btn w-[400px] h-[60px] bg-white border-2 border-blue-700 rounded-2xl text-blue-700 text-[22px]">
            Бүртгүүлэх
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

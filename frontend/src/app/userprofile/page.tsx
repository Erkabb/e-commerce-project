"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import { useParams } from "next/navigation";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    cellphone: "",
    pfp: "",
    address: "",
  });
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8000/users/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("token", token);
      setUserData(res.data.user);
      console.log("userinfo:", res.data.user);
    } catch (error) {
      console.log("couldn't get user's info", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="flex my-96 justify-center gap-40 items-start">
      <Sidebar />
      <div className="flex flex-col gap-10">
        <h1 className="text-[20px]">
          <strong>Хэрэглэгчийн хэсэг</strong>{" "}
        </h1>

        <div className="border-t-2 border-slate-200 flex flex-col gap-10 pt-10 text-[18px]">
          <label className="input input-bordered flex items-center gap-2">
            <strong>Нэр</strong>
            <input
              type="text"
              className="grow client"
              value={userData.firstname}
            />{" "}
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <strong>Овог</strong>
            <input
              type="text"
              className="grow client"
              value={userData.lastname}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <strong>Имэйл</strong>
            <input type="text" className="grow client" value={userData.email} />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <strong>Утасны дугаар</strong>
            <input
              type="text"
              className="grow client"
              value={userData.cellphone}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <strong>Хаяг</strong>
            <input type="text" className="grow" placeholder="Хаяг" />
          </label>
          <div className="flex gap-2">
            <button className="w-[100px] h-[40px] bg-blue-700 rounded-xl shadow-sm text-white ml-[700px] hover:bg-black">
              <strong>Хадгалах</strong>
            </button>
            {/* <button
              className="w-[100px] h-[40px] bg-white rounded-xl shadow-sm text-black hover:bg-black hover:text-white"
              onClick={() => {
                setLoggedIn(false);
                localStorage.clear();
              }}
            >
              Гарах
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;

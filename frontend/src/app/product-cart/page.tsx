"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { useParams } from "next/navigation";

const Cart = () => {
  const [carts, setCarts] = useState<any>({
    user: "",
    products: [],
  });

  const fetchCartData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8000/carts/id`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("carts", res.data.usercarts);
      setCarts(res.data.usercarts);
    } catch (error) {
      console.log("couldn't get cart", error);
    }
  };
  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center my-10 gap-10">
      <div className="flex text-white gap-32">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary w-[30px] h-[30px]"
          placeholder="1"
          defaultChecked
        />
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary w-[30px] h-[30px]"
          placeholder="2"
        />
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary w-[30px] h-[30px]"
          placeholder="3"
        />
      </div>
      <div className="w-[700px] h-[650[px] rounded-3xl flex flex-col gap-5 border border-2-slate-100 shadow-md px-5 py-5 ">
        <h1 className="text-[24px]">
          <strong>Сагс</strong>
        </h1>
        <div className="w-[600px] h-[132px] flex  border border-2-slate-100 rounded-2xl shadow-md items-center justify-evenly">
          <img
            src="https://s3-alpha-sig.figma.com/img/793e/eb33/5cdac94bd8a779bc3f3578fff70e9fab?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=monSf8T4tt7Zg4RjmkePbbNJtQxt1CsX4bZTXGzTWNltMsCac-t9wc7iE0V5-jEhGBf1d6dKt3mFmyBmVkpzPDJnIGLumF2erpSCbJZomBf7vU5~cLb10~h709yRKp7m98IGgwR9fea3NZXDxhQQ8se0JI1I3ACitgUPn0lKRFOdj~b9MNfrpzmjW5E7D75oNCb3M4wiC9QZTNHov0yOOkTnzyzZJYcElX4wMJTs2wgzBws88aJikKW5J-uDz5CJD1umikL7PxdsoHbu9JJD1wTRbBa5C1u2tyVrni1HllZfumP53ssgf7lK9PwsayXXpz3CfdbLourCUPHOC0IK4g__"
            alt=""
            className="w-[110px] h-[110px] rounded-2xl"
          />

          <div className="flex flex-col gap-2 text-black">
            <h1 className=""></h1>
            <input
              type="number"
              className="w-[40px] h-[32px]"
              placeholder="1"
            />
            <p></p>
            <h1>
              <strong>₮</strong>
            </h1>
          </div>
          <div>
            {" "}
            <Trash2 size={24} />
          </div>
        </div>
        <h1 className="flex justify-between pl-5 pr-16">
          <p>
            <strong>Нийт төлөх дүн:</strong>
          </p>
          <p>
            <strong>₮</strong>
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Cart;

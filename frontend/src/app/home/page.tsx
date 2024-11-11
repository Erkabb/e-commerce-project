"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../context/user-context";
import Link from "next/link";

const MainContent = () => {
  const [productData, setProductData] = useState<any[]>([]);
  const AddProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/products/allproducts`
      );
      console.log("home page:", response.data.products);
      setProductData(response.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    AddProduct();
  }, []);
  return (
    <main className="w-full ">
     
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1730774487035-05673e0c5747?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="w-full h-[469px] flex flex-col headerPic justify-end pl-80 pb-5 text-white"
      >
        <h1 className="text-[18px]">Wildflower Hoodie </h1>
        <p className="text-[36px]">
          <strong>120 000₮</strong>
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mx-96 my-10 ">
      {productData?.map((prod) => ( <Link href={`/${prod._id}`} key={prod.id}>
            <div className=" w-[247px] h-[386px] card bg-base-100 flex flex-col items-center">
            <figure>
              <img 
                src={prod.images[0]}
                alt=""
                className="rounded-2xl h-[320px]" />
            </figure>
            <div className="w-[240px] card-body pl-2 text-[20px] text-start">
              <h2 className="card-title ">{prod.name}</h2>
              <p>
                <strong>{prod.price}₮</strong>
              </p></div>
            </div>
         </Link>
        ))}
          </div>
         
   
    </main>
  );
};

export default MainContent;

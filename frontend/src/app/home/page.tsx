"use client";
import React from "react";
import Link from "next/link";
import { useProducts } from "@/context/products-context";
import Image from "next/image";
import * as motion from "framer-motion/client"


const MainContent = () => {
    const {products }=useProducts();

 return (
    <main className="w-full flex flex-col gap-10 items-center pb-10">
     
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
      <div className="flex flex-wrap gap-4 justify-center">
      {products?.map((prod) => ( <Link href={`/${prod._id}`} key={prod._id}>
        <motion.div
        whileHover={{
          scale:0.9
        }}
        className="card bg-base-100 w-[247px] rounded-2xl shadow-xl flex flex-col items-center relative">
                <figure>
                  <Image
                    src={prod.images[0]}
                    alt="Shoes"
                    className="rounded-2xl h-[320px]"
                    width={247}
                    height={320}
                />
                </figure>
                <div className="card-body w-full pl-5  p-3 text-sm text-start ">
                  <h2 className="card-title ">{prod.name}</h2>
                  <p>
                    <strong>{prod.price}₮</strong>
                  </p>
                </div>
              </motion.div>
         </Link>
        ))}
          </div>
         
   
    </main>
  );
};

export default MainContent;

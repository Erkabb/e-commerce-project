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
    <main className="w-full">
     
      <div
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/3708/a364/2cc93e10c62fdcfbc65fcc2ebd1c8aac?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mkr~BM8SrxlS6Qn0WwA~5lt7ZaEgY8Ssr~dYmHi5VtyDQvpB7B8YsmaSaaulbE5TuTylklhjiGloOnxJTrYWtkJdQQxbWdw6ac5PBbnVlWkNirMAF6cGGjk3YBMH9P9eqmbULF9ur4fEQOuD-RGG-oiyqG-fBdUIHFJ~IBMU72Tfuv0iKRsY0TBOrIj0cw4qyAw-e4qgztf346~JzfcitLNY5SzX4wRn69aBMEp-Qk-gi3~okx2EIEWM~mk8jIIKCiAwKmNRRYBSXxvzS3v9Xshp3JQvJbsccq4n41qJAvxqd77KlZtxWoCvv2l1VLmIeqIaE4Z~WuWqkcGeX2yzrw__)`,
        }}
        className="w-full h-[469px] flex flex-col headerPic justify-end pl-80 pb-5"
      >
        <h1 className="text-[18px]">Wildflower Hoodie </h1>
        <p className="text-[36px]">
          <strong>120 000₮</strong>
        </p>
      </div>
      {/* <div className="grid grid-rows-6 grid-cols-4 gap-4 w-[1038px] h-[2400px] m-auto my-10 "></div><div className="subPic"> */}
       
          {/* <h1>The Prompt Magazine</h1>
          <p className="text-">
            <strong>120 000₮</strong>
          </p> */}
      
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

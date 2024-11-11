"use client";
import axios from "axios";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as motion from "framer-motion/client"

const Products = () => {
  const [productsData, setProductsData] = useState<any[]>([]);
  const fetchProductsData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/products/allproducts`);
      console.log("product:", res.data.products);
      setProductsData(res.data.products);
    } catch (error) {
      console.log("error", error);
    }
  };


  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className=" w-[790px] flex flex-wrap gap-5">
      {productsData?.map((product) => (
        <Link href={`/${product._id}`} key={product.id}>
          <motion.div
            whileHover={{
            scale:0.9
            }}
            className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl flex flex-col items-center">
            <figure>
              <img
                src={product.images[0]}
                alt="Shoes"
                className="rounded-2xl h-[320px]"
              />
            </figure>
            <div className=" w-[240px] card-body px-2 py-3 text-sm text-start flex items-center justify-between ">
              <div>
                <h2 className="card-title">{product.name}</h2>
                <p className="">
                  <strong>{product.price}₮</strong>
                </p>
              </div>
              <Heart size={20} />
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};
export default Products;

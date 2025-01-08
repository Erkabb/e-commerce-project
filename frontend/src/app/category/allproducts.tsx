"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import * as motion from "framer-motion/client"
import { useProducts } from "@/context/products-context";
import Image from "next/image";

const Products = () => {
  const {products}=useProducts();

  return (
    <div className=" w-[790px] flex flex-wrap gap-5">
      {products?.map((product) => (
        <Link href={`/${product._id}`} key={product._id}>
          <motion.div
            whileHover={{
            scale:0.9
            }}
            className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl flex flex-col items-center">
            <figure>
              <Image
                src={product.images[0]}
                alt="Shoes"
                className="rounded-2xl h-[320px]"
                width={247}
                height={320}
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

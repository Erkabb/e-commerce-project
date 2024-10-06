"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        <Link href={"/product.detail"}>
        <div className="card bg-base-100 w-[247px] h-[386px] rounded-2xl shadow-xl flex flex-col items-center">
          <figure>
            <img
              src={product.images[0]}
              alt="Shoes"
              className="rounded-2xl h-[320px]"
            />
          </figure>
          <div className="card-body w-full pl-5 text-[20px] text-start ">
            <h2 className="card-title ">{product.name}</h2>
            <p>
              <strong>{product.price}₮</strong>
            </p>
          </div>
        </div></Link>
      ))}
    </div>
  );
};
export default Products;
function fetchProductData() {
  throw new Error("Function not implemented.");
}

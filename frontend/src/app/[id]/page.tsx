"use client";

import { Heart } from "lucide-react";
import axios from "axios";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useUser } from "../context/user-context";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [productData, setProductData] = useState<any>({
    name: "",
    price: "",
    description: "",
    images: [],
    size: "",
  });
  const [productsData, setProductsData] = useState<any[]>([]);
  const { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const { user } = useUser();

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      console.log("one product data:", response.data.product);
      if (response.status === 200) {
        setProductData(response.data.product);
      }
    } catch (error) {
      console.log("get one product is failed", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

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

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/carts/create-cart`,
        {
          user: user?._id,
          product: id,
          quantity: productQuantity,
        }
      );

      if (response.status === 200) {
        console.log("added to cart", id);
        console.log("first", response.data);
        toast.success("added to cart", { autoClose: 60 });
      } else {
        console.log("user not found");
      }
    } catch (error) {
      toast.error("couldn't add to cart", { autoClose: 60 });
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center my-10">
      <div className="flex h-full justify-center gap-5 mb-10">
        <div className="w-[420px] h-[520px] rounded-2xl ">
          <img
            src={productData.images[0]}
            alt=""
            className="w-[420px] h-[520px] rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-start">
          <h1 className="text-[24px] flex gap-3 items-center">
            <strong>{productData.name}</strong>

            <Heart />
          </h1>
          <p className="text-[16px]">{productData.description}</p>
          <div className="flex gap-3">
            <button
              className="w-[30px] h-[30px] rounded-full border-2 border-slate-300"
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              +
            </button>
            <p>{productQuantity}</p>
            <button
              className="w-[30px] h-[30px] rounded-full border-2 border-slate-300"
              onClick={() => setProductQuantity(productQuantity - 1)}
            >
              -
            </button>
          </div>
          {/* {productData.size?.map((size: any) => (
            <button className="w-[30px] h-[30px] rounded-full border-2 border-slate-300">
              {size[0]}
            </button>
          ))} */}
          <h1 className="text-[22px]">
            <strong>{productData.price}₮</strong>
          </h1>
          <button
            className="btn w-[175px] h-[35px] bg-blue-600 rounded-3xl text-white"
            onClick={handleAddToCart}
          >
            <strong>Add to cart</strong>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-[24px]">
          <strong>Холбоотой бараа</strong>
        </h1>
        <div className=" w-[790px] flex flex-wrap gap-5">
          {productsData?.map((product: any) => (
            <Link href={`/${product._id}`} key={product.id}>
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;

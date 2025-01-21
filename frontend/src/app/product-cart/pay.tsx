"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";
import type { Cart } from "@/lib/types";
import Image from "next/image";
import { toast } from "sonner";

const Cart = () => {
  const [step, setStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    cellphone: "",
    pfp: "",
    address: "",
  });
  const [cartData, setCartData] = useState<Cart>([
		{
      product: {
        _id: "",
        name: "",
        description: "",
        price:0,
        images: [""],
        isBrandNew: true,
        discount: 0,
      },
      soldQuantity: 0
    },
	]);

	const getCartData = async () => {
		try {
			const userToken = localStorage.getItem("token");
			const response = await axios.get(`http://localhost:8000/carts/getcart`, {
				headers: { Authorization: `Bearer ${userToken}` },
			});

			if (response.status === 200) {
        console.log("first", response.data.cart.products);
				setCartData(response.data.cart.products);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
			toast.error("Failed to add to cart");
		}
	};
  const handleChange = () => {
    if (isChecked === true) {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8000/users/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data.user);
    } catch (error) {
      console.log("couldn't get user's info", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
		getCartData();
	}, []);

  return (
    <div className="w-full h-full flex flex-col items-center my-10 gap-10">
      <div className="flex text-black gap-32 text-[20px]">
        <button
          className=" w-[40px] h-[40px] border-2 border-black rounded-full text-center "
          onChange={() => setIsChecked(true)}
        >
          <strong>1</strong>
        </button>
        <div
          className="w-[40px] h-[40px] border-2 border-black rounded-full text-center"
          onChange={() => setIsChecked(true)}
        >
          <strong>2</strong>
        </div>
        <div
          className="w-[40px] h-[40px] border-2 border-black rounded-full text-center"
          onChange={() => setIsChecked(true)}
        >
          <strong>3</strong>
        </div>
      </div>
      {step === 1 && (
        <div className="w-[700px] h-[650[px] rounded-3xl flex flex-col gap-5 border border-2-slate-100 shadow-md px-5 py-5 ">
          <h1 className="text-[24px]">
            <strong>Сагс</strong>
          </h1>
          {cartData?.map((prod, idx) => {
            const { product }=prod;
            console.log("produc", product);
            return (
              <div className="w-[600px] h-[132px] flex  border border-2-slate-100 rounded-2xl shadow-md items-center justify-evenly gap-24"
              key={idx}>
                <div className="flex gap-10">
                  <Image
                    src={product?.images[0]}
                    alt=""
                    className="w-[110px] h-[110px] rounded-2xl"
                    width={110}
                    height={110}
                  />

                  <div className="flex flex-col gap-2 text-black">
                    <h1 className="">
                      {/* <strong>{product.name}</strong> */}
                    </h1>
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
                    <h1 className="text-[18px]">
                      {/* <strong>{product.price}₮</strong> */}
                    </h1>
                  </div>
                </div>
                <div>
                  {" "}
                  <Trash2 size={24} />
                </div>
              </div>
            );
          })}
          <div className="flex flex-col gap-5">
            <h1 className="flex justify-between pl-5 pr-16">
              <p>
                <strong>Нийт төлөх дүн:</strong>
              </p>
              <p>
                <strong>{}₮</strong>
              </p>
            </h1>
            <button
              className="btn w-[200px] h-[40px] border-2 bg-blue-700 rounded-2xl text-white ml-96"
              onClick={handleChange}
            >
              Худалдаж авах
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-[24px]">
              <strong>Сагс</strong>
            </h1>
            <div className="flex flex-col gap-5">
              {cartData?.map((prod, idx) => {
                const {product}=prod;
                return (
                  <div className="w-[600px] h-[132px] flex  border border-2-slate-100 rounded-2xl shadow-md items-center justify-evenly gap-24"
                  key={idx}>
                    <div className="flex gap-10">
                      <img
                        src={product.images[idx]}
                        alt=""
                        className="w-[110px] h-[110px] rounded-2xl"
                      />

                      <div className="flex flex-col gap-2 text-black">
                        <h1 className="" key={idx}>
                          <strong>{product.name}</strong>
                        </h1>
                        <input
                          type="number"
                          className="w-[40px] h-[32px]"
                          placeholder="1"
                        />

                        <h1 className="text-[18px]">
                          <strong>{product.price}₮</strong>
                        </h1>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <Trash2 size={24} />
                    </div>{" "}
                  </div>
                );
              })}
              <h1 className="flex justify-between pl-5 pr-16">
                <p>
                  <strong>Нийт төлөх дүн:</strong>
                </p>
                <p>
                  <strong>{}₮</strong>
                </p>
              </h1>
            </div>
          </div>
          <div className="border-t-2 border-slate-200 flex flex-col gap-10 pt-10 text-[18px]">
            <h1 className="text-[22px]">
              <strong>Хүргэлтийн мэдээлэл оруулах</strong>
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <strong>Нэр</strong>
              <input
                type="text"
                className="grow client"
                value={userData.firstname}
              />
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
              <strong>Утасны дугаар</strong>
              <input
                type="text"
                className="grow client"
                value={userData.cellphone}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <strong>Хаяг</strong>
              <input type="text" className="grow" value={userData.address} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <strong>Нэмэлт мэдээлэл</strong>
              <input
                type="text"
                className="grow"
                placeholder="Нэмэлт мэдээлэл"
              />
            </label>
            <div className="flex justify-end">
              <button
                className="btn w-[200px] h-[40px] border-2 bg-blue-700 rounded-2xl text-white "
                onClick={handleChange}
              >
                Худалдаж авах
              </button>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <h1 className="text-center text-[24px]">
          <strong>Нууц үг сэргээх</strong>
          <button
            className="btn w-[200px] h-[40px] border-2 bg-blue-700 rounded-2xl text-white ml-96"
            onClick={handleChange}
          >
            Худалдаж авах
          </button>
        </h1>
      )}
    </div>
  );
};

export default Cart;

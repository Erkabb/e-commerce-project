"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import * as motion from "framer-motion/client"
import { useUser } from "../../context/user-context";
import Image from "next/image";
import { useProducts } from "@/context/products-context";
import { useProduct } from "@/context/perproduct-context";
import { useCategories } from "@/context/category-context";
import { Heart } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';
import { toast } from "sonner";

type CartItem ={
  _id:string,
  user:string,
  products:[{product:string; quantity:number}],
  totalAmount:number
}[];

const ProductDetail = () => {
  const { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const { user } = useUser();
  const {products}=useProducts();
  const {product}=useProduct();
  const {categories}=useCategories();
  const [cart, setCart]=useState<CartItem | []>([]);
  const handleAddToCart=async()=>{
    if (!user) {
      toast.error("Хэрэглэгч нэвтэрнэ үү.");
      return;
    }
  try {
      const responses = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/carts/create-cart`, {
            user: user._id,
            products: [{product: id,
            quantity: productQuantity}],
            totalAmount:4
          })
      setCart(responses.data.cart);
      toast.success("Бараа сагсанд нэмэгдлээ!");
    } catch (error) {
      toast.error("Сагсанд бараа нэмэхэд алдаа гарлаа.");
    }
  };
console.log("cart", cart);
  return (
    <div className="w-full h-full flex flex-col items-center my-10">
      <div className="flex h-full justify-center gap-10 mb-10">
        <div className="w-[420px] h-[520px] rounded-2xl ">
        <Image
  src={product?.images[0] || "/placeholder.png"} //
  alt={product?.name || "Product image"} // 
  className="rounded-2xl shadow-lg w-[400px] h-[475px]"
  width={400}
  height={475}
/>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <div className="text-[24px] flex gap-16 items-center">
          <p className="flex flex-col"><strong>{product?.name}</strong>
           <span className="text-sm">{product?.description}</span></p>
            <Heart size={25} className="heart"/>
          </div>
          <h1 className="text-md">
            <strong>{product?.price}₮</strong>
            
          </h1>
          <p className="text-sm"></p>
          <div className="flex flex-nowrap gap-3">
          {categories?.map((size)=> 
            <Button className="h-[30px] rounded-2xl border-2 border-slate px-2 hover:border-2 hover:border-black"
            key={size._id}>
              {size.size}
            </Button>
          )}
         </div>
          <div className="flex gap-3 items-center">
            <Button
              className="w-[30px] h-[30px] rounded-full border-2 border-slate-300 hover:border-2 hover:border-black"
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              <span><Plus size={14} className="heart"/></span>
            </Button>
            <p className="text-md">{productQuantity}</p>
            <Button
              className="w-[30px] h-[30px] rounded-full border-2 border-slate-300 hover:border-2 hover:border-black "
              onClick={() => setProductQuantity(productQuantity - 1)}
            >
            <span><Minus size={14} className="heart"/></span>
            </Button>
          </div>
          <motion.button
            whileTap={{
              scale:1.1
            }}
            className="btn w-[175px] h-[35px] bg-blue-600 rounded-3xl text-white"
            onClick={handleAddToCart}
          >
            <strong>Add to cart</strong>
          </motion.button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-[24px]">
          <strong>Холбоотой бараа</strong>
        </h1>
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
                <div className="card-body w-full pl-5 p-3 text-sm text-start ">
                  <h2 className="card-title ">{product.name}</h2>
                  <p>
                    <strong>{product.price}₮</strong>
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;

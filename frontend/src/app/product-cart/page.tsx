'use client';
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Trash2 } from "lucide-react";
import type { Cart } from '@/lib/data';
import axios from 'axios';
import { toast } from 'sonner';
import Image from 'next/image';


const Cart = () => {
    const [productQuantity, setProductQuantity]=useState(1);
   const [cartData, setCartData]=useState<Cart>([{
    product:{
        _id:'',
        name:'',
        description:'',
        price: 0,
        images:[''],
        isBrandNew:true,
        discount:0,
    },
    soldQuantity:0,
   }]);
   const getCartData=async()=>{
    try {
        const userToken=localStorage.getItem('token');
        const res=await axios.get(`http://localhost:8000/carts/getcart`, {
            headers: {Authorization: `Bearer ${userToken}`},
        });
        if(res.status===200){
            console.log("cart", res.data.cart.products);
            setCartData(res.data.cart.products);
        }
    } catch (error) {
        toast.error('Failed to add to cart');
    }
   };
   useEffect(()=>{
    getCartData();
   }, []);
  return (
    <div className='w-full h-full my-10 gap-10'>
        <div className='xl:w-[700px] md:w-[500px] sm:w-[250px] rounded-3xl flex flex-col gap5 border border-slate-500 shadow-md px-5 py-5 m-auto'>
            <h1 className='text-md text-center font-semibold'>
                Сагс
            </h1>
            <div className='mx-10 flex border border-slate-100 rounded-2xl shadow-md items-center justify-evenly gap-24'>
                {cartData?.map((prod, idx)=>{
                    const {product}=prod;
                    return (
                    <div className='flex gap-10' key={idx}>
                        <Image src={product?.images[0]}
                        alt=""
                        className="w-[110px] h-[110px] rounded-2xl"
                        width={110}
                        height={110}/>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-sm font-semibold'>
                               {product.name}
                            </h1>
                            <div className='flex gap-3'>
                            <ChevronUp size={24} onClick={()=>setProductQuantity(productQuantity+1)}/>
                                <p>{productQuantity}</p>
                                <ChevronDown size={24}/>
                            </div>
                            <h1>
                                {product.price}
                            </h1>
                        </div>
                        <Trash2 size={24} onClick={()=>setProductQuantity(productQuantity-1)}/>
                    </div>)
                })}
                
            </div>  
            <Button className='btn border bg-[#000] rounded-xl text-white'>
                    Худалдаж авах
                </Button>
        </div>
    </div>
  )
}

export default Cart
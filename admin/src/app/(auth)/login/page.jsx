"use client";

import React, { useEffect } from 'react'
import Link from "next/link";
import { useState } from 'react';
import { div } from 'framer-motion/client';

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState(1);

useEffect(() => {
        if (isVisible === true) {
            setStep(step + 1);
        } else {
            setStep(step - 1);
        }
    })
  return (
      <div className='flex'>
          {step === 1 && (
              <div className='flex'>
              <div className='w-6/12 bg-black max-h-screen'>
              <p>hi</p>
          </div>
          <div className="flex flex-col items-center gap-10 bg-slate-100 py-10">
    <h1 className="text-[40px]"><strong>E-COMMERCE</strong></h1>
    <div className="flex flex-col gap-7 text-center bg-white py-5 w-[500px] h-[498px] items-center rounded-3xl">
      <h1 className="text-[40px]"><strong>Sign in</strong></h1>
      <input
            type="text"
            className="input  border-2 border-slate-100  w-[400px] h-[60px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаяг"
           
          />

          <input
            type="text"
            className="input border-2 border-slate-100 rounded-3xl w-[400px] h-[60px]  bg-white pl-2"
            placeholder="Нууц үг"
           
      />
   
            <button className="text-[20px] text-center">
              Нууц үг мартсан
            </button>
    
      
      <button
            className="btn btn-wide bg-blue-700  w-[400px] h-[60px] border-2 rounded-3xl text-white"
            
          >
            Нэвтрэх
          </button>
    </div>
    <div className="text-center">
      <p>Not a member?</p>
      <Link href={"/signup"} onClick={handlechange}>Sign up</Link>
    </div>
                  </div>
                  </div>
          )}
          {step === 2 && (
              <div className='flex'>
               <div className="flex flex-col items-center gap-10 bg-slate-100 py-10">
               <h1 className="text-[40px]"><strong>E-COMMERCE</strong></h1>
               <div className="flex flex-col gap-7 text-center bg-white py-5 w-[500px] h-[498px] items-center rounded-3xl">
                 <h1 className="text-[40px]"><strong>Sign in</strong></h1>
                 <input
                       type="text"
                       className="input  border-2 border-slate-100  w-[400px] h-[60px] rounded-3xl bg-white pl-2"
                       placeholder="Имэйл хаяг"
                      
                     />
           
                     <input
                       type="text"
                       className="input border-2 border-slate-100 rounded-3xl w-[400px] h-[60px]  bg-white pl-2"
                       placeholder="Нууц үг"
                      
                 />
              
                       <button className="text-[20px] text-center">
                         Нууц үг мартсан
                       </button>
               
                 
                 <button
                       className="btn btn-wide bg-blue-700  w-[400px] h-[60px] border-2 rounded-3xl text-white"
                       
                     >
                       Нэвтрэх
                     </button>
               </div>
               <div className="text-center">
                 <p>Not a member?</p>
                          <Link href={"/signup"}>Sign up</Link>
               </div>
                  </div>
                  <div className='w-6/12 bg-red max-h-screen'>
              <p>hi</p>
          </div>
                             </div>
          )}
    </div>
  )
}

export default Login
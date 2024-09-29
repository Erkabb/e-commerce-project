import { User, ShoppingCart, Heart, Search  } from 'lucide-react';
import Link from 'next/link';

const SecondHeader = () => {
    return (
        <header className="w-full h-[88px] bg-black flex text-[14px] items-center justify-evenly">
        <div className="flex gap-3 ">
          <div className="flex gap-3">
            <img src="./Vector.png" alt="" />
            <p className="text-white ">ECOMMERCE</p>
          </div>
          <p className="text-slate-300">Ангилал</p>
        </div>
        <div className="flex  rounded-3xl  text-slate-100 items-center gap-2">
          <Search />
          <input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="grow  w-[300px] h-[40px] rounded-3xl bg-[#18181B] text-slate-100 pl-5"
          />
        </div>
        <div className="flex gap-2 items-center">
          <ShoppingCart className="cart" />
          <Heart className="cart" />
               <Link href={"/user.profile"}><User className="cart"/></Link> 
        </div>
      </header>
    );
  };
    
export default SecondHeader;
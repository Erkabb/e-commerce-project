import { User, ShoppingCart, Heart, Search } from "lucide-react";
import Link from "next/link";
import CategoryOnHeader, { categories } from "./category.onheader";

const SecondHeader = () => {
  return (
    <header className="flex flex-col">
      <div className="w-full h-[88px] bg-black flex text-[16px] items-center justify-evenly">
        <div className="flex gap-3 ">
          <div className="flex gap-3">
            <img src="./Vector.png" alt="" />
            <Link href={"/home"}>
              <p className="text-white ">
                <strong>ECOMMERCE</strong>
              </p>
            </Link>
          </div>
          <Link href={"/category"}>
            <p className="text-slate-300">
              <strong>Бүтээгдэхүүн</strong>
            </p>
          </Link>
        </div>
        <div className="flex  rounded-3xl  text-slate-100 items-center gap-2">
          <Search />
          <input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="grow  w-[300px] h-[40px] rounded-3xl bg-[#18181B] text-slate-100 pl-5"
          />
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"/likedproducts"}>
            <ShoppingCart className="cart" />
          </Link>
          <Link href={"/likedproducts"}>
            <Heart className="cart" />
          </Link>
          <Link href={"/userprofile"}>
            <User className="cart" />
          </Link>
        </div>
      </div>
      <div className="w-[full] h-[80px] flex bg-black text-[24px] text-white justify-center gap-10">
        {categories.map((categories) => (
          <CategoryOnHeader cat={categories.cat} />
        ))}
      </div>
    </header>
  );
};

export default SecondHeader;

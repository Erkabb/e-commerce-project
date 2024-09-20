import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[88px] bg-black flex">
      <div>
        <div>
          <img src="./Vector.png" alt="" />
          <p className="text-white">ECOMMERCE</p>
        </div>
        <p className="text-white">Ангилал</p>
      </div>
      <div>
        <input type="text" placeholder="Бүтээгдэхүүн хайх" className="grow" />
      </div>
      <div>
        <button className="text-white">Бүртгүүлэх</button>
        <button className="text-white">Нэвтрэх</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
// import { PiPhoneCallLight } from "react-icons/pi";
// import { IoMailOutline } from "react-icons/io5";
// import { MdCopyright } from "react-icons/md";
// import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[282px] bg-black">
      <div>
        <div>
          <img src="./Vector.png" alt="" />
        </div>
        <div>
          {/* <PiPhoneCallLight /> */}
          <p>(976)7007-1234</p>
          {/* <IoMailOutline /> */}
          <p>contact@ecommerce.mn</p>
        </div>
      </div>
      <div>
        <div>
          {/* <MdCopyright /> */}
          <p>2024 Ecommerce MN</p>
        </div>
        <div>
          {/* <FaFacebookSquare />
          <FaInstagramSquare />
          <FaSquareXTwitter />
          <FaLinkedin /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

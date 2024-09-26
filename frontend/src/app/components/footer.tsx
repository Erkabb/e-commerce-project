import React from "react";
import { Mail } from "lucide-react";
import { Copyright } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Phone } from "lucide-react";
import { Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full h-[340px] bg-black flex flex-col">
      <div className=" h-[250px] flex justify-between mx-20 py-20 border-b-2 border-slate-800">
        <div>
          <img src="./Vector.png" alt="" />
        </div>
        <div className="text-white flex gap-5">
          <Phone className="cart" />
          <p>(976)7007-1234</p>
          <Mail className="cart" />
          <p>contact@ecommerce.mn</p>
        </div>
      </div>
      <div className="flex justify-between mx-20 my-20">
        <div className="text-[14px] text-white flex items-center">
          <Copyright className="cart" size={13} />
          <p>2024 Ecommerce MN</p>
        </div>
        <div className="flex gap-5">
          <Facebook className="cart" />
          <Instagram className="cart" />
          <Linkedin className="cart" />
          <Twitter className="cart" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

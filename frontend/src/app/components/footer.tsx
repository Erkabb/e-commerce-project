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
    <footer className="w-full h-[282px] bg-black flex">
      <div className="flex">
        <div>
          <img src="./Vector.png" alt="" />
        </div>
        <div>
          <Phone />
          <p>(976)7007-1234</p>
          <Mail />
          <p>contact@ecommerce.mn</p>
        </div>
      </div>
      <div>
        <div>
          <Copyright />
          <p>2024 Ecommerce MN</p>
        </div>
        <div>
          <Facebook />
          <Instagram />
          <Linkedin />
          <Twitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

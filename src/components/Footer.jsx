import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-5 mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg shadow-inner">
      <img
        className="w-auto h-12 transition-transform duration-300 hover:scale-105"
        src={assets.logo}
        alt="Logo"
      />
      <p className="flex-1 border-l border-gray-300 pl-4 text-sm text-gray-500 max-sm:hidden">
        © GreatStack.dev | All rights reserved
      </p>
      <div className="flex gap-3">
        <img
          width={38}
          className="rounded-full shadow hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
          src={assets.instagram_icon}
          alt="Instagram"
        />
        <img
          width={38}
          className="rounded-full shadow hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
          src={assets.twitter_icon}
          alt="Twitter"
        />
        <img
          width={38}
          className="rounded-full shadow hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
          src={assets.facebook_icon}
          alt="Facebook"
        />
      </div>
    </div>
  );
};

export default Footer;

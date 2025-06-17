import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-8 sm:p-16 lg:p-24 rounded-lg flex flex-col lg:flex-row items-center justify-between overflow-hidden min-h-[360px]">
        <div className="z-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md text-gray-800 drop-shadow">
            Download Mobile App For Better Experience
          </h1>
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              <img
                className="h-12 hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
                src={assets.play_store}
                alt="Play Store"
              />
            </a>
            <a href="#" className="inline-block">
              <img
                className="h-12 hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
                src={assets.app_store}
                alt="App Store"
              />
            </a>
          </div>
        </div>
        <img
          className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden drop-shadow-xl"
          src={assets.main_img}
          alt="App Preview"
        />
      </div>
    </div>
  );
};

export default AppDownload;




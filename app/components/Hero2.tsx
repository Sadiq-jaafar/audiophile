import React from "react";
import Header from "./Header";
import Image from "next/image";
import heroImage from "../../public/headphone.svg";

type HeroProps = {
  name: string;
};

function Hero({ name }: HeroProps) {
  return (
    <div
      className=" h-48
    relative w-full flex flex-col lg:flex-row items-center justify-center gap-4
    bg-[#0E0E0E] lg:bg-none
    opacity-100 top-0
     lg:h-[336px]
    px-0 sm:px-4 md:h-[336px] md:px-8 lg:px-[165px]
  "
    >
      <Header />
      <div
        className=" p-0 w-full mt-12 flex   items-center  justify-center  gap-4
        
        
        
        "
      >
        <span className=" text-[28px] md:text-[40px] text-white">{name}</span>
      </div>
    </div>
  );
}

export default Hero;

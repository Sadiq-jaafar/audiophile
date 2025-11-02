import React from "react";
import audiophile from "../../public/audiophile.svg";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/icon-facebook.svg";
import twitter from "../../public/icon-twitter.svg";
import instagram from "../../public/icon-instagram.svg";

const Footer = () => {
  return (
    <footer
      className="
        w-full bg-black text-white mt-10  pb-12
        flex flex-col items-center justify-center
        lg:flex-col lg:w-full lg:px-[165px] lg:h-[365px]
        md:w-[768px] md:h-[400px] 
      "
    >
      <div className="md:-mt-27 lg:-ml-250 mb-10 w-[101px] h-1 bg-[#D87D4A] "></div>
      <div
        className=" w-full items-center lg:flex lg:flex-row lg:w-full lg:justify-between
      md:mx-auto md:w-[689px] md:flex md:flex-row md:justify-between
      "
      >
        <div className="ml-22 md:ml-0">
          <Image alt="logo" src={audiophile} />
        </div>

        <div className="flex  flex-col  lg:flex-row gap-8 font-manrope font-bold text-[13px] uppercase items-center justify-center mt-4 lg:mt-0 md:flex-row">
          <Link className="hover:text-[#D87D4A]" href="/">
            Home
          </Link>
          <Link className="hover:text-[#D87D4A]" href="/">
            Headphones
          </Link>
          <Link className="hover:text-[#D87D4A]" href="/">
            Speakers
          </Link>
          <Link className="hover:text-[#D87D4A]" href="/">
            Earphones
          </Link>
        </div>
      </div>

      <div
        className=" text-[15px] mt-8 text-center
      
       lg:w-[540px] lg:h-[100px] lg:text-start lg:items-start lg:-ml-143 lg:mx-0
       md:mx-auto md:w-[689px] "
      >
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div
        className=" text-[15px] mt-8 mbs-12
      md:-ml-112
       lg:w-[540px] lg:h-[100px] lg:text-start lg:items-start lg:-ml-143"
      >
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      <div
        className=" flex flex-row gap-8 mt-5
        md:-mt-4 md:ml-140
       lg:-mt-34 lg:ml-250
      "
      >
        <a className="hover:text-[#D87D4A]" href="">
          <Image alt="facebook" src={facebook} />
        </a>
        <a className="hover:text-[#D87D4A]" href="">
          <Image alt="twitter" src={twitter} />
        </a>
        <a className="hover:text-[#D87D4A]" href="">
          <Image alt="instagram" src={instagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

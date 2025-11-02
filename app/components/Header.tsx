import React from "react";
import Image from "next/image";
import audiophile from "../../public/audiophile.svg";
import cart from "../../public/cart.svg";
import Link from "next/link";
import menu from "../../public/nav btn.svg";

const Header = () => {
  return (
    <div
      className='w-[calc(100%-78px)]" h-7 opacity-100 top-0 left-[39px] right-[39px] absolute text-center text-2xl font-normal leading-7 text-white font-geist-mono  p-0 items-center flex flex-row justify-between pb-8 pt-8 md:border-b-2
    lg:w-[calc(100%-330px)] lg:left-[165px] lg:right-[165px]


'
    >
      <div className="lg:hidden">
        <button>
          <Image alt="menu" src={menu} />
        </button>
      </div>

      <div
        className="
    md:mr-110
    lg:mr-0"
      >
        <Image alt="logo" src={audiophile} />
      </div>
      <div
        className=" hidden font-Manrope font-weight-700 text-white text-[13px] gap-8 items-center justify-center text-transform: uppercase 
    lg:flex lg:flex-row"
      >
        <Link className="hover:text-[#D87D4A]" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-[#D87D4A]" href={"/"}>
          Headphone
        </Link>
        <Link className="hover:text-[#D87D4A]" href={"/"}>
          Speakers
        </Link>
        <Link className="hover:text-[#D87D4A]" href={"/"}>
          Earphones
        </Link>
      </div>
      <div className="">
        <Image alt="cart" src={cart} />
      </div>
    </div>
  );
};

export default Header;

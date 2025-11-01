import Image from "next/image";
import Hero from "./components/Hero";
import headphone from "../public/headphone home.svg";
import speaker from "../public/homeSpeaker.svg";
import earphone from "../public/homeEarphone.svg";
import shopBtn from "../public/shopbtn.svg";
import arrow from "../public/Path 2.svg";

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        className=" w-screen gap-4 px-6 m-0 mt-8 h-[683px] flex flex-col items-center justify-center
      md:flex-row md:gap-4 md:h-[217px] md:align-bottom 
      lg:px-[165px] lg:gap-8  
      "
      >
        <div className="relative w-[327px] h-[217px] flex flex-col items-center ">
          {/* Image positioned above, overlapping the div below */}
          <Image
            className="z-10 " // pushes image down a bit
            src={headphone}
            alt="headphone"
            width={80}
            height={104}
          />

          {/* Gray box — maintains its own height */}
          <div className="w-full gap-6 h-[165px] pt-[59px] rounded-lg bg-[#F1F1F1] -mt-10 text-center items-center justify-center">
            <p
              className="top-[111px] font-manrope font-semibold text-[15px] uppercase;
"
            >
              Headphones
            </p>
            <button className="top-4">
              <span
                className="flex gap-2 items-center justify-center font-manrope font-semibold text-[13px] uppercase text-[#4a4545]
"
              >
                shop <Image alt="shop" src={arrow} />
              </span>
            </button>
          </div>
        </div>
        <div className="relative w-[327px] h-[217px] flex flex-col items-center ">
          {/* Image positioned above, overlapping the div below */}
          <Image
            className="z-10 " // pushes image down a bit
            src={speaker}
            alt="speaker"
            width={84.04}
            height={104}
          />

          {/* Gray box — maintains its own height */}
          <div className="w-full gap-6 h-[165px] pt-[59px] rounded-lg bg-[#F1F1F1] -mt-10 text-center items-center justify-center">
            <p
              className="top-[111px] font-manrope font-semibold text-[15px] uppercase;
"
            >
              Speakers
            </p>
            <button className="top-4 ">
              <span
                className="flex gap-2 items-center justify-center font-manrope font-semibold text-[13px] uppercase text-[#4a4545]
"
              >
                shop{" "}
                <Image
                  alt="shop"
                  src={arrow}
                  // width={}
                  // height={18}
                />
              </span>
              {/* <span className="">
     <Image
    alt="shop"
    src={arrow} 
    // width={}
    // height={18}
    />
  </span>  */}
            </button>
          </div>
        </div>
        <div className="relative w-[327px] h-[217px] flex flex-col items-center ">
          {/* Image positioned above, overlapping the div below */}
          <Image
            className="z-10 " // pushes image down a bit
            src={earphone}
            alt="earphone"
            width={103}
            height={104}
          />

          {/* Gray box — maintains its own height */}
          <div className="w-full gap-6 h-[165px] pt-[59px] rounded-lg bg-[#F1F1F1] -mt-10 text-center items-center justify-center">
            <p
              className="top-[111px] font-manrope font-semibold text-[15px] uppercase;
"
            >
              Headphones
            </p>
            <button className="top-4">
              <span
                className="flex gap-2 items-center justify-center font-manrope font-semibold text-[13px] uppercase text-[#4a4545]
"
              >
                shop <Image alt="shop" src={arrow} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

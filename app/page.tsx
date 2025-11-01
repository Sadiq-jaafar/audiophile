import Image from "next/image";
import Hero from "./components/Hero";
import headphone from "../public/headphone home.svg";
import speaker from "../public/homeSpeaker.svg";
import earphone from "../public/homeEarphone.svg";
import shopBtn from "../public/shopbtn.svg";
import arrow from "../public/Path 2.svg";
import speaker2 from "../public/image-speaker-zx9.png";

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        className=" w-screen gap-4 px-6 m-0 mt-8 h-[683px] flex flex-col items-center justify-center
      md:flex-row md:gap-4 md:h-[217px] md:align-bottom mb-8 md:z-10
       lg:w-[calc(100%-330px)] lg:px-0 lg:ml-[165px] lg:mr-[165px] lg:flex-row lg:h-[284px] lg:my-[156px] lg:align-bottom
      lg:justify-between 
      "
      >
        <div
          className="relative w-[300px] h-[217px] mx-6 flex flex-col items-center 
        lg:w-[350px] lg:h[276.5px] z-10 lg:mx-0
        "
        >
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
        <div
          className="relative w-[300px] h-[217px] mx-6 flex flex-col items-center 
        lg:w-[350px] lg:h[276.5px] z-10 "
        >
          {/* Image positioned above, overlapping the div below */}
          <Image
            className="z-10 "
            src={speaker}
            alt="speaker"
            width={84.04}
            height={104}
          />

          {/* Gray box — maintains its own height */}
          <div className="w-full  gap-6 h-[165px] pt-[59px] rounded-lg bg-[#F1F1F1] -mt-10 text-center items-center justify-center">
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
            </button>
          </div>
        </div>
        <div
          className="relative w-[300px] h-[217px] mx-6 flex flex-col items-center 
        lg:w-[350px] lg:h[276.5px] z-10"
        >
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

      <div
        className="w-[300px] h-[600] m-auto bg-[#D87D4A] justify-center items-center flex flex-col 
      md:w-[689px] md:h-[720px] md:my-32 md:m-auto md:justify-between md:align-bottom md:rounded-lg md:flex md:items-center 
      lg:w-[calc(100%-330px)] lg:px-0 lg:ml-[165px] lg:mr-[165px] lg:flex-row lg:h-[560px] lg:my-[156px] lg:align-bottom
      lg:rounded-lg lg:flex  lg:items-center lg:justify-between
      "
      >
        <div className="">
          {/* Outer circle section */}
          <div className="lg:w-[944] lg:h-[944] border-0 lg:flex lg:items-center lg:border border-[#ffffff] rounded-full lg:justify-center lg:relative lg:-left-40 lg:ml-0 lg:overflow-visible">
            {/* Biggest circle */}

            {/* Medium circle */}
            <div
              className="w-[328px] h-[328px] relative left-0 ml-0 top-20  rounded-full border border-white flex items-center justify-center overflow-visible

              md:w-[542px] md:h-[542px] md:-top-15 md:left-0 md:ml-0
          
          lg:w-[542px] lg:h-[542px] lg:top-12 lg:left-0 lg:ml-0 lg
          "
            >
              {/* Smallest circle */}
              <div
                className="w-[279px] h-[279px] rounded-full border border-white flex items-center justify-center
            md:w-[472px] md:h-[472px] md:mt-0
            lg:w-[472px] lg:h-[472px]
            "
              >
                <Image
                  className="lg:w-[410.23] lg:h-[493px] md:w-[197] md:h-[237] overflow-y-clip"
                  src={speaker2}
                  alt="ZX9 Speaker"
                  width={172.25}
                  height={205}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-[355.5px] w-82 flex flex-col justify-center items-center text-center mt-16 mb-16
               md:-mt-45 lg:items-start md:z-10 
               lg:text-start lg:mb-40 lg:-ml-80 lg:mt-35 "
        >
          <h2 className="w-[280px] text-[36px] text-white font-semibold font-manrope leading-tight ">
            ZX9 <br /> SPEAKER
          </h2>
          <p className="w-[280px] text-[15px] text-white opacity-75 font-manrope m-8 ml-0">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="w-40 h-12 bg-black text-white font-manrope font-semibold text-[13px] uppercase">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}

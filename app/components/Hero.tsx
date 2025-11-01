import React from 'react'
import Header from './Header'
import Image from 'next/image';
import heroImage from '../../public/headphone.svg'

function Hero() {
  return (
    <div className=" h-[600px]
    relative w-full flex flex-col lg:flex-row items-center justify-center gap-4
    bg-[url('/headphone.svg')] bg-cover bg-center
    bg-[#0E0E0E] lg:bg-none
    opacity-100 top-0
     lg:h-[729px]
    px-0 sm:px-4 md:h-[729px] md:px-8 lg:px-[165px]
    overflow-hidden
  ">

        <Header />
        <div className=" p-0 w-full h-[729px] flex   items-center  justify-center  gap-4
        lg:flex-row lg:justify-between
        
        
        ">
            <div className="h-full mt-[330px]  items-center justify-center  ">
                <div className=" w-[320px]  m-auto self-center mt-15 h-[290px]  items-center gap-4 flex flex-col   justify-center
                sm:w-[320] sm:items-center sm:h-[290px]
                md:w-[379px]md:h-[346px] md:items-center md:gap-6

                lg:items-start lg:w-[398px]
                
                ">
                    <span className="font-manrope font-weight-[400px] text-white text-[14px] ">NEW PRODUCT</span>
                    <p className='text-white text-center font-bold text-[36px] md:text-[56px] leading-[58px] tracking-[2px] uppercase font-manrope
                    ' >XX99 Mark II Headphones</p>
                    <p className='text-white text-center font-manrope font-weight-[400px] text-[15px] leading-[25px] opacity-75 mt-4
                    lg:text-left
                    '>Experience natural, lifelike audio and exceptional build <br /> quality made for the passionate music <br /> enthusiast.</p>
                    <div className="mt-6">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-manrope font-weight-[500px] text-[13px] leading-[18px] tracking-[1px] uppercase w-40 h-12 ">See Product</button>
                    </div>
                </div>
            </div>
            <div className="h-full mt-0  right-0 itrems-center w-[708px] justify-center hidden lg:flex ">
                <Image src={heroImage} 
                alt='hero image' 
                />
            </div>
        </div>

    </div>

  )
}

export default Hero
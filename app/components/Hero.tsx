import React from 'react'
import Header from './Header'
import Image from 'next/image';
import heroImage from '../../public/headphone.svg'

function Hero() {
  return (
    <div className="w-full h-[729px] opacity-100 bg-[#0E0E0E] px-[165px] top-0 absolute flex flex-row items-center justify-center gap-4">

        <Header />
        <div className=" p-0 w-full h-[729px] flex flex-row  items-center  justify-between gap-4">
            <div className="h-full mt-[330px] left-0  ">
                <div className="w-[398px] mt-15 h-[346] right-20 gap-6 flex flex-col items-start align-baseline  justify-center">
                    <span className="font-manrope font-weight-[400px] text-white text-[14px] ">NEW PRODUCT</span>
                    <p className='text-white font-bold text-[56px] leading-[58px] tracking-[2px] uppercase font-manrope
                    ' >XX99 Mark II Headphones</p>
                    <p className='text-white font-manrope font-weight-[400px] text-[15px] leading-[25px] opacity-75 mt-4'>Experience natural, lifelike audio and exceptional build <br /> quality made for the passionate music <br /> enthusiast.</p>
                    <div className="mt-6">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-manrope font-weight-[500px] text-[13px] leading-[18px] tracking-[1px] uppercase w-40 h-12 ">See Product</button>
                    </div>
                </div>
            </div>
            <div className="h-full mt-0  right-0 itrems-center w-[708px] justify-center">
                <Image src={heroImage} 
                alt='hero image' 
                />
            </div>
        </div>

    </div>

  )
}

export default Hero
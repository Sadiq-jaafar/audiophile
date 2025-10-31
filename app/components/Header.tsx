import React from 'react'
import Image from 'next/image';
import audiophile from '../../public/audiophile.svg'
import cart from '../../public/cart.svg'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-[calc(100%-330px)]" h-7 opacity-100 top-0 left-[165px] right-[165px] absolute text-center text-2xl font-normal leading-7 text-white font-geist-mono  p-0 items-center flex flex-row justify-between pb-8 pt-8 border-b-2
'>
    
    <div className="">
        <Image
        alt='logo'
        src={audiophile}/>
    </div>
    <div className=" font-Manrope font-weight-700 text-white text-[13px] flex flex-row gap-8 items-center justify-center text-transform: uppercase">
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Headphone</Link>
        <Link href={'/'}>Speakers</Link>
        <Link href={'/'}>Earphones</Link>

    </div>
    <div className="">
        <Image
        alt='cart'
        src={cart}
    /></div>
</div>
  )
}

export default Header
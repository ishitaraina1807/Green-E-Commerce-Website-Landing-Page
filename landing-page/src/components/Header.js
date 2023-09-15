import React from 'react'
import Logo from '../images/Logo.png'
import Search from '../images/Search.png'
import ShoppingCart from '../images/ShoppingCart.png'
import Notification from '../images/Notification.png'
import SMS from '../images/SMS.png'
import Plant from '../images/Plant.png'
import boy from '../images/boy.svg'

export default function Header() {
  return (
    <div className="w-full h-[134px] flex-shrink-0 rounded-[20px] bg-white shadow-md">
      <div className="w-full h-[43px] flex-shrink-0 bg-[#66BF84] flex">
        <p className=" px-[100px] py-[10px] h-[43px] flex-shrink-0 bg-[#66BF84] text-white font-SequelSans text-base font-normal font-extralight leading-normal">
          <b>9.9 Promo Is Here!</b> Dapatkan Hingga 99% Diskon!
        </p>
        <div className='flex py-[10px] justify-center items-center'>
          <div className="w-[52.806px] h-[22.761px] flex-shrink-0 rounded-[11.381px] border-[0.91px] border-white"> <p className="text-white font-SequelSans text-center px-4 text-[14.567px] font-normal leading-normal"> 17 </p></div>
          <span className='text-white font-SequelSans pr-6 pl-1'>Jam</span>
          <div className="w-[52.806px] h-[22.761px] flex-shrink-0 rounded-[11.381px] border-[0.91px] border-white"> <p className="text-white font-SequelSans text-center px-4 text-[14.567px] font-normal leading-normal"> 50 </p></div>
          <span className='text-white font-SequelSans pr-6 pl-1'>Menit</span>
          <div className="w-[52.806px] h-[22.761px] flex-shrink-0 rounded-[11.381px] border-[0.91px] border-white"> <p className="text-white fo<span>Jam</span>nt-SequelSans text-center text-[14.567px] font-normal leading-normal"> 30 </p></div>
          <span className='text-white font-SequelSans pr-6 pl-1'>Detik</span>
        </div>
        <div className='py-[10px] ml-[60px]'>
          <div className="w-[103px] h-[23px] flex-shrink-0 rounded-[11.381px] bg-white">
            <p className="text-dark-green font-SequelSans px-4 text-[13.11px] font-normal leading-normal">Cek Promo!</p>
          </div>
        </div>
      </div>
      <div className="section px-[100px] py-[20px] flex items-center">
        <img src={Logo} alt="logo" />
        <div className="w-[660px] h-[31px] ml-[100px] mr-[20px] rounded-[15px] border border-[1px] border-[#6C6C6C]">
          <div className='flex py-1'>
            <img className='px-4' src={Search} alt="search" />
            <p className="h-[19px] top-[79px] left-[353px] font-SequelSans text-[16px] font-normal leading-[19px] tracking-[0em] text-[#A1A1A1] text-left">Cari Barangmu Disini!</p>
          </div>
        </div>
        <div className='flex'>
          <img className="mr-6" src={ShoppingCart} alt="cart" />
          <img className="mr-6" src={SMS} alt="sms" />
          <img className="mr-6" src={Notification} alt="cart" />
        </div>
        <div className = "w-[213px] h-[50px] top-[62px] left-[1127px] rounded-[25px] bg-white shadow-md flex justify-end pr-2 py-2">
          <div>
            <p className = "font-SequelSans text-[12px] font-semibold leading-[17px] tracking-[0em] text-right text-[#000000]">Halo, <b>Arlo Mahardyan</b></p>
            <div className = "flex justify-end"> 
              <p className = "font-SequelSans text-[10px] font-normal leading-[14px] tracking-[0.02em] text-right text-[#EBC351] py-1">Gold Member</p>
              <img src={Plant} alt="plant" />
            </div>
          </div>
            <img className="w-[36px] h-[36px] top-[69px] ml-5" src={boy} alt="pfp"/>
        </div>
      </div>
    </div>

  )
}

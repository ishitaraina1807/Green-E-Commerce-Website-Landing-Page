import React from 'react'
import sale1 from '../images/sale1.png'
import sale2 from '../images/sale2.png'
import sale3 from '../images/sale3.png'
import sale4 from '../images/sale4.png'
import sale5 from '../images/sale5.png'
import sale6 from '../images/sale6.png'
import sale7 from '../images/sale7.png'

export default function Sale() {
  return (
    <div class="text-[#000] font-AbrilFatface text-[30px] font-normal leading-normal text-center">
      <b>Green Sale 9.9</b>
      <div className="flex gap-[30px] my-8 ml-[100px]">
        <div className="card-1">
        <div class="w-[190px] h-[275px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
          <div className = "px-[30px] pt-[23px] pb-1">
          <img src={sale1} alt="packed food" />
          </div>
          <div className='text-center'>
          <p class="text-[#000] font-SequelSans text-[14px] font-semibold leading-normal">Costafarms Soup Pack</p>
          <p class="text-[#A1A1A1] text-center font-SequelSans text-[10px] font-semibold leading-normal pb-[35px]">Fresh, Food & Groceries</p>
          <p class="text-[#000] text-center font-SequelSans text-[18px] font-semibold leading-normal">Rp 1.900</p>
          <div className="flex justify-center items-center">
          <div class="w-[30.667px] h-[12px] flex-shrink-0 rounded-[7.145px] bg-[#66BF84]">
          <p class="text-[#FFF] text-center font-SequelSans text-[10px] font-semibold leading-normal">91%</p>
          </div>
          <p class="text-[#D9D9D9] text-center font-SequelSans text-[13px] font-semibold line-through leading-normal">Rp 19.900</p>
          </div>
          <div class="w-[84px] h-[23px] flex-shrink-0 rounded-[4px] border border-[#228F47] justify-center items-center flex ml-[53px] my-[8px]">
          <p class="text-[#228F47] text-center font-SequelSans text-[10px] font-semibold leading-normal">+ Keranjang</p>
          </div>
          </div>
        </div>
        </div>
        <div className="card-2">
        <div class="w-[190px] h-[275px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
        <div className = "px-[42px] pt-[12px]">
          <img src={sale2} alt="packed food" />
          </div>
          <div className='text-center'>
          <p class="text-[#000] font-SequelSans text-[14px] font-semibold leading-normal">Soup Pack + Royco</p>
          <p class="text-[#A1A1A1] text-center font-SequelSans text-[10px] font-semibold leading-normal pb-[35px]">Fresh, Food & Groceries</p>
          <p class="text-[#000] text-center font-SequelSans text-[18px] font-semibold leading-normal">Rp 2.000</p>
          <div className="flex justify-center items-center">
          <div class="w-[30.667px] h-[12px] flex-shrink-0 rounded-[7.145px] bg-[#66BF84]">
          <p class="text-[#FFF] text-center font-SequelSans text-[10px] font-semibold leading-normal">90%</p>
          </div>
          <p class="text-[#D9D9D9] text-center font-SequelSans text-[13px] font-semibold line-through leading-normal">Rp 20.000</p>
          </div>
          <div class="w-[84px] h-[23px] flex-shrink-0 rounded-[4px] border border-[#228F47] justify-center items-center flex ml-[53px] my-[8px]">
          <p class="text-[#228F47] text-center font-SequelSans text-[10px] font-semibold leading-normal">+ Keranjang</p>
          </div>
          </div>
        </div>
        </div>
        <div className="card-3">
        <div class="w-[190px] h-[275px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
        <div className = "px-[52px] pt-[12px]">
          <img src={sale3} alt="packed food" />
          </div>
          <div className='text-center'>
          <p class="text-[#000] font-SequelSans text-[14px] font-semibold leading-normal w-[160px] text-center pl-8">Paket Sop Bening & Macaroni</p>
          <p class="text-[#A1A1A1] text-center font-SequelSans text-[10px] font-semibold leading-normal pb-[14px]">Fresh, Food & Groceries</p>
          <p class="text-[#000] text-center font-SequelSans text-[18px] font-semibold leading-normal">Rp 2.000</p>
          <div className="flex justify-center items-center">
          <div class="w-[30.667px] h-[12px] flex-shrink-0 rounded-[7.145px] bg-[#66BF84]">
          <p class="text-[#FFF] text-center font-SequelSans text-[10px] font-semibold leading-normal">90%</p>
          </div>
          <p class="text-[#D9D9D9] text-center font-SequelSans text-[13px] font-semibold line-through leading-normal">Rp 20.000</p>
          </div>
          <div class="w-[84px] h-[23px] flex-shrink-0 rounded-[4px] border border-[#228F47] justify-center items-center flex ml-[53px] my-[8px]">
          <p class="text-[#228F47] text-center font-SequelSans text-[10px] font-semibold leading-normal">+ Keranjang</p>
          </div>
          </div>
        </div>
        </div>
        <div className="card-4">
        <div class="w-[190px] h-[275px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
        <div className = "px-[40px] pt-[30px] pb-5">
          <img src={sale4} alt="packed food" />
          </div>
          <div className='text-center'>
          <p class="text-[#000] font-SequelSans text-[14px] font-semibold leading-normal w-[170px] text-center pl-8">Greenfarms Paket Sop Bening</p>
          <p class="text-[#A1A1A1] text-center font-SequelSans text-[10px] font-semibold leading-normal pb-[14px]">Fresh, Food & Groceries</p>
          <p class="text-[#000] text-center font-SequelSans text-[18px] font-semibold leading-normal">Rp 2.000</p>
          <div className="flex justify-center items-center">
          <div class="w-[30.667px] h-[12px] flex-shrink-0 rounded-[7.145px] bg-[#66BF84]">
          <p class="text-[#FFF] text-center font-SequelSans text-[10px] font-semibold leading-normal">90%</p>
          </div>
          <p class="text-[#D9D9D9] text-center font-SequelSans text-[13px] font-semibold line-through leading-normal">Rp 20.000</p>
          </div>
          <div class="w-[84px] h-[23px] flex-shrink-0 rounded-[4px] border border-[#228F47] justify-center items-center flex ml-[53px] my-[8px]">
          <p class="text-[#228F47] text-center font-SequelSans text-[10px] font-semibold leading-normal">+ Keranjang</p>
          </div>
          </div>
        </div>
        </div>
        <div className="card-5">
        <div class="w-[190px] h-[275px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
        <div className = "px-[50px] pt-[33px] pb-3">
          <img src={sale5} alt="packed food" />
          </div>
          <div className='text-center'>
          <p class="text-[#000] font-SequelSans text-[14px] font-semibold leading-normal">Telly Vegetarian Ramen</p>
          <p class="text-[#A1A1A1] text-center font-SequelSans text-[10px] font-semibold leading-normal pb-[35px]">Fresh, Food & Groceries</p>
          <p class="text-[#000] text-center font-SequelSans text-[18px] font-semibold leading-normal">Rp 900</p>
          <div className="flex justify-center items-center">
          <div class="w-[30.667px] h-[12px] flex-shrink-0 rounded-[7.145px] bg-[#66BF84]">
          <p class="text-[#FFF] text-center font-SequelSans text-[10px] font-semibold leading-normal">93%</p>
          </div>
          <p class="text-[#D9D9D9] text-center font-SequelSans text-[13px] font-semibold line-through leading-normal">Rp 10.700</p>
          </div>
          <div class="w-[84px] h-[23px] flex-shrink-0 rounded-[4px] border border-[#228F47] justify-center items-center flex ml-[53px] my-[8px]">
          <p class="text-[#228F47] text-center font-SequelSans text-[10px] font-semibold leading-normal">+ Keranjang</p>
          </div>
          </div>
        </div>
        </div>
        <div className="card-6">
        <div class="w-[190px] h-[275px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
        <div className = "px-[35px] pt-[11px]">
          <img src={sale6} alt="packed food" />
          </div>
          <div className='text-center'>
          <p class="text-[#000] font-SequelSans text-[14px] font-semibold leading-normal">Soup Veg Pack</p>
          <p class="text-[#A1A1A1] text-center font-SequelSans text-[10px] font-semibold leading-normal pb-[35px]">Fresh, Food & Groceries</p>
          <p class="text-[#000] text-center font-SequelSans text-[18px] font-semibold leading-normal">Rp 2.000</p>
          <div className="flex justify-center items-center">
          <div class="w-[30.667px] h-[12px] flex-shrink-0 rounded-[7.145px] bg-[#66BF84]">
          <p class="text-[#FFF] text-center font-SequelSans text-[10px] font-semibold leading-normal">90%</p>
          </div>
          <p class="text-[#D9D9D9] text-center font-SequelSans text-[13px] font-semibold line-through leading-normal">Rp 20.000</p>
          </div>
          <div class="w-[84px] h-[23px] flex-shrink-0 rounded-[4px] border border-[#228F47] justify-center items-center flex ml-[53px] my-[8px]">
          <p class="text-[#228F47] text-center font-SequelSans text-[10px] font-semibold leading-normal">+ Keranjang</p>
          </div>
          </div>
        </div>
        </div>
        <div className="card-7">
        <div class="w-[190px] h-[275px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
        <div className = "px-[52px] pt-[23px]">
          <img src={sale7} alt="packed food" />
          </div>
          <div className='text-center'>
          <p class="text-[#000] font-SequelSans text-[14px] font-semibold leading-normal">Arcanafarm Soup Pack</p>
          <p class="text-[#A1A1A1] text-center font-SequelSans text-[10px] font-semibold leading-normal pb-[35px]">Fresh, Food & Groceries</p>
          <p class="text-[#000] text-center font-SequelSans text-[18px] font-semibold leading-normal">Rp 1.900</p>
          <div className="flex justify-center items-center">
          <div class="w-[30.667px] h-[12px] flex-shrink-0 rounded-[7.145px] bg-[#66BF84]">
          <p class="text-[#FFF] text-center font-SequelSans text-[10px] font-semibold leading-normal">91%</p>
          </div>
          <p class="text-[#D9D9D9] text-center font-SequelSans text-[13px] font-semibold line-through leading-normal">Rp 19.900</p>
          </div>
          <div class="w-[84px] h-[23px] flex-shrink-0 rounded-[4px] border border-[#228F47] justify-center items-center flex ml-[53px] my-[8px]">
          <p class="text-[#228F47] text-center font-SequelSans text-[10px] font-semibold leading-normal">+ Keranjang</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>

  )
}

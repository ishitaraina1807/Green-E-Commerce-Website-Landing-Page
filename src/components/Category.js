import React from 'react'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'
import c7 from '../images/c7.png'
import c8 from '../images/c8.png'
import c9 from '../images/c9.png'
import c10 from '../images/c10.png'
import c11 from '../images/c11.png'
import c12 from '../images/c12.png'

export default function Category() {
  return (
    <div>
      <h1 className="text-[#000] font-AbrilFatface text-[30px] font-normal leading-normal text-center m-2"><b>Kategori Untukmu</b></h1>
      <div>
      <div className='flex gap-[30px] ml-[100px] mb-8'>
      <div className="card1">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c1} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Sayur Mayur</b></p>
        </div>
      </div>
      <div className="card2">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c2} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Kebutuhan Harian</b></p>
        </div>
      </div>
      <div className="card3">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c3} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Minuman</b></p>
        </div>
      </div>
      <div className="card4">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c4} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Bibit Pohon</b></p>
        </div>
      </div>
      <div className="card5">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c5} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Hijau dan Segar</b></p>
        </div>
      </div>
      <div className="card6">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c6} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Paket Makanan</b></p>
        </div>
        </div>
      </div>
      <div className='flex gap-[30px] ml-[100px]'>
      <div className="card7">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c7} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Buah Buahan</b></p>
        </div>
      </div>
      <div className="card8">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c8} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Makanan Instant</b></p>
        </div>
      </div>
      <div className="card9">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c9} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Kebutuhan Berkebun</b></p>
        </div>
      </div>
      <div className="card10">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c10} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Daging Vegetarian</b></p>
        </div>
      </div>
      <div className="card11">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c1} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Bumbu & Rempah</b></p>
        </div>
      </div>
      <div className="card12">
        <div className = "w-[190px] h-[190px] rounded-[10px] bg-white shadow-md my-2 px-8 py-4">
          <img src={c12} alt="food" />
          <p className="text-[#000] font-SequelSans text-[16px] font-light leading-normal text-center mt-2"><b>Lainnya</b></p>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

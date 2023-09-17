import React from 'react'
import FooterIcon from '../images/FooterIcon.png'

export default function Footer() {
  return (
    <div class="w-full h-[591px] flex-shrink-0 rounded-3xl bg-[#F9F9F9] shadow-[0px -6px 4px 0px rgba(233, 233, 233, 0.25)]">
      <div className='flex gap-[100px] ml-[100px] pt-[50px]'>
        <div className="col1 flex flex-col gap-[20px]">
          <h1 class="text-[#000] font-AbrilFatface text-[24px] font-normal leading-normal">
            <b>Plantea</b>
          </h1>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Tentang Plantea
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Hak Cipta
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Blog dan Artikel
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Program Mitra
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Karir di Plantea
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Toko Mitra
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Program Pengabdian Masyarakat
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Bantuan
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Customer Services
          </p>
        </div>
        <div className="col2 flex flex-col gap-[20px]">
          <h1 class="text-[#000] font-AbrilFatface text-[24px] font-normal leading-normal">
            <b>Seller</b>
          </h1>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Menjadi Penjual
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Edukasi Seller
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Ajukan Verified Store
          </p>
          <h1 class="text-[#000] font-AbrilFatface text-[24px] font-normal leading-normal mt-10">
            <b>Pengguna</b>
          </h1>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Top Up Plantcoin
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Plantea COD
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Syarat dan Ketentuan
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Panduan Pengguna
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Affiliate Program
          </p>
        </div>
        <div className="col3 flex flex-col gap-[20px]">
          <h1 class="text-[#000] font-AbrilFatface text-[24px] font-normal leading-normal">
            <b>Ikuti Kami</b>
          </h1>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Instagram
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Twitter
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Facebook
          </p>
          <p class="text-[#000] font-SequelSans text-[16px] font-normal leading-normal">
            Youtube
          </p>
        </div>
        <div className="picture relative">
          <img src={FooterIcon} alt="cute image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 w-full h-full bg-svg-background"></div>
        </div>

      </div>
    </div>
  )
}

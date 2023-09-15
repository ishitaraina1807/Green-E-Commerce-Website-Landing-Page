import React from 'react'

export default function Promo() {
  return (
    <div className="flex flex-col w-full px-[100px] py-8">
    <div className="bg-[url(https://file.rendit.io/n/9vjEgxkxkbMMCtFGesO6.svg)] rounded-[30px] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between items-end pb-4 pl-24 pr-8">
      <div className="flex flex-col mb-10 gap-4 w-1/2 items-start">
        <div className="text-6xl font-['Sequel_Sans'] leading-[64.5px] text-[#0e4a22] w-[480px]">
          Makin Sehat Dengan Promo 9.9
        </div>
        <button className="flex flex-col ml-px items-start" id="ButtonBuy">
          <div className="bg-white flex flex-col w-40 h-8 shrink-0 items-center py-1 rounded-[22.29838752746582px]">
            <div className="text-base font-['Sequel_Sans'] font-light text-[#66bf84]">
              Belanja Sekarang
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-col mt-20 gap-16 h-48 items-start">
        <div className="flex flex-row gap-6 w-[435px] items-center">
          <div className="bg-[#fcfcfc] self-start flex flex-row gap-3 w-[381px] items-start rounded-lg">
            <div className="bg-[#228f47] relative flex flex-col justify-end w-[146px] shrink-0 items-center pt-16 pb-6 px-6 rounded-tl-lg rounded-bl-lg">
              <div className="text-5xl font-['Sequel_Sans'] font-black text-white absolute top-5 left-5 h-12 w-24">
                90%
              </div>
              <div className="text-lg font-['Sequel_Sans'] font-light text-[#e7ffef] relative">
                Semua Item!
              </div>
            </div>
            <div className="flex flex-col mt-2 gap-1 w-3/5 h-24 items-start">
              <div className="self-end relative flex flex-col mb-5  items-start">
                <div className="border-solid border-[#228f47]  w-16 h-3 shrink-0 border rounded-sm">
                <div className="text-xs font-['Sequel_Sans'] font-light absolute w-[20px]">
                  Promo Jumbo
                </div>
                </div>
              </div>
              <div
                className="text-xs font-['Sequel_Sans'] font-light"
                id="BerlakuSdSeptember1"
              >
                Berlaku s/d{" "}
                <div className="contents" id="BerlakuSdSeptember">
                  10 September 2023
                </div>
              </div>
              <button
                className="flex flex-col mb-3 w-24 items-start"
                id="BtnKlaimPromo"
              >
                <div className="bg-[#66bf84] flex flex-col w-24 items-center px-3 py-1 rounded-lg">
                  <div className="text-xs font-['Sequel_Sans'] font-light text-white">
                    Klaim Promo
                  </div>
                </div>
              </button>
              <div className="text-xs font-['Sequel_Sans'] font-light self-end mr-1">
                S&K Berlaku
              </div>
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/4NJUjMyRubBsU3wUQF9d.svg"
            className="w-6 shrink-0"
          />
        </div>
        <img
          src="https://file.rendit.io/n/gxd42TbTV0f5w9uxwesz.svg"
          className="self-end mr-px w-20"
          id="ScrollTab"
        />
      </div>
    </div>
  </div>
  

  )
}

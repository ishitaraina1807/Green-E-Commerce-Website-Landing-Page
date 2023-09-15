import React from 'react'

export default function Sale() {
  return (
    <div>
      <div className="flex flex-col w-full" id="NewRootRoot">
  <div className="shadow-[0px_4px_8px_0px_rgba(219,_219,_219,_0.25)] bg-white flex flex-col  gap-8  pt-6 pb-3 px-6 rounded-lg">
    <div className="self-stretch flex flex-col mr-px gap-1 items-start">
      <img
        src="https://file.rendit.io/n/LHAPMrNlGbZsBzxx2Ieg.png"
        className="ml-1"
        id="Souppack"
      />
      <div className="text-sm font-['Sequel_Sans'] mb-0">
        Costafarms Soup Pack
      </div>
      <div className=" text-xs font-['Sequel_Sans'] text-[#a1a1a1] ">
        Fresh, Food & Groceries
      </div>
    </div>
    <div className="flex flex-col gap-2 w-24 items-start">
      <div className="flex flex-col gap-px w-24 items-start">
        <div className=" text-lg font-['Sequel_Sans'] ml-3">
          Rp 1.900
        </div>
        <div className="flex flex-row gap-1 w-24 items-start">
          <div className="relative flex flex-col mt-1 w-8 shrink-0 items-center pt-0 px-1">
            <div className="w-8 h-3 bg-[#66bf84] absolute top-0 left-0 rounded-lg" />
            <div className=" text-xs font-['Sequel_Sans'] text-white relative">
              91%
            </div>
          </div>
          <div className=" text-xs font-['Sequel_Sans'] line-through text-[#d9d9d9]">
            Rp 19.900
          </div>
        </div>
      </div>
      <div className="relative flex flex-col ml-1 w-20 items-start">
        <div className=" text-xs font-['Sequel_Sans'] text-[#228f47] absolute top-1 left-4 h-3 w-12">
          + Keranjang
        </div>
        <div className="border-solid border-[#228f47] relative w-20 h-6 shrink-0 border rounded" />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

import React from 'react'
import review1 from '../images/review1.png'
import review2 from '../images/review2.png'
import review3 from '../images/review3.png'
import review4 from '../images/review4.png'
import fullstar from '../images/fullstar.png'
import quaterstar from '../images/quaterstar.png'
import halfstar from '../images/halfstar.png'
import emoji from '../images/emoji.svg'

export default function Reviews() {
  return (
    <div>
      <h1 class="text-[#000] font-AbrilFatface text-[30px] font-normal leading-normal text-center m-2"><b>Review Terbaik</b></h1>
      <div className="flex gap-[30px] my-8 ml-[100px]">
        <div className="card1">
          <div class="w-[400px] h-[200px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
            <div className="flex">
              <div className='py-[39px] px-[14px]'>
                <img src={review1} alt="food" />
              </div>
              <div>
                <div className="flex flex-col w-full items-start">
                  <div className="text-[14px] font-['Sequel_Sans'] mb-1"><b>Costafarms Soup Pack</b></div>
                  <div className="text-center text-xs font-['Sequel_Sans'] text-[#a1a1a1] mb-1">
                    Fresh, Food & Groceries
                  </div>
                  <div className="flex flex-row mb-1 gap-px w-20 items-start items-center">
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <div
                      className="bg-[url(https://file.rendit.io/n/KPNKJMuCL0JoQICejSLp.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col mr-px w-2 shrink-0 items-start"
                      id="Star4"
                    >
                      <img src={quaterstar} alt="quaterstar" />
                    </div>
                    <div className="text-xs font-['Sequel_Sans'] text-[#ebc351]">4.8/5.0</div>
                  </div>
                  <div className="text-xs font-['Sequel_Sans'] mb-1">1.942 Review</div>
                  <div className="self-stretch flex flex-row mr-10 gap-1 items-center">
                    <img
                      src="https://file.rendit.io/n/OMmNVwPJxLwij5bBPAER.png"
                      className="self-start w-4 shrink-0"
                      id="Ellipse"
                    />
                    <div className="text-xs font-['Sequel_Sans']">
                      <b>Costafarm Jogja,</b>{" "}
                      <div className="text-[#a1a1a1] contents" id="CostafarmJogjaSleman">
                        Sleman
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-lg font-['Sequel_Sans'] mb-px">Rp 1.900</div>
                  <div className="flex flex-row ml-0 gap-1 w-24 items-start items-center">
                    <div className="relative flex flex-col mt-1 w-8 shrink-0 items-center pt-0 px-1">
                      <div className="w-8 h-3 bg-[#66bf84] absolute top-0 left-0 rounded-lg" />
                      <div className="text-center text-xs font-['Sequel_Sans'] text-white relative">
                        91%
                      </div>
                    </div>
                    <div className="text-center text-xs font-['Sequel_Sans'] line-through text-[#d9d9d9]">
                      Rp 19.900
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-2">
                  <div className="border-solid border-[#228f47] flex flex-col h-6 shrink-0 items-start pl-8 py-1 border rounded">
                    <div className="text-center text-xs font-['Sequel_Sans'] text-[#228f47]">
                      Tambahkan ke Keranjang
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="card2">
          <div class="w-[400px] h-[200px] flex-shrink-0 rounded-[8px] bg-white shadow-md leading-[18px]">
            <div className="flex">
              <div className='py-[29px] px-[24px]'>
                <img src={review2} alt="food" />
              </div>
              <div>
                <div className="flex flex-col w-full items-start">
                  <div className="text-[14px] font-['Sequel_Sans'] mb-1"><b>Nongshim Soon Vegetarian Noodle Soup Ramen</b></div>
                  <div className="text-center text-xs font-['Sequel_Sans'] text-[#a1a1a1] mb-1">
                    Instant Food
                  </div>
                  <div className="flex flex-row gap-px w-20 items-start items-center">
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="quaterstar" />
                    <div className="text-xs font-['Sequel_Sans'] text-[#ebc351]">4.9/5.0</div>
                  </div>
                  <div className="text-xs font-['Sequel_Sans']">342 Review</div>
                  <div className="self-stretch flex flex-row mr-10 gap-1 items-center">
                    <img src={emoji} alt="emoji" />
                    <div className="text-xs font-['Sequel_Sans']">
                      <b>Nongshim,,</b>{" "}
                      <div className="text-[#a1a1a1] contents" id="CostafarmJogjaSleman">
                        Jakarta Selatan
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-lg font-['Sequel_Sans']">Rp 4.000</div>
                  <div className="flex flex-row ml-0 gap-1 w-24 items-start items-center">
                    <div className="relative flex flex-col w-8 shrink-0 items-center pt-0 px-1">
                      <div className="w-8 h-3 bg-[#66bf84] absolute top-0 left-0 rounded-lg" />
                      <div className="text-center text-xs font-['Sequel_Sans'] text-white relative">
                        30%
                      </div>
                    </div>
                    <div className="text-center text-xs font-['Sequel_Sans'] line-through text-[#d9d9d9]">
                      Rp 6.000
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[183px] mt-1">
                  <div className="border-solid border-[#228f47] flex flex-col h-6 shrink-0 items-start pl-8 py-1 border rounded">
                    <div className="text-center text-xs font-['Sequel_Sans'] text-[#228f47]">
                      Tambahkan ke Keranjang
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div class="w-[400px] h-[200px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
            <div className="flex">
              <div className='py-[20px] px-[24px]'>
                <img src={review3} alt="food" />
              </div>
              <div>
                <div className="flex flex-col w-full items-start">
                  <div className="text-sm font-['Sequel_Sans'] mb-1"><b>Telly Vegetarian Ramen</b></div>
                  <div className="text-center text-xs font-['Sequel_Sans'] text-[#a1a1a1] mb-1">
                    Instant Food
                  </div>
                  <div className="flex flex-row mb-1 gap-px w-20 items-start">
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <img src={fullstar} alt="star" />
                    <div
                      className="bg-[url(https://file.rendit.io/n/KPNKJMuCL0JoQICejSLp.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col mr-px w-2 shrink-0 items-start"
                      id="Star4"
                    >
                      <img src={halfstar} alt="halfstar" />
                    </div>
                    <div className="text-xs font-['Sequel_Sans'] text-[#ebc351]">4.5/5.0</div>
                  </div>
                  <div className="text-xs font-['Sequel_Sans'] mb-1">711 Review</div>
                  <div className="self-stretch flex flex-row mr-10 gap-1 items-center">
                    <img src={emoji} alt="emoji" />
                    <div className="text-xs font-['Sequel_Sans']">
                      <b>Telly,</b>{" "}
                      <div className="text-[#a1a1a1] contents" id="CostafarmJogjaSleman">
                        Jakarta PusatSleman
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-lg font-['Sequel_Sans'] mb-px">Rp 900</div>
                  <div className="flex flex-row ml-0 gap-1 w-24 items-start items-center">
                    <div className="relative flex flex-col mt-1 w-8 shrink-0 items-center pt-0 px-1">
                      <div className="w-8 h-3 bg-[#66bf84] absolute top-0 left-0 rounded-lg" />
                      <div className="text-center text-xs font-['Sequel_Sans'] text-white relative">
                        93%
                      </div>
                    </div>
                    <div className="text-center text-xs font-['Sequel_Sans'] line-through text-[#d9d9d9]">
                      Rp 10.700
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-2">
                  <div className="border-solid border-[#228f47] flex flex-col h-6 shrink-0 items-start pl-8 py-1 border rounded">
                    <div className="text-center text-xs font-['Sequel_Sans'] text-[#228f47]">
                      Tambahkan ke Keranjang
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="card4">
          <div class="w-[400px] h-[200px] flex-shrink-0 rounded-[8px] bg-white shadow-md">
            <div className='py-[29px] px-[34px]'>
              <img src={review4} alt="food" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

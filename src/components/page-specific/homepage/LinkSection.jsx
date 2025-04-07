import React from 'react'
import './LinkSection.css'

const LinkSection = () => {
    return (
      <div className="relative md:-mt-30 mb-10 md:mb-30 z-10">
        <div className="w-full md:w-9/12 mx-auto bg-[#00438c] bg-opacity-90 p-4 md:p-10">
          <h2 className="text-white font-bold title-font md:text-5xl text-center">Được quan tâm nhiều nhất</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-7 text-center text-lg md:text-xl">
            <div className="py-2 md:py-0">
              <a href="#" className="text-white font-bold content-font hover:underline text-sm md:text-[16px]">
                TẠI SAO CHỌN CẢNG NƯỚC SÂU MIỀN TRUNG
              </a>
            </div>
            <div className="py-2 md:py-0">
              <a href="#" className="text-white font-bold content-font hover:underline text-sm md:text-[16px]">
                DỊCH VỤ NỔI BẬT
              </a>
            </div>
            <div className="py-2 md:py-0">
              <a href="#" className="text-white font-bold content-font hover:underline text-sm md:text-[16px]">
                CAM KẾT CỦA CHÚNG TÔI
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default LinkSection
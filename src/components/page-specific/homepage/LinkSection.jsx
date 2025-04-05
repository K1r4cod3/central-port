import React from 'react'
import './LinkSection.css'

const LinkSection = () => {
  return (
    <div className='relative -mt-30 mb-30'>
        <div className='w-9/12 mx-auto bg-[#00438c] bg-opacity-90 p-10'>
            <h2 className='text-white font-bold title-font text-5xl text-center'>Được quan tâm nhiều nhất</h2>
            <div className='grid grid-cols-3 gap-5 mt-7 text-center text-xl'>
                <div>
                    <a href="#" className='text-white font-bold content-font hover:underline'>TẠI SAO CHỌN CẢNG NƯỚC SÂU MIỀN TRUNG</a>
                </div>
                <div>
                    <a href="#" className='text-white font-bold content-font hover:underline'>DỊCH VỤ NỔI BẬT</a>
                </div>
                <div>
                    <a href="#" className='text-white font-bold content-font hover:underline'>CAM KẾT CỦA CHÚNG TÔI</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LinkSection
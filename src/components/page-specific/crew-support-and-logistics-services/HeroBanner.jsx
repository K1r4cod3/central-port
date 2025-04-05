import React from 'react'
import { Link } from 'react-router-dom'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div className='relative bg-cover bg-center h-[600px] bg-[url("../../../assets/crew-support-and-logistics-services/herobanner.jpg")]  flex items-center'>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='mx-auto w-[1400px] px-10 flex flex-col justify-center items-start z-40'>
        <div className='text-white font-bold uppercase leading-tight w-3/4 text-6xl mb-4'>
          <h1 className='border-t-4 pt-4 w-fit'>Dịch Vụ Hỗ Trợ Thuyền Viên và Logistics</h1>
        </div>
        <Link to="" className='bg-yellow-300 px-4 py-2 hover:text-white hover:bg-black transition duration-300 content-font font-bold text-xl'>Liên Hệ Ngay</Link>
      </div>
    </div>
  )
}

export default HeroBanner
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='relative bg-cover bg-center h-[600px] bg-[url("../../../assets/open-letter/herobanner.jpg")] flex items-center'>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='mx-auto w-[1400px] px-10 flex flex-col justify-center items-start z-40'>
        <div className='text-white font-bold uppercase leading-tight w-3/4 text-6xl mb-4'>
          <h1 className='border-t-4 pt-4 w-fit'>Thư Ngỏ</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
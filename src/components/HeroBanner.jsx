import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div className="relative bg-cover bg-center h-[600px] bg-[url('../assets/port.jpg')] flex items-center">
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='mx-auto max-w-[1400px] grid grid-cols-2 gap-8 z-40 h-50'>
        <div className='text-white font-bold uppercase leading-tight w-fit border-t-4 text-6xl'>
          <h1>cảng nước sâu <br></br> miền trung</h1>
        </div>
        <div className='bg-blue-400 px-20 py-10 items-center'>
          <h2 className='text-white title-font font-bold text-2xl'>Chúng tôi có thể giúp gì cho bạn?</h2>
          <div className=' flex items-center justify-between bg-white mt-3'>
            <input 
              type="text"
              id='search'
              name="search"
              placeholder="Tìm kiếm..."
              className='flex-grow p-2 placeholder:content-font placeholder:font-bold placeholder:text-lg placeholder:text-gray-400 placeholder:ml-9 pl-6'
            />
            <button className='bg-yellow-300 px-4 py-2 hover:text-white hover:bg-black transition duration-300 ml-2 content-font'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
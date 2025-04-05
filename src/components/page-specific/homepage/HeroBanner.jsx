import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe 
          className="absolute w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/q5UWVgxt3gk?autoplay=1&mute=1&loop=1&controls=0&playlist=q5UWVgxt3gk"
          title="Port Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-60'></div>

      {/* Content */}
      <div className='relative mx-auto max-w-[1400px] grid grid-cols-2 gap-8 z-40 h-full items-center'>
        <div className='text-white font-bold uppercase leading-tight w-fit border-t-4 text-6xl'>
          <h1>cảng nước sâu <br></br> miền trung</h1>
        </div>
        <div className='bg-[#16b8f8] px-20 py-10 items-center'>
          <h2 className='text-white title-font font-bold text-2xl'>Chúng tôi có thể giúp gì cho bạn?</h2>
          <div className='flex items-center justify-between bg-white mt-3'>
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
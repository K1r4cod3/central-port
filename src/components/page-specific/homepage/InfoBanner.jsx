import React from 'react'
import './InfoBanner.css'

const InfoBanner = () => {
  return (
    <div className='mx-auto mb-[90px] max-w-[1400px] bg-blue-100 h-[400px] flex items-center'>
        <div className='grid grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4 pr-[3.5rem] pl-[5rem] title-font'>
                    Central Deepwater Port Welcomes Visitors
                </h2>
                <p className='text-gray-600 mb-6 pr-[3.5rem] pl-[5rem] content-font'>
                    The Central Deepwater Port – your premier maritime hub in Central Vietnam – will open its doors to the public on Saturday, 29 March 2025.
                    Visitors can look forward to a day of discovery and excitement, including tours of the anchorage areas, boat trips, and insights into the port’s modern operations.
                </p>
                <div className='inline-block pr-[3.5rem] pl-[5rem]'>
                    <a href="#" className='bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition'>Tìm Hiểu Thêm</a>
                </div>
            </div>
            <div className='flex items-center py-[1.875rem] pr-[3.5rem]'>
                <iframe src="https://www.youtube.com/embed/Ex_0_UNIyO4" frameborder="0" className='rounded-lg shadow-lg' width={560} height={315}></iframe>
            </div>
        </div>
    </div>
  )
}

export default InfoBanner
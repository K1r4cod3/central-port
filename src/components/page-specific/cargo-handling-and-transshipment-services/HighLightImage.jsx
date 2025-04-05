import React from 'react'
import './HighLightImage.css'
import { Link } from 'react-router-dom'
import image1 from '../../../assets/1.jpg'
import image2 from '../../../assets/2.jpg'

const HighLightImage = () => {
  return (
    <div className='py-16 bg-[#0693ca]'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-4xl font-bold mb-12 text-center text-white title-font'>Hình Ảnh Nổi Bật</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='rounded-lg overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image1}
                  alt='Xếp dỡ hàng hóa'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Xếp dỡ hàng hóa</h3>
                <p className='text-gray-700 content-font'>Xem đội ngũ của chúng tôi xử lý hàng rời với sự chính xác và cẩn thận.</p>
              </div>
            </div>

            <div className='rounded-lg overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image2}
                  alt='Quy trình chuyển tải dầu'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Quy trình chuyển tải dầu</h3>
                <p className='text-gray-700 content-font'>
                  Tìm hiểu cách chúng tôi đảm bảo an toàn và tuân thủ trong các hoạt động chuyển tải dầu.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HighLightImage
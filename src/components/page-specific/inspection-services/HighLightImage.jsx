import React from 'react'
import './HighLightImage.css'
import image1 from '../../../assets/inspection-services/highlight1.jpg'
import image2 from '../../../assets/inspection-services/highlight2.jpg'
import image3 from '../../../assets/inspection-services/highlight3.jpg'

const HighLightImage = () => {
  return (
    <div className='py-16 bg-[#0693ca]'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-4xl font-bold mb-12 text-center text-white title-font'>Hình Ảnh Nổi Bật</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image1}
                  alt='Xếp dỡ hàng hóa'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Quy trình giám định hàng hóa</h3>
                <p className='text-gray-700 content-font'>
                Xem đội ngũ của chúng tôi giám định hàng nhập và hàng xuất với sự chính xác và cẩn thận.
                </p>
              </div>
            </div>

            <div className='overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image2}
                  alt='Quy trình chuyển tải dầu'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Giám định nhiên liệu tàu</h3>
                <p className='text-gray-700 content-font'>
                Xem cách chúng tôi thực hiện giám định nhiên liệu để đảm bảo tính chính xác và minh bạch.
                </p>
              </div>
            </div>

            <div className='overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image3}
                  alt='Xếp dỡ hàng hóa'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Cơ sở giám định</h3>
                <p className='text-gray-700 content-font'>
                Khám phá các công cụ và cơ sở mà chúng tôi sử dụng để cung cấp dịch vụ giám định đáng tin cậy.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HighLightImage
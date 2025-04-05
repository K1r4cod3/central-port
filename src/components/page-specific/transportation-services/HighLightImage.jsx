import React from 'react'
import './HighLightImage.css'
import image1 from '../../../assets/transportation-services/highlight1.jpg'
import image2 from '../../../assets/transportation-services/highlight2.jpg'
import image3 from '../../../assets/transportation-services/highlight3.jpg'  

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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Đội tàu hoạt động</h3>
                <p className='text-gray-700 content-font'>
                Xem đội tàu hiện đại của chúng tôi vận chuyển hàng hóa trên các tuyến quốc tế.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hoạt động xếp dỡ hàng hóa</h3>
                <p className='text-gray-700 content-font'>
                Xem cách chúng tôi quản lý hiệu quả việc xếp và dỡ hàng tại cảng.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Bản đồ tuyến đường toàn cầu</h3>
                <p className='text-gray-700 content-font'>
                Khám phá các tuyến hàng hải quốc tế mà chúng tôi phục vụ, kết nối miền Trung Việt Nam với thế giới.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HighLightImage
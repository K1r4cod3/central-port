import React from 'react'
import './HighLightImage.css'
import image1 from '../../../assets/technical-information/highlight1.jpg'
import image2 from '../../../assets/technical-information/highlight2.jpg'
import image3 from '../../../assets/technical-information/highlight3.jpg'

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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Tổng quan khu vực neo đậu</h3>
                <p className='text-gray-700 content-font'>
                Xem bố trí của các khu vực neo đậu với các tàu được neo đậu an toàn.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Bản đồ kỹ thuật</h3>
                <p className='text-gray-700 content-font'>
                Khám phá bản đồ chi tiết của các khu vực neo đậu với tọa độ và phạm vi độ sâu.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hoạt động xếp dỡ hàng hóa</h3>
                <p className='text-gray-700 content-font'>
                Xem thiết bị tiên tiến của chúng tôi đang xử lý hàng hóa một cách hiệu quả.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HighLightImage
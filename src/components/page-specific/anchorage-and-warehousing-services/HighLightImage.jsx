import React from 'react'
import './HighLightImage.css'
import image1 from '../../../assets/anchorage-and-warehousing-services/highlight1.jpg'
import image2 from '../../../assets/anchorage-and-warehousing-services/highlight2.jpg'
import image3 from '../../../assets/anchorage-and-warehousing-services/highlight3.jpg'

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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Khu vực neo đậu</h3>
                <p className='text-gray-700 content-font'>
                    Khám phá hai khu vực neo đậu của chúng tôi với các tàu được neo đậu an toàn, sẵn sàng cho hoạt động.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hoạt động chuyển tải xăng dầu</h3>
                <p className='text-gray-700 content-font'>
                    Xem cách chúng tôi quản lý chuyển tải xăng dầu với sự chính xác và an toàn.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Cơ sở kho dầu ngoại quan</h3>
                <p className='text-gray-700 content-font'>
                    Xem qua các giải pháp lưu trữ an toàn của chúng tôi cho các sản phẩm dầu.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HighLightImage
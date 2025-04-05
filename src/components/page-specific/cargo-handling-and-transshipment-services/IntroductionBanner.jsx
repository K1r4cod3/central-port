import React from 'react'
import './IntroductionBanner.css'
import { Link } from 'react-router-dom'

const IntroductionBanner = () => {
  return (
    <div className='py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl md:text-5xl font-bold mb-6 text-blue-400 title-font'>Giới Thiệu</h2>
            <p className='text-gray-700 leading-relaxed content-font text-lg'>
              Tại Cảng Nước Sâu Miền Trung, chúng tôi tự hào cung cấp dịch vụ xếp dỡ và chuyển tải hàng hóa hiệu quả,
              đáng tin cậy, đáp ứng nhu cầu đa dạng của khách hàng. Tọa lạc tại Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh
              Thanh Hóa, cảng của chúng tôi được trang bị cơ sở hạ tầng hiện đại và thiết bị tiên tiến để xử lý nhiều
              loại hàng hóa, đảm bảo hoạt động thông suốt cho các tàu lên đến 200.000 DWT.
            </p>
          </div>
        </div>
    </div>
  )
}

export default IntroductionBanner

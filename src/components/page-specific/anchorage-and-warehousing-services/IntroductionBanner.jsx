import React from 'react'
import './IntroductionBanner.css'

const IntroductionBanner = () => {
  return (
    <div className='py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl md:text-5xl font-bold mb-6 text-blue-400 title-font'>Giới Thiệu</h2>
            <p className='text-gray-700 leading-relaxed content-font text-lg'>
            Cảng Nước Sâu Miền Trung cung cấp dịch vụ neo đậu và kho bãi an toàn, đáng tin cậy và hiệu quả để hỗ trợ hoạt động hàng hải của bạn. Tọa lạc tại Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa, cảng của chúng tôi có hai khu vực neo đậu được thiết kế tối ưu và các giải pháp kho bãi tiên tiến, phục vụ các tàu lên đến 200.000 DWT. Dù bạn cần neo đậu an toàn cho tàu, cơ sở chuyển tải xăng dầu, hay kho ngoại quan cho dầu, chúng tôi đều có hạ tầng và chuyên môn để đáp ứng nhu cầu của bạn.
            </p>
          </div>
        </div>
    </div>
  )
}

export default IntroductionBanner
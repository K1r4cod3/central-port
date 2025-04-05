import React from 'react'
import './IntroductionBanner.css'

const IntroductionBanner = () => {
  return (
    <div className='py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl md:text-5xl font-bold mb-6 text-blue-400 title-font'>Giới Thiệu</h2>
            <p className='text-gray-700 leading-relaxed content-font text-lg'>
            Chào mừng bạn đến với dịch vụ an toàn và bảo vệ môi trường của chúng tôi! Chúng tôi tự hào là đơn vị hàng đầu cung cấp các giải pháp toàn diện nhằm đảm bảo an toàn lao động và bảo vệ môi trường cho các doanh nghiệp trong nhiều lĩnh vực, từ công nghiệp, dầu khí đến vận tải biển. Với đội ngũ chuyên gia giàu kinh nghiệm và công nghệ hiện đại, chúng tôi cam kết mang đến các dịch vụ chất lượng cao, giúp doanh nghiệp của bạn không chỉ tuân thủ các quy định pháp luật mà còn góp phần xây dựng một môi trường làm việc bền vững và an toàn.
            </p>
          </div>
        </div>
    </div>
  )
}

export default IntroductionBanner
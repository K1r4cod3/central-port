import React from 'react'
import { Link } from 'react-router-dom'
import './ContactBanner.css'
import { Phone } from 'lucide-react'

const ContactBanner = () => {
  return (
    <div className='py-16 bg-gray-300'>
       <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-2xl md:text-4xl font-bold mb-4 title-font'>
                    Bạn đang tìm kiếm dịch vụ an toàn và bảo vệ môi trường ? 
                </h2>
                <p className='text-lg mb-8 content-font'>
                Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn chi tiết và nhận các giải pháp phù hợp nhất cho doanh nghiệp của bạn! Chúng tôi luôn sẵn sàng đồng hành cùng bạn trên hành trình phát triển bền vững
                </p>
                <Link to='/contact' className='bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-4 px-6 transition-colors duration-300 text-base flex items-center justify-center gap-2 max-w-60 mx-auto'>
                    <Phone className='h-6 w-6' />
                    Liên hệ với chúng tôi
                </Link>
            </div>
        </div> 
    </div>
  )
}

export default ContactBanner
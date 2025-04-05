import React from 'react'
import { Link } from 'react-router-dom'
import './ContactBanner.css'
import { Phone } from 'lucide-react'

const ContactBanner = () => {
  return (
    <div className='py-16 bg-[#16b8f8]'>
       <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-4xl mx-auto text-center'>
                <p className='text-4xl font-bold mb-8 content-font'>
                Tìm hiểu cách Cảng Nước Sâu Miền Trung có thể hỗ trợ nhu cầu hàng hải và logistics của bạn. Khám phá các dịch vụ của chúng tôi hoặc liên hệ ngay hôm nay để biết thêm chi tiết!
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
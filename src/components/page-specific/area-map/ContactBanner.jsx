import React from 'react'
import { Link } from 'react-router-dom'
import './ContactBanner.css'
import { Phone } from 'lucide-react'

const ContactBanner = () => {
  return (
    <div className='py-16'>
       <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-2xl md:text-4xl font-bold mb-4 title-font'>
                Điều hướng Cảng Nước Sâu Miền Trung với sự tự tin  
                </h2>
                <p className='text-lg mb-8 content-font'>
                Liên hệ với chúng tôi ngay hôm nay để biết thêm chi tiết hoặc lập kế hoạch hoạt động cùng đội ngũ của chúng tôi.
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
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
                    Bạn đã sẵn sàng vận chuyển hàng hóa một cách dễ dàng và hiệu quả?
                </h2>
                <p className='text-lg mb-8 content-font'>
                    Liên hệ với chúng tôi ngay hôm nay để tìm hiểu thêm về dịch vụ vận tải của chúng tôi và cách chúng tôi có thể hỗ trợ nhu cầu logistics của bạn!
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
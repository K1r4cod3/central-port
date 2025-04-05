import React from 'react'
import './CapabilitiesBanner.css'
import { Link } from 'react-router-dom'
import { Anchor, Clock, MapPin, Ship, PenToolIcon as Tool, Users } from "lucide-react"

const CapabilitiesBanner = () => {
  return (
    <div className='py-16 bg-[#0693ca]'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-4xl font-bold mb-12 text-center text-white title-font'>Năng Lực Của Chúng Tôi</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Ship className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>Năng lực xếp dỡ</h3>
              <p className='text-gray-700 content-font'>
                Chúng tôi có khả năng xử lý 30.000 tấn/ngày, đảm bảo quy trình nhanh chóng và hiệu quả.
              </p>
            </div>

            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Anchor className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>Loại hàng hóa</h3>
              <p className='text-gray-700 content-font'>
                Cảng chuyên xử lý than, quặng, clinker, đá, cát xây dựng và các loại hàng rời khác.
              </p>
            </div>

            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Ship className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>Chuyển tải dầu</h3>
              <p className='text-gray-700 content-font'>
                Chúng tôi cung cấp dịch vụ chuyển tải dầu an toàn, tuân thủ tiêu chuẩn quốc tế với kiểm soát chất lượng
                nghiêm ngặt.
              </p>
            </div>

            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Anchor className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>Xếp dỡ ngoài khơi</h3>
              <p className='text-gray-700 content-font'>
                Sử dụng công nghệ tiên tiến, chúng tôi cung cấp giải pháp xếp dỡ ngoài khơi linh hoạt và hiệu quả cho
                nhiều ngành công nghiệp.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CapabilitiesBanner
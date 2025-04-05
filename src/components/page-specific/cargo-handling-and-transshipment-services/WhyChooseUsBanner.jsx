import React from 'react'
import './WhyChooseUsBanner.css'
import { Link } from 'react-router-dom'
import { Anchor, Clock, MapPin, Ship, PenToolIcon as Tool, Users } from "lucide-react"

const WhyChooseUsBanner = () => {
  return (
    <div className='py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-3xl font-bold mb-12 text-center text-blue-400 title-font'>
            Tại Sao Lại Chọn Chúng Tôi?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Tool className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Thiết bị hiện đại</h3>
                <p className='text-gray-700 content-font'>
                  Cần cẩu, hệ thống băng chuyền và máy móc xử lý tiên tiến giúp tiết kiệm thời gian và chi phí cho khách
                  hàng.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Users className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Đội ngũ giàu kinh nghiệm</h3>
                <p className='text-gray-700 content-font'>
                  Lực lượng lao động lành nghề được đào tạo để xử lý hàng hóa chính xác, đảm bảo an toàn và tuân thủ
                  tiêu chuẩn quốc tế.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Clock className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hoạt động 24/7</h3>
                <p className='text-gray-700 content-font'>
                  Chúng tôi hoạt động liên tục để đáp ứng lịch trình của bạn, giảm thiểu thời gian chờ và tối ưu hóa
                  năng suất.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <MapPin className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Vị trí chiến lược</h3>
                <p className='text-gray-700 content-font'>
                  Nằm ở miền Trung Việt Nam, chúng tôi là cửa ngõ quan trọng cho các tuyến hàng hải quốc tế, kết nối bạn
                  với thị trường toàn cầu.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WhyChooseUsBanner
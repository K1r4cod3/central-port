import React from 'react'
import './WhyChooseUsBanner.css'
import { Clock, MapPin, TrafficCone, Truck } from "lucide-react"

const WhyChooseUsBanner = () => {
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-3xl font-bold mb-12 text-center text-blue-400 title-font'>
            Tại Sao Lại Chọn Chúng Tôi?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <MapPin className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Chuyên gia giám định</h3>
                <p className='text-gray-700 content-font'>
                Đội ngũ giám định viên giàu kinh nghiệm của chúng tôi được đào tạo để mang lại kết quả chính xác và đáng tin cậy, đảm bảo tiêu chuẩn cao nhất về chất lượng và an toàn.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Truck className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Tuân thủ quốc tế</h3>
                <p className='text-gray-700 content-font'>
                Chúng tôi tuân thủ các tiêu chuẩn và quy định toàn cầu, cung cấp dịch vụ giám định đáp ứng yêu cầu của thị trường quốc tế.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <TrafficCone className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Minh bạch và chính xác</h3>
                <p className='text-gray-700 content-font'>
                Báo cáo giám định chi tiết của chúng tôi cung cấp cho bạn cái nhìn đầy đủ về chất lượng và số lượng hàng hóa cũng như nhiên liệu, giảm rủi ro và đảm bảo sự tin cậy.
                </p>
              </div>
            </div>

            <div className='flex items-start md:col-start-1 md:col-end-2'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Clock className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hỗ trợ 24/7</h3>
                <p className='text-gray-700 content-font'>
                Chúng tôi cung cấp dịch vụ giám định liên tục 24/7 để phù hợp với lịch trình của bạn, đảm bảo hoạt động của bạn diễn ra suôn sẻ mà không bị chậm trễ.
                </p>
              </div>
            </div>

            <div className='flex items-start md:col-start-3 md:col-end-4'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Clock className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Vị trí chiến lược</h3>
                <p className='text-gray-700 content-font'>
                Nằm ở miền Trung Việt Nam, chúng tôi cung cấp khả năng tiếp cận dễ dàng cho các hoạt động giám định, khiến chúng tôi trở thành đối tác thuận tiện cho nhu cầu hàng hải của bạn.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsBanner
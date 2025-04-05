import React from 'react'
import { Trash2, Fuel, LifeBuoy } from 'lucide-react'

const ServiceBanner = () => {
  return (
    <div className='py-16 bg-[#0693ca]'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-5xl font-bold mb-12 text-center text-white title-font'>Dịch vụ của chúng tôi</h2>

          <div className='space-y-12'>
            {/* Service 1 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Fuel className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Kiểm soát và xử lý tràn dầu:</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Chúng tôi triển khai các biện pháp ứng phó nhanh chóng và hiệu quả để kiểm soát sự cố tràn dầu, giảm thiểu tối đa tác động đến môi trường biển và đất liền. Đội ngũ của chúng tôi được trang bị các thiết bị chuyên dụng và được đào tạo bài bản để xử lý các tình huống khẩn cấp, đảm bảo an toàn cho cả con người và hệ sinh thái.
              </p>
            </div>

            {/* Service 2 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Trash2 className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Thu gom rác thải</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Chúng tôi cung cấp dịch vụ thu gom, phân loại và xử lý rác thải một cách an toàn, tuân thủ nghiêm ngặt các quy định về môi trường của địa phương và quốc tế. Quy trình của chúng tôi được thiết kế để giảm thiểu nguy cơ ô nhiễm, đồng thời tái chế tối đa các loại rác thải, góp phần bảo vệ tài nguyên thiên nhiên.
              </p>
            </div>

            {/* Service 3 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <LifeBuoy className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Cho thuê phao chống va & phao chống tràn dầu</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Chúng tôi cung cấp các loại phao chống va và phao chống tràn dầu chất lượng cao để bảo vệ các khu vực làm việc nhạy cảm, như cảng biển, bến tàu, hoặc các khu vực khai thác dầu khí. Thiết bị của chúng tôi được kiểm định kỹ lưỡng, đảm bảo hiệu quả trong việc ngăn ngừa sự cố và bảo vệ môi trường xung quanh.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceBanner
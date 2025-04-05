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

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <MapPin className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Khu vực neo đậu chiến lược</h3>
                <p className='text-gray-700 content-font'>
                  Hai khu vực neo đậu được thiết kế tối ưu để tiếp nhận nhiều loại tàu, đảm bảo an toàn và hiệu quả.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hạ tầng tiên tiến</h3>
                <p className='text-gray-700 content-font'>
                  Được trang bị các cơ sở hiện đại, chúng tôi cung cấp giải pháp lưu trữ và chuyển tải an toàn cho dầu và các hàng hóa khác.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>An toàn và tuân thủ</h3>
                <p className='text-gray-700 content-font'>
                  Chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn an toàn và môi trường, đảm bảo hoạt động an toàn cho tất cả tàu và hàng hóa.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Clock className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hỗ trợ 24/7</h3>
                <p className='text-gray-700 content-font'>
                  Đội ngũ tận tâm của chúng tôi luôn sẵn sàng hỗ trợ các nhu cầu neo đậu, chuyển tải và lưu trữ, giảm thiểu thời gian gián đoạn.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsBanner
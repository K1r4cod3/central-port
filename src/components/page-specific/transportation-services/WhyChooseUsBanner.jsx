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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Đội tàu hiện đại</h3>
                <p className='text-gray-700 content-font'>
                Tàu của chúng tôi được trang bị công nghệ mới nhất, đảm bảo vận chuyển an toàn và hiệu quả cho mọi loại hàng hóa.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Giải pháp linh hoạt</h3>
                <p className='text-gray-700 content-font'>
                Chúng tôi cung cấp các tùy chọn thuê tàu tùy chỉnh để đáp ứng yêu cầu lịch trình và hàng hóa cụ thể của bạn, giúp tiết kiệm thời gian và chi phí.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Kết nối toàn cầu</h3>
                <p className='text-gray-700 content-font'>
                Là cửa ngõ cho các tuyến hàng hải quốc tế, chúng tôi kết nối bạn với các thị trường trọng điểm tại Đông Nam Á, Trung Quốc, Nhật Bản và hơn thế nữa.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Đội ngũ giàu kinh nghiệm</h3>
                <p className='text-gray-700 content-font'>
                Thuyền viên và chuyên gia logistics của chúng tôi đảm bảo hoạt động suôn sẻ, từ xếp hàng đến giao hàng, với trọng tâm là an toàn và độ tin cậy.
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
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hỗ trợ 24/7</h3>
                <p className='text-gray-700 content-font'>
                Chúng tôi cung cấp hỗ trợ liên tục 24/7 để đáp ứng nhu cầu vận tải của bạn, đảm bảo hàng hóa của bạn luôn được vận chuyển đúng tiến độ.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsBanner
import React from 'react'
import './WhyChooseUsBanner.css'
import { Clock, MapPin, Users, ScrollText } from "lucide-react"

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
                  <Clock className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Hỗ trợ liên tục 24/7</h3>
                <p className='text-gray-700 content-font'>
                Đội ngũ của chúng tôi luôn sẵn sàng 24/7 để hỗ trợ vận chuyển, khai báo và trao đổi thuyền viên, đảm bảo hoạt động của bạn không bị gián đoạn.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <ScrollText className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Chuyên môn về quy định</h3>
                <p className='text-gray-700 content-font'>
                Chúng tôi có kiến thức sâu rộng về các quy định hàng hải địa phương và quốc tế, đảm bảo tuân thủ đầy đủ và quy trình không rườm rà.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Users className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Đội ngũ tận tâm và giàu kinh nghiệm</h3>
                <p className='text-gray-700 content-font'>
                Nhân viên của chúng tôi được đào tạo để cung cấp sự hỗ trợ xuất sắc, xử lý mọi khía cạnh của logistics thuyền viên với sự cẩn trọng và chuyên nghiệp.
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
                Nằm ở miền Trung Việt Nam, chúng tôi cung cấp khả năng tiếp cận dễ dàng đến các cơ sở thuyền viên và trung tâm logistics, khiến chúng tôi trở thành đối tác lý tưởng cho nhu cầu hàng hải của bạn.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsBanner
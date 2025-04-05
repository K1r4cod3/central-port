import React from 'react'
import './ServiceBanner.css'
import { AnchorIcon, Fuel, Warehouse } from 'lucide-react'

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
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Giám định hàng nhập</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Chúng tôi thực hiện giám định kỹ lưỡng đối với hàng hóa nhập khẩu để xác minh chất lượng, số lượng và an toàn trước khi hàng nhập cảng. Đội ngũ của chúng tôi đảm bảo rằng tất cả hàng hóa đáp ứng các tiêu chuẩn yêu cầu và tuân thủ quy định địa phương cũng như quốc tế, mang lại cho bạn sự tự tin về tính toàn vẹn của lô hàng.
              </p>
            </div>

            {/* Service 2 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Fuel className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Giám định hàng xuất</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Dịch vụ giám định hàng xuất của chúng tôi đảm bảo rằng hàng hóa của bạn đáp ứng các tiêu chuẩn của thị trường đích. Chúng tôi đánh giá cẩn thận về chất lượng, số lượng và sự tuân thủ, giúp giảm rủi ro và tránh các tranh chấp tốn kém, để hàng hóa của bạn có thể đến nơi với sự tự tin hoàn toàn.
              </p>
            </div>

            {/* Service 3 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Warehouse className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Giám định nhiên liệu tàu - Bunker Survey</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Chúng tôi cung cấp dịch vụ giám định nhiên liệu tàu chuyên nghiệp để đo lường và xác minh số lượng cũng như chất lượng nhiên liệu trên tàu của bạn. Các cuộc kiểm tra chi tiết của chúng tôi đảm bảo tính minh bạch trong giao dịch nhiên liệu, giúp ngăn ngừa sai lệch và tranh chấp giữa chủ tàu và nhà cung cấp. Với chuyên môn của chúng tôi, bạn có thể yên tâm rằng nguồn nhiên liệu của bạn chính xác và tuân thủ.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceBanner
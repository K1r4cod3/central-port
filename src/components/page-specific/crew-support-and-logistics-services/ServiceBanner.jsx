import React from 'react'
import { Ship, Sailboat, Users  } from 'lucide-react'

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
                  <Ship className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Dịch vụ đưa đón thuyền viên từ tàu đi bờ</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Chúng tôi cung cấp dịch vụ vận chuyển an toàn, đáng tin cậy và thoải mái cho thuyền viên di chuyển giữa tàu và bờ. Dù là chuyến đi ngắn đến cảng hay chuyển tiếp đến các cơ sở lân cận, dịch vụ vận chuyển 24/7 của chúng tôi đảm bảo thuyền viên của bạn có thể di chuyển nhanh chóng mà không bị chậm trễ. Đội ngũ tận tâm của chúng tôi luôn tuân thủ các giao thức an toàn, mang lại sự yên tâm cho bạn.
              </p>
            </div>

            {/* Service 2 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Sailboat className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Dịch vụ khai báo thuyền viên đi bờ</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Việc xử lý các quy định địa phương liên quan đến thuyền viên đi bờ có thể phức tạp, nhưng chúng tôi giúp bạn đơn giản hóa quy trình này. Đội ngũ của chúng tôi xử lý tất cả các thủ tục khai báo đi bờ một cách chính xác, đảm bảo tuân thủ các quy định địa phương và quốc tế. Chúng tôi tối ưu hóa quy trình để thuyền viên của bạn có thể tận hưởng thời gian trên bờ mà không gặp rắc rối về thủ tục, giúp bạn tập trung vào hoạt động cốt lõi của mình.
              </p>
            </div>

            {/* Service 3 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Users className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Dịch vụ trao đổi thuyền viên</h3>
              </div>

              <p className='text-gray-700 content-font'>
              Chúng tôi cung cấp dịch vụ trao đổi thuyền viên chuyên nghiệp để hỗ trợ quá trình chuyển giao thuyền viên đến và đi một cách suôn sẻ. Đội ngũ giàu kinh nghiệm của chúng tôi phối hợp mọi chi tiết, từ lịch trình, vận chuyển đến giấy tờ, đảm bảo thời gian gián đoạn của tàu bạn được giảm thiểu tối đa. Dù bạn đang quản lý một đội thuyền viên nhỏ hay lớn, chúng tôi đều cung cấp các giải pháp phù hợp để giữ cho hoạt động của bạn diễn ra trơn tru.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceBanner
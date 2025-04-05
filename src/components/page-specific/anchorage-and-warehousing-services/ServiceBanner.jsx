import React from 'react'
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
                  <AnchorIcon className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Neo đậu tàu thuyền</h3>
              </div>

              <p className='text-gray-700 mb-4 content-font'>
                Chúng tôi cung cấp dịch vụ neo đậu an toàn và đáng tin cậy cho tàu thuyền mọi kích cỡ, với hai khu vực
                được chỉ định:
              </p>

              <div className='pl-4 mb-4 space-y-4'>
                <div className='bg-blue-50 p-4'>
                  <p className='text-gray-800 font-medium content-font'>Khu vực neo đậu số 1:</p>
                  <p className='text-gray-700 content-font'>
                    Diện tích 2.4 km², độ sâu 13.6 m - 15.8 m, phù hợp cho tàu từ 60.000 DWT đến 80.000 DWT (mớn nước
                    tối đa: 14.5 m).
                  </p>
                </div>

                <div className='bg-blue-50 p-4'>
                  <p className='text-gray-800 font-medium content-font'>Khu vực neo đậu số 2:</p>
                  <p className='text-gray-700 content-font'>
                    Diện tích 2.9 km², độ sâu 17.0 m - 20.8 m, lý tưởng cho tàu trên 80.000 DWT (mớn nước tối đa: 18.5
                    m).
                  </p>
                </div>
              </div>

              <p className='text-gray-700 content-font'>
                Hỗ trợ 24/7 đảm bảo tàu của bạn luôn sẵn sàng hoạt động, với các kênh liên lạc VHF (CH16 cho kiểm soát
                cảng, CH09 cho hoa tiêu) để phối hợp suôn sẻ.
              </p>
            </div>

            {/* Service 2 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Fuel className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Neo đậu chuyển tải xăng dầu</h3>
              </div>

              <p className='text-gray-700 content-font'>
                Chúng tôi cung cấp dịch vụ neo đậu chuyên biệt cho chuyển tải xăng dầu, đảm bảo quá trình chuyển giao
                sản phẩm dầu an toàn và hiệu quả. Hạ tầng của chúng tôi được thiết kế để xử lý tàu chở dầu với các giao
                thức an toàn nghiêm ngặt, giảm thiểu rủi ro và đảm bảo tuân thủ tiêu chuẩn quốc tế. Với độ sâu lên đến
                20.8 m tại khu vực neo đậu số 2, chúng tôi có thể tiếp nhận các tàu chở dầu lớn để thực hiện chuyển tải
                suôn sẻ.
              </p>
            </div>

            {/* Service 3 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Warehouse className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>Kho dầu ngoại quan</h3>
              </div>

              <p className='text-gray-700 content-font'>
                Cơ sở kho dầu ngoại quan của chúng tôi cung cấp giải pháp lưu trữ an toàn và hiệu quả cho các sản phẩm
                dầu. Được thiết kế theo tiêu chuẩn quốc tế, kho bãi của chúng tôi đảm bảo an toàn và chất lượng cho hàng
                hóa dầu của bạn, đồng thời cung cấp các tùy chọn lưu trữ linh hoạt. Dù bạn cần lưu trữ ngắn hạn hay dài
                hạn, chúng tôi đều có giải pháp phù hợp để hỗ trợ chuỗi cung ứng của bạn.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceBanner
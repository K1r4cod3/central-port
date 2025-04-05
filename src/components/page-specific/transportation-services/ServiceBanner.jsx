import React from 'react'
import { ArrowRight } from 'lucide-react'
import image from '../../../assets/transportation-services/service.jpg'

const ServiceBanner = () => {
  return (
    <div className='my-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-3/4 mx-auto'>
            <div className="bg-blue-500 text-white p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase title-font">Cho thuê tàu</h2>
                <p className="mb-8 text-blue-50 content-font text-2xl">
                Chúng tôi cung cấp đội tàu hiện đại và đa dạng cho các tuyến hàng hải quốc tế. Tàu của chúng tôi được trang bị công nghệ tiên tiến để xử lý nhiều loại hàng hóa, bao gồm hàng rời như than, quặng, clinker, cũng như dầu và các hàng hóa khác. Với các tùy chọn thuê linh hoạt, chúng tôi đảm bảo lịch trình tối ưu và hiệu quả chi phí, cho phép bạn tập trung vào hoạt động cốt lõi của mình trong khi chúng tôi lo liệu việc vận chuyển.
                </p>
            </div>

            {/* Right side - Image */}
            <div className="relative min-h-[400px]">
                <img
                src={image}
                alt="Ban lãnh đạo Cảng Nước Sâu Miền Trung"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default ServiceBanner
import React from 'react'
import './WhyChooseUsBanner.css'
import { Users, Cpu, Trees } from "lucide-react"

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
                  <Users className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Chuyên nghiệp và tận tâm</h3>
                <p className='text-gray-700 content-font'>
                Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ 24/7, đảm bảo giải quyết mọi vấn đề một cách nhanh chóng và hiệu quả.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Cpu className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Công nghệ tiên tiến</h3>
                <p className='text-gray-700 content-font'>
                Chúng tôi sử dụng các thiết bị và công nghệ hiện đại nhất để mang lại kết quả tối ưu.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Trees className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>Cam kết bền vững</h3>
                <p className='text-gray-700 content-font'>
                Mọi hoạt động của chúng tôi đều hướng đến việc bảo vệ môi trường và xây dựng một tương lai xanh.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsBanner
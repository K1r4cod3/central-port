import React from 'react'
import './ExploreBanner.css'
import pic5 from '../assets/5.jpg'
import pic6 from '../assets/6.jpg'

const ExploreBanner = () => {
  return (
    <div>
        <div className='mx-auto mb-[90px] max-w-[1440px]'>
            <div className="flex flex-col md:flex-row">
            {/* Div Chữ (Trái) */}
                <div className="ml-8 pr-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Khám Phá Cảng Nước Sâu Miền Trung</h3>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Cảng Nước Sâu Miền Trung là trung tâm hàng hải hàng đầu tại miền Trung Việt Nam, với các số liệu ấn tượng:
                    </h3>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Diện tích cảng: 5,5 km²
                    </h3>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Năng lực tiếp nhận: Tàu 200.000 DWT
                    </h3>
                </div>

                {/* Div Điều Hướng (Phải) */}
                <div className="mx-8 flex flex-col sm:flex-row gap-6">
                    {/* Ảnh 1 */}
                    <div className="relative">
                        <img
                            src={pic5}
                            alt="Port 1"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a href="#" className="text-white text-lg font-semibold hover:underline">
                            Cảng Container
                            </a>
                        </div>
                    </div>

                    {/* Ảnh 2 */}
                    <div className="relative">
                        <img
                            src={pic6}
                            alt="Port 2"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a href="#" className="text-white text-lg font-semibold hover:underline">
                            Cảng Dầu Khí
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ExploreBanner
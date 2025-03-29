import React from 'react'
import './NewsBanner.css'
import new1 from '../assets/1.jpg'
import new2 from '../assets/2.jpg'
import new3 from '../assets/3.jpg'
import new4 from '../assets/4.jpg'

export const NewsBanner = () => {
  return (
    <div className='mx-auto mb-[90px] max-w-[1440px] w-full'>
        <h2 className="text-3xl font-bold uppercase text-gray-800 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* News Item 1 */}
            <div className="flex flex-col">
                <img
                src={new1}
                alt="News 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className="text-gray-500 text-sm mb-2">19/3/2025</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Chứng khoán Mỹ xanh rực nhờ hy vọng về thuế quan, giá dầu tăng hơn 1% sau tin Venezuela</h3>
            </div>

            {/* News Item 2 */}
            <div className="flex flex-col">
                <img
                src={new2}
                alt="News 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className="text-gray-500 text-sm mb-2">18/3/2025</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                Ông Trump lại “tung hỏa mù” về thuế quan
                </h3>
            </div>

            {/* News Item 3 */}
            <div className="flex flex-col">
                <img
                src={new3}
                alt="News 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className="text-gray-500 text-sm mb-2">19/3/2025</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Dự báo 20 nền kinh tế tăng trưởng nhanh nhất thế giới năm 2025, Việt Nam cũng có mặt</h3>
            </div>

            {/* News Item 4 */}
            <div className="flex flex-col">
                <img
                src={new4}
                alt="News 4"
                className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className="text-gray-500 text-sm mb-2">19/3/2025</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                Châu Âu lo không thể tiếp tục dựa vào nguồn cung USD từ Fed
                </h3>
            </div>
        </div>

    </div>
  )
}

import "./NewsBanner.css"
import new1 from "../../../assets/1.jpg"
import new2 from "../../../assets/2.jpg"
import new3 from "../../../assets/3.jpg"
import new4 from "../../../assets/4.jpg"

export const NewsBanner = () => {
  return (
    <div className="mx-auto mb-[40px] sm:mb-[60px] md:mb-[90px] max-w-[1440px] w-full px-4 sm:px-6 md:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-4 sm:mb-6 md:mb-8">
        Latest News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* News Item 1 */}
        <div className="flex flex-col">
          <img
            src={new1 || "/placeholder.svg"}
            alt="News 1"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
          />
          <span className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">19/3/2025</span>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2">
            Chứng khoán Mỹ xanh rực nhờ hy vọng về thuế quan, giá dầu tăng hơn 1% sau tin Venezuela
          </h3>
        </div>

        {/* News Item 2 */}
        <div className="flex flex-col">
          <img
            src={new2 || "/placeholder.svg"}
            alt="News 2"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
          />
          <span className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">18/3/2025</span>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2">
            Ông Trump lại "tung hỏa mù" về thuế quan
          </h3>
        </div>

        {/* News Item 3 */}
        <div className="flex flex-col">
          <img
            src={new3 || "/placeholder.svg"}
            alt="News 3"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
          />
          <span className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">19/3/2025</span>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2">
            Dự báo 20 nền kinh tế tăng trưởng nhanh nhất thế giới năm 2025, Việt Nam cũng có mặt
          </h3>
        </div>

        {/* News Item 4 */}
        <div className="flex flex-col">
          <img
            src={new4 || "/placeholder.svg"}
            alt="News 4"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
          />
          <span className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">19/3/2025</span>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2">
            Châu Âu lo không thể tiếp tục dựa vào nguồn cung USD từ Fed
          </h3>
        </div>
      </div>
    </div>
  )
}

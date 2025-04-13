import "./LinkSection.css"
import { LightbulbIcon, UserIcon, FileTextIcon } from "lucide-react"

const LinkSection = () => {
  return (
    <div className="relative sm:-mt-20 md:-mt-30 mb-6 sm:mb-8 md:mb-20 z-10">
      <div className="w-full sm:w-11/12 md:w-9/12 mx-auto bg-[#00438c] bg-opacity-90 p-4 sm:p-6 md:p-8">
        {/* Services Grid - simple grid that adjusts based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Service Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
              <FileTextIcon className="w-8 h-8 text-[#00438c]" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-sm mb-1 sm:mb-2 px-2">
              TẠI SAO CHỌN CẢNG NEO ĐẬU NƯỚC SÂU MIỀN TRUNG
            </h3>
            <p className="text-white text-xs sm:text-sm opacity-80 px-2 sm:px-4">
              Cảng nước sâu hiện đại với khả năng tiếp nhận tàu lớn và dịch vụ chất lượng cao.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
              <UserIcon className="w-8 h-8 text-[#00438c]" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-sm mb-1 sm:mb-2 px-2">DỊCH VỤ NỔI BẬT</h3>
            <p className="text-white text-xs sm:text-sm opacity-80 px-2 sm:px-4">
              Cung cấp dịch vụ xếp dỡ, kho bãi và hậu cần toàn diện cho đối tác.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
              <LightbulbIcon className="w-8 h-8 text-[#00438c]" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-sm mb-1 sm:mb-2 px-2">CAM KẾT CỦA CHÚNG TÔI</h3>
            <p className="text-white text-xs sm:text-sm opacity-80 px-2 sm:px-4">
              Xây dựng cảng thân thiện môi trường, an toàn và hiệu quả cho mọi đối tác.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkSection

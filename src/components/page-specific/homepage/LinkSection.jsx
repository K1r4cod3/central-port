import "./LinkSection.css"
import { LightbulbIcon, UserIcon, FileTextIcon } from "lucide-react"

const LinkSection = () => {
  return (
    <div className="relative sm:-mt-20 md:-mt-30 mb-8 sm:mb-10 md:mb-30 z-10">
      <div className="w-full sm:w-11/12 md:w-9/12 mx-auto bg-[#00438c] bg-opacity-90 p-6 sm:p-8 md:p-10">
        {/* Main Heading */}
        <h2 className="text-white font-bold title-font text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">
          Được quan tâm nhiều nhất
        </h2>

        {/* Services Grid - simple grid that adjusts based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              <FileTextIcon className="w-10 h-10 text-[#00438c]" />
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">TẠI SAO CHỌN CẢNG NƯỚC SÂU MIỀN TRUNG</h3>
            <p className="text-white text-sm sm:text-base opacity-80">
              Cảng nước sâu hiện đại với khả năng tiếp nhận tàu lớn và dịch vụ chất lượng cao.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              <UserIcon className="w-10 h-10 text-[#00438c]" />
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">DỊCH VỤ NỔI BẬT</h3>
            <p className="text-white text-sm sm:text-base opacity-80">
              Cung cấp dịch vụ xếp dỡ, kho bãi và hậu cần toàn diện cho đối tác.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
              <LightbulbIcon className="w-10 h-10 text-[#00438c]" />
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">CAM KẾT CỦA CHÚNG TÔI</h3>
            <p className="text-white text-sm sm:text-base opacity-80">
              Xây dựng cảng thân thiện môi trường, an toàn và hiệu quả cho mọi đối tác.
            </p>
          </div>

          {/* To add more items, simply copy one of the service items above and paste it here */}
        </div>
      </div>
    </div>
  )
}

export default LinkSection

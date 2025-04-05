import React from 'react'
import logo from '../../../assets/logo1.png'

const OpenLetter = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-10">
            <img
              src={logo}
              alt="Cảng Nước Sâu Miền Trung Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-blue-900 uppercase">CẢNG NƯỚC SÂU MIỀN TRUNG</h1>
            <p className="text-gray-700">Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa, Việt Nam</p>
            <p className="text-gray-700">Email: cangnuocsaumientrung@gmail.com | Điện thoại: + 024.9999.9889</p>
          </div>
        </div>

        {/* Date */}
        <div className="text-right mb-8">
          <p className="text-gray-700">Nghi Son, ngày 03 tháng 04 năm 2025</p>
        </div>

        {/* Letter Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 uppercase">
            THƯ NGỎ - HỢP TÁC CÙNG CẢNG NƯỚC SÂU MIỀN TRUNG
          </h2>
        </div>

        {/* Letter Content */}
        <div className="space-y-6 text-gray-800">
          <p className="font-semibold">Kính gửi Quý Đối Tác,</p>

          <p className="text-justify">
            Chúng tôi là Cảng Nước Sâu Miền Trung, cảng nước sâu hàng đầu tại miền Trung Việt Nam, tọa lạc tại Khu vực
            Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa. Với diện tích 5.5 km² và năng lực tiếp nhận tàu lên đến 100.000
            DWT, chúng tôi tự hào là một trong top 10 cảng biển tại Việt Nam, đóng vai trò quan trọng trong việc kết nối
            miền Trung Việt Nam với các tuyến hàng hải quốc tế.
          </p>

          <p className="text-justify">
            Chúng tôi viết thư này để giới thiệu các dịch vụ hàng hải và logistics của cảng, bao gồm xếp dỡ hàng hóa với
            năng lực 30.000 tấn/ngày, neo đậu tàu an toàn, giám định hàng hóa và nhiên liệu, cùng các giải pháp
            logistics toàn diện. Đồng thời, chúng tôi bày tỏ mong muốn thiết lập mối quan hệ hợp tác lâu dài với Quý
            Công Ty để cùng phát triển bền vững trong ngành hàng hải.
          </p>

          <p className="text-justify">
            Hợp tác với Cảng Nước Sâu Miền Trung sẽ giúp Quý Công Ty tối ưu hóa chi phí vận chuyển, đảm bảo an toàn hàng
            hóa, và nâng cao hiệu quả chuỗi cung ứng nhờ vị trí chiến lược và cơ sở hạ tầng hiện đại của chúng tôi.
            Chúng tôi rất mong có cơ hội gặp gỡ Quý Công Ty để thảo luận chi tiết về tiềm năng hợp tác và các giải pháp
            phù hợp với nhu cầu của Quý Công Ty.
          </p>

          <p className="text-justify">
            Chúng tôi xin chân thành cảm ơn Quý Công Ty đã dành thời gian xem xét thư ngỏ này. Mọi thông tin chi tiết,
            xin vui lòng liên hệ qua email cangnuocsaumientrung@gmail.com hoặc số điện thoại:
          </p>

          <div className="pl-4">
            <p>+ 024.9999.9889</p>
            <p>+ 023.6999.9889</p>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-12">
          <p className="font-semibold">Trân trọng,</p>
          <p className="mt-8 font-bold">Giám đốc Cảng Nước Sâu Miền Trung</p>
          <div className="h-20"></div> {/* Space for signature */}
        </div>
      </div>
    </div>
  )
}

export default OpenLetter
import React from 'react'
import worldMap from '../../../assets/map.jpg'
import area2 from '../../../assets/area2.png'

const ContentBanner = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 title-font">Giới thiệu</h1>
          <p className="text-gray-700 leading-relaxed content-font">
            Khu vực neo đậu số 2 tại Cảng Nước Sâu Miền Trung là một khu vực quan trọng được thiết kế để tiếp nhận các tàu lớn hơn với sự an toàn và hiệu quả. Nằm tại Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa, khu vực này thuộc khuôn viên cảng rộng 55 km² của chúng tôi, có khả năng tiếp nhận tàu lên đến 200.000 DWT. Với vùng nước sâu hơn và bố trí rộng rãi, Khu vực neo đậu số 2 là lựa chọn lý tưởng cho các tàu trên 80.000 DWT, cung cấp không gian an toàn và đáng tin cậy cho việc neo đậu, chuyển tải và các hoạt động hàng hải khác.
          </p>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">Thông số kỹ thuật</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-3 content-font text-gray-700">
                <li><span className="font-semibold">Diện tích:</span> 2.9 km²</li>
                <li><span className="font-semibold">Độ sâu:</span> 17.0 m đến 20.8 m</li>
                <li><span className="font-semibold">Phù hợp cho:</span> Tàu trên 80.000 DWT (mớn nước tối đa: 18.5 m)</li>
                <li><span className="font-semibold">Liên lạc VHF:</span> CH16 cho kiểm soát cảng, CH09 cho hoa tiêu</li>
              </ul>
            </div>
            
            {/* Coordinates Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
              <h3 className="text-xl font-bold text-blue-900 mb-4 title-font">Tọa độ</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Long (E)</th>
                      <th className="px-4 py-2 border">Lat (N)</th>
                    </tr>
                  </thead>
                  <tbody className="content-font">
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.5</td>
                      <td className="px-4 py-2 border">105°55'55.1"</td>
                      <td className="px-4 py-2 border">19°18'18.5"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.6</td>
                      <td className="px-4 py-2 border">105°56'52.9"</td>
                      <td className="px-4 py-2 border">19°18'18.2"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.7</td>
                      <td className="px-4 py-2 border">105°56'52.6"</td>
                      <td className="px-4 py-2 border">19°17'23.2"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.8</td>
                      <td className="px-4 py-2 border">105°55'54.8"</td>
                      <td className="px-4 py-2 border">19°17'23.5"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">Bản đồ khu vực neo đậu</h2>
          <p className="text-gray-700 mb-6 content-font">
            Bản đồ dưới đây cung cấp cái nhìn chi tiết về Khu vực neo đậu số 2, bao gồm tọa độ và phạm vi độ sâu, để hỗ trợ việc điều hướng và lập kế hoạch. Khu vực này được tối ưu hóa cho các tàu lớn hơn, đảm bảo neo đậu an toàn và hoạt động hiệu quả cho việc chuyển tải, xử lý dầu hoặc thời gian chờ đợi.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={worldMap} alt="Bản đồ khu vực neo đậu" className="w-full h-auto" />
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">Lợi ích chính</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Thiết kế cho tàu lớn:</strong> Với diện tích 2.9 km² và độ sâu từ 17.0 m đến 20.8 m, khu vực này hoàn hảo cho tàu trên 80.000 DWT, đảm bảo neo đậu an toàn và chắc chắn.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Hoạt động hiệu quả:</strong> Liên lạc VHF 24/7 (CH16 và CH09) cho phép phối hợp liền mạch với kiểm soát cảng và hoa tiêu, giảm chậm trễ và nâng cao hiệu quả.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Lý tưởng cho chuyển tải dầu:</strong> Vùng nước sâu hơn khiến khu vực này phù hợp cho tàu chở dầu, với các giao thức an toàn nghiêm ngặt để hỗ trợ hoạt động chuyển tải hiệu quả và an toàn.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Tuân thủ an toàn và môi trường:</strong> Chúng tôi tuân thủ các tiêu chuẩn quốc tế, cung cấp dịch vụ ứng phó sự cố tràn dầu 24/7 và quản lý chất thải để bảo vệ tàu của bạn và môi trường.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContentBanner

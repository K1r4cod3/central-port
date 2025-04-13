import React from 'react'
import worldMap from '../../../assets/map.jpg'
import area1 from '../../../assets/area1.png'

const ContentBanner = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 title-font">Giới thiệu</h1>
          <p className="text-gray-700 leading-relaxed content-font">
            Khu vực neo đậu số 1 tại Cảng Nước Sâu Miền Trung là một khu vực được thiết kế chiến lược để đảm bảo việc neo đậu an toàn và hiệu quả cho các tàu. Tọa lạc tại Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa, khu vực này nằm trong khuôn viên cảng rộng 55 km² của chúng tôi, có khả năng tiếp nhận tàu lên đến 200.000 DWT. Với độ sâu tối ưu và bố trí rộng rãi, Khu vực neo đậu số 1 là lựa chọn lý tưởng cho các tàu từ 60.000 DWT đến 80.000 DWT, cung cấp không gian an toàn và đáng tin cậy cho các hoạt động hàng hải của bạn.
          </p>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">Thông số kỹ thuật</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-3 content-font text-gray-700">
                <li><span className="font-semibold">Diện tích:</span> 2.4 km²</li>
                <li><span className="font-semibold">Độ sâu:</span> 13.6 m đến 15.8 m</li>
                <li><span className="font-semibold">Phù hợp cho:</span> Tàu từ 60.000 DWT đến 80.000 DWT (mớn nước tối đa: 14.5 m)</li>
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
                      <td className="px-4 py-2 border">DVNS.1</td>
                      <td className="px-4 py-2 border">105°52'00.1"</td>
                      <td className="px-4 py-2 border">19°22'12.6"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.2</td>
                      <td className="px-4 py-2 border">105°53'15.6"</td>
                      <td className="px-4 py-2 border">19°23'23.5"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.3</td>
                      <td className="px-4 py-2 border">105°53'34.3"</td>
                      <td className="px-4 py-2 border">19°23'05.6"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.4</td>
                      <td className="px-4 py-2 border">105°52'18.7"</td>
                      <td className="px-4 py-2 border">19°21'54.7"</td>
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
            Bản đồ dưới đây cung cấp cái nhìn chi tiết về Khu vực neo đậu số 1, bao gồm tọa độ và phạm vi độ sâu, để hỗ trợ việc điều hướng và lập kế hoạch. Khu vực này được thiết kế để tiếp nhận tàu một cách an toàn, đảm bảo hoạt động suôn sẻ cho việc neo đậu, chuyển tải hoặc thời gian chờ đợi.
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
                  <span><strong>An toàn và rộng rãi:</strong> Với diện tích 2.4 km² và độ sâu từ 13.6 m đến 15.8 m, khu vực này đảm bảo neo đậu an toàn cho tàu lên đến 80.000 DWT.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Hoạt động hiệu quả:</strong> Liên lạc VHF 24/7 (CH16 và CH09) cho phép phối hợp liền mạch với kiểm soát cảng và hoa tiêu, giảm thiểu chậm trễ.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Vị trí chiến lược:</strong> Nằm trong Cảng Nước Sâu Miền Trung, khu vực này cung cấp khả năng tiếp cận dễ dàng đến các dịch vụ xếp dỡ hàng hóa và logistics, nâng cao hiệu quả vận hành.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Tuân thủ an toàn:</strong> Chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn an toàn và môi trường, với dịch vụ ứng phó sự cố tràn dầu 24/7 và quản lý chất thải để bảo vệ tàu của bạn và môi trường.</span>
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
import React from 'react'
import worldMap from '../../../assets/map.jpg'

const ContentBanner = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 title-font">Giới thiệu</h1>
          <p className="text-gray-700 leading-relaxed content-font">
            Cảng Nước Sâu Miền Trung được thiết kế để đáp ứng các tiêu chuẩn quốc tế cao nhất, cung cấp các khả năng kỹ thuật tiên tiến để hỗ trợ nhiều hoạt động hàng hải. Tọa lạc tại Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa, cảng của chúng tôi có diện tích 5.5 km² và được trang bị để tiếp nhận tàu lên đến 100.000 DWT. Dưới đây là thông số kỹ thuật chi tiết về các khu vực neo đậu và bản đồ để giúp bạn điều hướng cơ sở của chúng tôi một cách dễ dàng.
          </p>
        </section>

        {/* Anchoring Areas */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Area 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">Khu vực neo đậu số 1</h2>
              <ul className="space-y-3 content-font text-gray-700">
                <li><span className="font-semibold">Diện tích:</span> 2.4 km²</li>
                <li><span className="font-semibold">Độ sâu:</span> 13.6 m đến 15.8 m</li>
                <li><span className="font-semibold">Phù hợp cho:</span> Tàu từ 60.000 DWT đến 80.000 DWT (mớn nước tối đa: 14.5 m)</li>
                <li><span className="font-semibold">Liên lạc VHF:</span> CH16 cho kiểm soát cảng, CH09 cho hoa tiêu</li>
                <li className="space-y-2">
                  <span className="font-semibold block">Tọa độ:</span>
                  <ul className="pl-4 space-y-1">
                    <li>DVNS 1: 19°18'30"N - 105°47'30"E</li>
                    <li>DVNS 2: 19°18'30"N - 105°48'30"E</li>
                    <li>DVNS 3: 19°17'30"N - 105°48'30"E</li>
                    <li>DVNS 4: 19°17'30"N - 105°47'30"E</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Area 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">Khu vực neo đậu số 2</h2>
              <ul className="space-y-3 content-font text-gray-700">
                <li><span className="font-semibold">Diện tích:</span> 2.9 km²</li>
                <li><span className="font-semibold">Độ sâu:</span> 17.0 m đến 20.8 m</li>
                <li><span className="font-semibold">Phù hợp cho:</span> Tàu trên 80.000 DWT (mớn nước tối đa: 18.5 m)</li>
                <li><span className="font-semibold">Liên lạc VHF:</span> CH16 cho kiểm soát cảng, CH09 cho hoa tiêu</li>
                <li className="space-y-2">
                  <span className="font-semibold block">Tọa độ:</span>
                  <ul className="pl-4 space-y-1">
                    <li>DVNS 5: 19°17'30"N - 105°48'30"E</li>
                    <li>DVNS 6: 19°17'30"N - 105°49'30"E</li>
                    <li>DVNS 7: 19°16'30"N - 105°49'30"E</li>
                    <li>DVNS 8: 19°16'30"N - 105°48'30"E</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">Bản đồ khu vực neo đậu</h2>
          <p className="text-gray-700 mb-6 content-font">
            Các khu vực neo đậu của chúng tôi được thiết kế chiến lược để đảm bảo hoạt động an toàn và hiệu quả cho tất cả các tàu. Bản đồ dưới đây cung cấp cái nhìn tổng quan rõ ràng về Khu vực neo đậu số 1 và số 2, bao gồm tọa độ và phạm vi độ sâu, để hỗ trợ việc điều hướng và lập kế hoạch.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={worldMap} alt="Bản đồ khu vực neo đậu" className="w-full h-auto" />
          </div>
        </section>

        {/* Additional Technical Information */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">Thông tin kỹ thuật bổ sung</h2>
          <ul className="space-y-3 content-font text-gray-700 list-disc pl-5">
            <li>Năng lực xếp dỡ: 30.000 tấn/ngày</li>
            <li>Diện tích cảng: 5.5 km²</li>
            <li>Năng lực tiếp nhận tàu: Lên đến 100.000 DWT</li>
            <li>Tính năng an toàn: Dịch vụ ứng phó sự cố tràn dầu 24/7 và quản lý chất thải để đảm bảo tuân thủ môi trường.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default ContentBanner
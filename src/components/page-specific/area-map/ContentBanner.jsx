import React from 'react'
import worldMap from '../../../assets/map.jpg'
import anchorageMap from '../../../assets/anchorage-map.png'

const ContentBanner = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 title-font">Giới thiệu</h1>
          <p className="text-gray-700 leading-relaxed content-font">
            Cảng Nước Sâu Miền Trung, tọa lạc tại Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa, là trung tâm hàng hải hàng đầu tại miền Trung Việt Nam, với diện tích 5.5 km² và khả năng tiếp nhận tàu lên đến 100.000 DWT. Trang Bản Đồ Khu Vực của chúng tôi cung cấp cái nhìn tổng quan toàn diện về bố trí của cảng, làm nổi bật các khu vực vận hành chính như khu neo đậu, khu vực xếp dỡ hàng hóa, kho dầu ngoại quan và khu vực hỗ trợ thuyền viên. Bản đồ này được thiết kế để giúp bạn điều hướng cơ sở của chúng tôi, lập kế hoạch hoạt động và hiểu rõ lợi thế chiến lược của vị trí cảng.
          </p>
        </section>

        {/* Port Layout Map Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">Bản đồ bố trí cảng</h2>
          <p className="text-gray-700 mb-6 content-font">
            Bản đồ tương tác dưới đây cung cấp cái nhìn chi tiết về bố trí của Cảng Nước Sâu Miền Trung, làm nổi bật các khu vực chính sau:
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4 title-font">Khu vực neo đậu</h3>
              <ul className="space-y-4 content-font text-gray-700 list-disc pl-5">
                <li>
                  <strong>Khu vực neo đậu số 1:</strong> 2.4 km², độ sâu 13.6 m đến 15.8 m, phù hợp cho tàu từ 60.000 DWT đến 80.000 DWT (mớn nước tối đa: 14.5 m).
                </li>
                <li>
                  <strong>Khu vực neo đậu số 2:</strong> 2.9 km², độ sâu 17.0 m đến 20.8 m, phù hợp cho tàu trên 80.000 DWT (mớn nước tối đa: 18.5 m).
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4 title-font">Các khu vực chính khác</h3>
              <ul className="space-y-4 content-font text-gray-700 list-disc pl-5">
                <li>
                  <strong>Khu vực xếp dỡ hàng hóa:</strong> Được trang bị cần cẩu và thiết bị hiện đại, xử lý lên đến 30.000 tấn/ngày.
                </li>
                <li>
                  <strong>Cơ sở kho dầu ngoại quan:</strong> Khu vực lưu trữ an toàn cho các sản phẩm dầu, tuân thủ tiêu chuẩn quốc tế.
                </li>
                <li>
                  <strong>Khu vực hỗ trợ thuyền viên và logistics:</strong> Các cơ sở hỗ trợ vận chuyển thuyền viên, khai báo đi bờ và trao đổi thuyền viên.
                </li>
                <li>
                  <strong>Khu vực quản lý và an toàn:</strong> Các khu vực dành cho kiểm soát cảng, hoạt động an toàn và quản lý môi trường.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img src={anchorageMap} alt="Bản đồ chi tiết khu vực cảng" className="w-full h-auto" />
          </div>
        </section>

        {/* Strategic Location Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">Vị trí chiến lược và kết nối</h2>
          <p className="text-gray-700 mb-6 content-font">
            Vị trí của Cảng Nước Sâu Miền Trung tại miền Trung Việt Nam mang lại khả năng kết nối vượt trội đến các tuyến hàng hải quốc tế. Bản đồ khu vực dưới đây làm nổi bật vị trí của chúng tôi tại Nghi Sơn, Tỉnh Thanh Hóa, và minh họa các tuyến đường vận chuyển chính kết nối chúng tôi với các thị trường trọng điểm tại Đông Nam Á (ví dụ: Singapore, Malaysia), Đông Á (ví dụ: Trung Quốc, Nhật Bản) và hơn thế nữa. Vị trí chiến lược này đảm bảo thời gian vận chuyển giảm và hiệu quả chuỗi cung ứng được nâng cao cho khách hàng của chúng tôi.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img src={worldMap} alt="Bản đồ vị trí chiến lược" className="w-full h-auto" />
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">Đặc điểm nổi bật của cảng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Tổng diện tích:</strong> 5.5 km², cung cấp không gian rộng rãi cho các hoạt động hàng hải đa dạng.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Năng lực tiếp nhận tàu:</strong> Lên đến 100.000 DWT, đáp ứng nhiều kích cỡ tàu khác nhau.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Hoạt động 24/7:</strong> Hỗ trợ liên tục cho điều hướng, neo đậu và xếp dỡ hàng hóa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>An toàn và bền vững:</strong> Được trang bị dịch vụ ứng phó sự cố tràn dầu 24/7 và quản lý chất thải để đảm bảo tuân thủ môi trường.</span>
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

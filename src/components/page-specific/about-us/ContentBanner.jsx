import React from 'react'
import './ContentBanner.css'

const ContentBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 max-w-3/5 mx-auto text-center'>
        <h1 className='text-4xl font-bold title-font mb-4'>Giới thiệu</h1>
        <p className='content-font text-lg mb-8'>Cảng Nước Sâu Miền Trung là cảng nước sâu hàng đầu tại miền Trung Việt Nam, tọa lạc tại Khu vực Nghi Sơn, Huyện Nghi Sơn, Tỉnh Thanh Hóa. Với diện tích 5.5 km², cảng của chúng tôi được thiết kế để tiếp nhận tàu lên đến 100.000 DWT, nằm trong top 10 cảng biển tại Việt Nam. Chúng tôi quản lý và vận hành một trung tâm hàng hải hiện đại, cung cấp nhiều dịch vụ như xếp dỡ hàng hóa, neo đậu, giám định, hỗ trợ thuyền viên và vận tải, kết nối miền Trung Việt Nam với thị trường toàn cầu.</p>
        <h1 className='text-4xl font-bold title-font mb-4'>Sứ mệnh</h1>
        <p className='content-font text-lg mb-8'>Chúng tôi cam kết mang đến các giải pháp hàng hải an toàn, hiệu quả và bền vững. Với năng lực xếp dỡ 30.000 tấn/ngày và tỷ lệ hài lòng của khách hàng đạt 85%, chúng tôi nỗ lực trở thành đối tác tin cậy của các công ty logistics, chủ tàu và nhà vận hành hàng hải trên toàn thế giới.</p>
        <h1 className='text-4xl font-bold title-font mb-4'>Tầm nhìn</h1>
        <p className='content-font text-lg mb-8'>Nhìn về tương lai, chúng tôi hướng đến xây dựng một cảng sẵn sàng cho tương lai, thân thiện với môi trường, bao trùm và ứng dụng công nghệ tiên tiến. Tận dụng vị trí chiến lược và cơ sở hạ tầng hiện đại, chúng tôi mong muốn trở thành một nhân tố quan trọng trong ngành hàng hải toàn cầu, thúc đẩy sự phát triển bền vững cho khu vực và hơn thế nữa.</p>
    </div>
  )
}

export default ContentBanner
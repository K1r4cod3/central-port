import React, {useState} from 'react'
import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import portLogo from '../assets/logo1.png'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  return (
    <>
      <div className='w-full h-7 bg-blue-900'>
          
      </div>
      <div className="flex justify-between items-center max-w-[1250px] h-15 mx-auto px-2">
        <a href="#">
          <div className='flex items-center'>
            <img src={portLogo} alt="" className='h-12' />
            <h1 className='ml-5 font-bold text-2xl title-font'>Central Port</h1>
          </div>
        </a>

        <div className='h-full'>
          <ul className='flex justify-center' id='nav'>
            <li className='relative p-4 content-font group hover:border-b-4 hover:border-b-blue-400'>
              <a href="#" className=''>Giới thiệu</a>
            </li>
            <li className='relative p-4 content-font group hover:border-b-4 hover:border-b-blue-400'>
              <a href="#" className=''>Dịch vụ</a>
              {/* mega menu */}
              <div 
                className='fixed left-0 top-22 w-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white px-5 py-5 z-50 opacity-0 transition invisible duration-500 group-hover:visible group-hover:opacity-100 '>
                <div class="container grid grid-cols-4 gap-8 mx-auto max-w-[1200px]">
                  <div>
                      <h3 class="title-font font-bold">Dịch vụ xếp dỡ hàng hóa</h3>
                      <ul class="content-font">
                          <li class="py-1"><a href="#" class="hover:underline">Xếp dỡ container bằng cần cẩu bờ và thiết bị chuyên dụng</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Xếp dỡ hàng rời (than, quặng, dầu thô, ngũ cốc, xi măng, v.v.)</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Xử lý hàng siêu trường, siêu trọng.</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold">Dịch vụ lưu kho và bãi</h3>
                      <ul class="content-font">
                          <li class="py-1"><a href="#" class="hover:underline">Lưu trữ container, hàng hóa trong kho bãi</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Kho ngoại quan, kho lạnh, kho bảo thuế</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Khu vực bãi tập kết hàng xuất khẩu và nhập khẩu</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold">Dịch vụ logistics và vận tải</h3>
                      <ul class="content-font">
                          <li class="py-1"><a href="#" class="hover:underline">Giao nhận hàng hóa đa phương thức (đường biển, đường bộ, đường sắt)</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Trung chuyển hàng hóa quốc tế</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ khai báo hải quan và thủ tục xuất nhập khẩu</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold">Dịch vụ hàng hải</h3>
                      <ul class="content-font">
                          <li class="py-1"><a href="#" class="hover:underline">Cung cấp nhiên liệu và tiếp nước ngọt cho tàu</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ lai dắt, neo đậu, hỗ trợ tàu cập cảng</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ hoa tiêu hàng hải</a></li>
                          <li class="py-1"><a href="info-and-labor.html" class="hover:underline">Thông tin vận hành và neo đậu</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold">Dịch vụ bảo trì, sửa chữa tàu biển</h3>
                      <ul class="content-font">
                          <li class="py-1"><a href="#" class="hover:underline">Bảo dưỡng, sửa chữa tàu biển ngay tại cảng</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ cung cấp phụ tùng, trang thiết bị hàng hải</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold">Dịch vụ hỗ trợ khác</h3>
                      <ul class="content-font">
                          <li class="py-1"><a href="#" class="hover:underline">Cung cấp nhân lực bốc xếp.</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ ăn uống, nghỉ ngơi cho thuyền viên.</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ bảo vệ hàng hóa, giám sát container.</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ vận tải trao đổi thuyền viên</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ tàu câu</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ đưa đón thuyền viên</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ vệ sinh hàng năm</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ thu gom xử lý rác biển</a></li>
                          <li class="py-1"><a href="#" class="hover:underline">Dịch vụ cho thuê tàu vận tải</a></li>
                      </ul>
                  </div>                            
                </div>
              </div>
            </li>
            <li className='relative p-4 content-font group hover:border-b-4 hover:border-b-blue-400'>
              <a href="#" className=''>Thông tin kĩ thuật</a>
            </li>
            <li className='relative p-4 content-font group hover:border-b-4 hover:border-b-blue-400'>
              <a href="#" className=''>Tin tức</a>
            </li>
          </ul>
        </div>

        <div className='border-1 border-gray-300 flex items-center'>
            <input 
              type="text"
              id='search'
              name="search"
              placeholder="Tìm kiếm..."
              className='p-2'
            />
            <button className='bg-blue-400 h-9 w-9'>?</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import portLogo from '../../assets/logo1.png'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  return (
    <>
      <div className='w-full h-7 bg-blue-900'>
        <div className='float-right h-full flex items-center gap-2'>
          <div>
            <Link to="" className='text-white'>Liên hệ</Link>
          </div>
          <div>
            <Link to="" className='text-white'>Ngôn ngữ</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center max-w-[1250px] h-20 mx-auto px-2">
        <Link to="/">
          <div className='flex items-center'>
            <img src={portLogo} alt="" className='h-12' />
            <h1 className='ml-5 font-bold text-2xl title-font'>Central Port</h1>
          </div>
        </Link>

        <div className='h-full'>
          <ul className='flex h-full gap-4' id='nav'>
            <li className='flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400'>
              <Link to="/" className='px-4 py-4 text-lg font-bold text-[#0a3a7d]'>Trang chủ</Link>
            </li>
            <li className='flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400'>
              <Link to="" className='px-4 py-4 text-lg font-bold text-[#0a3a7d]'>Giới thiệu</Link>
              {/* mega menu */}
              <div
                className='fixed left-0 top-27 w-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white px-5 py-5 z-50 opacity-0 transition invisible duration-500 group-hover:visible group-hover:opacity-100 '>
                <div class="container grid grid-cols-2 gap-8 mx-auto max-w-[1200px]">
                  <div >
                  <ul class="content-font">
                          <li class="py-1 m-4"><Link to="" class="hover:underline">VỀ CHÚNG TÔI</Link></li>
                          <li class="py-1 m-4"><Link to="" class="hover:underline">THƯ NGỎ</Link></li>
                          <li class="py-1 m-4"><Link to="" class="hover:underline">LỢI THẾ NỔI BẬT</Link></li>
                      </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className='flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400'>
              <Link to="" className='px-4 py-4 text-lg font-bold text-[#0a3a7d]'>Dịch vụ</Link>
              {/* mega menu */}
              <div 
                className='fixed left-0 top-27 w-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white px-5 py-5 z-50 opacity-0 transition invisible duration-500 group-hover:visible group-hover:opacity-100 '>
                <div class="container grid grid-cols-4 gap-8 mx-auto max-w-[1200px]">
                  <div>
                      <h3 class="title-font font-bold underline hover:text-blue-400 text-xl">Dịch vụ xếp dỡ hàng hóa và chuyển tải hàng hóa</h3>
                      <ul class="content-font">
                          <li class="py-1"><Link to="" class="hover:underline">Chuyển tải xăng dầu</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Cẩu hàng hóa trên biển</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold underline hover:text-blue-400 text-xl">Dịch vụ neo đậu và kho bãi</h3>
                      <ul class="content-font">
                          <li class="py-1"><Link to="" class="hover:underline">Neo đậu tàu thuyền</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Neo đậu chuyển tải xăng dầu</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Kho dầu hải quan</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold underline hover:text-blue-400 text-xl">Dịch vụ an toàn và bảo vệ môi trường</h3>
                      <ul class="content-font">
                          <li class="py-1"><Link to="" class="hover:underline">Kiểm soát và xử lý tràn dầu </Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Thu gom rác thải</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Cho thuê phao chống va & phao chống tràn dầu </Link></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold underline hover:text-blue-400 text-xl">Dịch vụ Hỗ trợ Thuyền viên và Logistics </h3>
                      <ul class="content-font">
                          <li class="py-1"><Link to="" class="hover:underline">Dịch vụ đưa đón thuyền viên từ tàu đi bờ </Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Dịch vụ khai báo thuyền viên đi bờ</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Dịch vụ trao đổi thuyền viên </Link></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold underline hover:text-blue-400 text-xl">Dịch vụ Vận tải </h3>
                      <ul class="content-font">
                          <li class="py-1"><Link to="" class="hover:underline">Cho thuê tàu vận tải </Link></li>
                      </ul>
                  </div>
                  <div>
                      <h3 class="title-font font-bold underline hover:text-blue-400 text-xl">Dịch vụ giám định</h3>
                      <ul class="content-font">
                          <li class="py-1"><Link to="" class="hover:underline">Giám định hàng nhập</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Giám định hàng xuất</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">Giám định nhiên liệu tàu</Link></li>
                      </ul>
                  </div>                            
                </div>
              </div>
            </li>
            <li className='flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400'>
              <Link to="" className='px-4 py-4 text-lg font-bold text-[#0a3a7d]'>Thông số kĩ thuật</Link>
              {/* mega menu */}
              <div
                className='fixed left-0 top-27 w-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white px-5 py-5 z-50 opacity-0 transition invisible duration-500 group-hover:visible group-hover:opacity-100 '>
                <div class="container grid grid-cols-2 gap-8 mx-auto max-w-[1200px]">
                  <div >
                  <ul class="content-font">
                          <li class="py-1"><Link to="" class="hover:underline">THÔNG TIN KĨ THUẬT</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">KHU VỰC NEO ĐẬU SỐ 1</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">KHU VỰC NEO ĐẬU SỐ 2</Link></li>
                          <li class="py-1"><Link to="" class="hover:underline">BẢN ĐỒ KHU VỰC</Link></li>
                      </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className='flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400'>
              <Link to="" className='px-4 py-4 text-lg font-bold text-[#0a3a7d]'>Tin tức</Link>
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
"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"
import { X, Search, Menu, ChevronDown, Phone } from "lucide-react"
import portLogo from "../../assets/logo1.png"
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null) // State để quản lý mega menu
  const location = useLocation() // Hook để theo dõi route
  const { t, i18n } = useTranslation('translation')

  // Đóng mega menu khi route thay đổi
  useEffect(() => {
    setActiveMegaMenu(null)
  }, [location.pathname])

  // Prevent body scroll khi menu mobile mở
  useEffect(() => {
    if (showNav) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [showNav])

  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  const toggleMobileSubmenu = (menu) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu)
  }

  // Hàm để bật/tắt mega menu
  const handleMegaMenu = (menu) => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu)
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageMenu(false);
  };

  return (
    <>
      {/* Top bar - chỉ hiển thị trên desktop */}
      <div className="w-full h-7 bg-blue-900 hidden lg:block">
        <div className="max-w-[1250px] mx-auto px-4 h-full flex justify-end items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center h-full">
              <Phone className="w-4 h-4 text-white mr-2" />
              <Link to="" className="text-white hover:text-blue-200 content-font font-semibold text-sm">
                {t('contact')}
              </Link>
            </div>
            <div className="relative flex items-center h-full">
              <button
                className="text-white hover:text-blue-200 flex items-center gap-1 content-font font-semibold text-sm"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              >
                {t('language')}
                <ChevronDown className={`w-4 h-4 transition-transform ${showLanguageMenu ? "rotate-180" : ""}`} />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-1 top-full w-32 bg-white rounded-md shadow-lg py-1 z-50">
                  <button 
                    className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'vi' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => changeLanguage('vi')}
                  >
                    Tiếng Việt
                  </button>
                  <button 
                    className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`flex justify-between items-center max-w-[1250px] h-20 mx-auto px-4 ${showNav ? "lg:relative fixed top-0 left-0 right-0 z-[51] bg-white" : ""}`}
      >
        {/* Nút menu mobile - chỉ hiển thị trên mobile */}
        <div className="lg:hidden">
          <button
            id="menu-toggle"
            onClick={handleShowNav}
            className={`p-2 ${showNav ? "text-blue-900" : "text-[#0a3a7d]"}`}
            aria-label={showNav ? "Close menu" : "Open menu"}
          >
            {showNav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Logo - căn giữa trên mobile */}
        <div className="lg:flex-none flex-1 flex justify-center lg:justify-start">
          <Link to="/">
            <div className="flex items-center">
              <img src={portLogo || "/placeholder.svg"} alt="Central Port Logo" className="h-12" />
              <h1 className="ml-5 font-bold text-2xl title-font">Central Port</h1>
            </div>
          </Link>
        </div>

        {/* Navigation cho desktop */}
        <div className="hidden lg:block h-full">
          <ul className="flex h-full gap-4" id="nav">
            <li className="flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400">
              <Link to="/" className="px-4 py-4 text-lg font-bold text-[#0a3a7d]">
                {t('home')}
              </Link>
            </li>
            <li
              className="flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400"
              onMouseEnter={() => handleMegaMenu("intro")}
              onMouseLeave={() => handleMegaMenu(null)}
            >
              <Link to="" className="px-4 py-4 text-lg font-bold text-[#0a3a7d]">
                {t('about')}
              </Link>
              {/* Mega menu */}
              <div
                className={`absolute left-0 top-27 w-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white px-5 py-5 z-50 transition duration-500 ${
                  activeMegaMenu === "intro" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="container grid grid-cols-2 gap-8 mx-auto max-w-[1200px]">
                  <div>
                    <ul className="content-font text-lg font-bold uppercase">
                      <li className="py-1 m-4">
                        <Link
                          to="/about-us"
                          className="underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          {t('about-button.about-us')}
                        </Link>
                      </li>
                      <li className="py-1 m-4">
                        <Link
                          to="/open-letter"
                          className="underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          {t('about-button.open-letter')}
                        </Link>
                      </li>
                      <li className="py-1 m-4">
                        <Link
                          to=""
                          className="underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          {t('about-button.highlight-advantages')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400"
              onMouseEnter={() => handleMegaMenu("services")}
              onMouseLeave={() => handleMegaMenu(null)}
            >
              <Link to="" className="px-4 py-4 text-lg font-bold text-[#0a3a7d]">
                {t('services')}
              </Link>
              {/* Mega menu */}
              <div
                className={`absolute left-0 top-27 w-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white px-5 py-5 z-50 transition duration-500 ${
                  activeMegaMenu === "services" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="container grid grid-cols-4 gap-8 mx-auto max-w-[1200px]">
                  <div>
                    <Link
                      to="/cargo-handling-and-transshipment-services"
                      className="title-font font-bold underline hover:text-blue-300 text-xl"
                      onClick={() => handleMegaMenu(null)}
                    >
                      {t('services-button.service1')}
                    </Link>
                    <ul className="content-font">
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Chuyển tải xăng dầu
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Cẩu hàng hóa trên biển
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/anchorage-and-warehousing-services"
                      className="title-font font-bold underline hover:text-blue-300 text-xl"
                      onClick={() => handleMegaMenu(null)}
                    >
                      {t('services-button.service2')}
                    </Link>
                    <ul className="content-font">
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Neo đậu tàu thuyền
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Neo đậu chuyển tải xăng dầu
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Kho dầu hải quan
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/safety-and-environmental-protection-services"
                      className="title-font font-bold underline hover:text-blue-300 text-xl"
                      onClick={() => handleMegaMenu(null)}
                    >
                      {t('services-button.service3')}
                    </Link>
                    <ul className="content-font">
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Kiểm soát và xử lý tràn dầu
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Thu gom rác thải
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Cho thuê phao chống va & phao chống tràn dầu
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/crew-support-and-logistics-services"
                      className="title-font font-bold underline hover:text-blue-300 text-xl"
                      onClick={() => handleMegaMenu(null)}
                    >
                      {t('services-button.service4')}
                    </Link>
                    <ul className="content-font">
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Dịch vụ đưa đón thuyền viên từ tàu đi bờ
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Dịch vụ khai báo thuyền viên đi bờ
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Dịch vụ trao đổi thuyền viên
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/transportation-services"
                      className="title-font font-bold underline hover:text-blue-300 text-xl"
                      onClick={() => handleMegaMenu(null)}
                    >
                      {t('services-button.service5')}
                    </Link>
                    <ul className="content-font">
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Cho thuê tàu vận tải
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/inspection-services"
                      className="title-font font-bold underline hover:text-blue-300 text-xl"
                      onClick={() => handleMegaMenu(null)}
                    >
                      {t('services-button.service6')}
                    </Link>
                    <ul className="content-font">
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Giám định hàng nhập
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Giám định hàng xuất
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to=""
                          className="hover:underline"
                          onClick={() => handleMegaMenu(null)}
                        >
                          Giám định nhiên liệu tàu
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400"
              onMouseEnter={() => handleMegaMenu("tech")}
              onMouseLeave={() => handleMegaMenu(null)}
            >
              <Link to="" className="px-4 py-4 text-lg font-bold text-[#0a3a7d]">
                {t('technical-information')}
              </Link>
              {/* Mega menu */}
              <div
                className={`absolute left-0 top-27 w-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white px-5 py-5 z-50 transition duration-500 ${
                  activeMegaMenu === "tech" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="container text-lg font-bold underline grid grid-cols-2 gap-8 mx-auto max-w-[1200px]">
                  <div>
                    <ul className="content-font">
                      <li className="py-1">
                        <Link
                          to="/technical-information"
                          className="hover:underline uppercase"
                          onClick={() => handleMegaMenu(null)}
                        >
                          {t('technical-infomation-button.item1')}
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/anchorage-area-1"
                          className="hover:underline uppercase"
                          onClick={() => handleMegaMenu(null)}
                        >
                          {t('technical-infomation-button.item2')}
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/anchorage-area-2"
                          className="hover:underline uppercase"
                          onClick={() => handleMegaMenu(null)}
                        >
                          {t('technical-infomation-button.item3')}
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/area-map"
                          className="hover:underline uppercase"
                          onClick={() => handleMegaMenu(null)}
                        >
                          {t('technical-infomation-button.item4')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex items-center content-font group pb-[4px] box-border hover:pb-0 hover:border-b-4 hover:border-b-blue-400">
              <Link to="" className="px-4 py-4 text-lg font-bold text-[#0a3a7d]">
                {t('news')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Nút tìm kiếm */}
        <div className="lg:hidden">
          <button className={`p-2 ${showNav ? "text-blue-900" : "text-[#0a3a7d]"}`}>
            <Search className="h-6 w-6" />
          </button>
        </div>

        {/* Thanh tìm kiếm - chỉ hiển thị trên desktop */}
        <div className="hidden lg:flex border border-gray-300 items-center">
          <input type="text" id="search" name="search" placeholder="Tìm kiếm..." className="p-2" />
          <button className="bg-[#16b8f8] px-4 py-3 text-white">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Menu mobile - toàn màn hình */}
      {showNav && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-700 z-50 overflow-y-auto text-white"
        >
          <div className="flex justify-between items-center p-4 border-b border-blue-800 bg-white">
            <button onClick={handleShowNav} className="text-blue-900 p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center">
              <img src={portLogo || "/placeholder.svg"} alt="Central Port Logo" className="h-12" />
              <h1 className="ml-3 font-bold text-xl title-font text-[#0a3a7d]">Central Port</h1>
            </div>

            <button className="text-blue-900 p-2">
              <Search className="h-6 w-6" />
            </button>
          </div>

          <div className="p-4">
            {/* Các mục menu mobile */}
            <nav className="mb-2">
              <ul className="space-y-4">
                <li className="border-b border-blue-800 pb-4">
                  <Link
                    to="/"
                    className="block py-2 text-xl font-bold text-white underline"
                    onClick={() => setShowNav(false)}
                  >
                    {t('home')}
                  </Link>
                </li>

                <li className="border-b border-blue-800 pb-4">
                  <div
                    className="flex justify-between items-center no-highlight"
                    onClick={() => toggleMobileSubmenu("intro")}
                  >
                    <Link to="" className="block py-2 text-xl font-bold text-white underline">
                      {t('about')}
                    </Link>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "intro" ? "rotate-180" : ""}`}
                    />
                  </div>
                  {activeMobileSubmenu === "intro" && (
                    <ul className="pl-4 py-2 mt-2">
                      <li className="py-2">
                        <Link to="/about-us" className="block text-white" onClick={() => setShowNav(false)}>
                          VỀ CHÚNG TÔI
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/open-letter" className="block text-white" onClick={() => setShowNav(false)}>
                          THƯ NGỎ
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="" className="block text-white" onClick={() => setShowNav(false)}>
                          LỢI THẾ NỔI BẬT
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="border-b border-blue-800 pb-4">
                  <div
                    className="flex justify-between items-center no-highlight"
                    onClick={() => toggleMobileSubmenu("services")}
                  >
                    <Link to="" className="block py-2 text-xl font-bold text-white underline">
                      {t('services')}
                    </Link>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "services" ? "rotate-180" : ""}`}
                    />
                  </div>
                  {activeMobileSubmenu === "services" && (
                    <div className="pl-4 py-2 mt-2 space-y-4">
                      <div>
                        <Link
                          to="/cargo-handling-and-transshipment-services"
                          className="block font-bold text-white"
                          onClick={() => setShowNav(false)}
                        >
                          Dịch vụ xếp dỡ hàng hóa và chuyển tải hàng hóa
                        </Link>
                        <ul className="pl-4 py-1">
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Chuyển tải xăng dầu
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Cẩu hàng hóa trên biển
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <Link
                          to="/anchorage-and-warehousing-services"
                          className="block font-bold text-white"
                          onClick={() => setShowNav(false)}
                        >
                          Dịch vụ neo đậu và kho bãi
                        </Link>
                        <ul className="pl-4 py-1">
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Neo đậu tàu thuyền
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Neo đậu chuyển tải xăng dầu
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Kho dầu hải quan
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <Link
                          to="/safety-and-environmental-protection-services"
                          className="block font-bold text-white"
                          onClick={() => setShowNav(false)}
                        >
                          Dịch vụ an toàn và bảo vệ môi trường
                        </Link>
                        <ul className="pl-4 py-1">
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Kiểm soát và xử lý tràn dầu
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Thu gom rác thải
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Cho thuê phao chống va & phao chống tràn dầu
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <Link
                          to="/crew-support-and-logistics-services"
                          className="block font-bold text-white"
                          onClick={() => setShowNav(false)}
                        >
                          Dịch vụ Hỗ trợ Thuyền viên và Logistics
                        </Link>
                        <ul className="pl-4 py-1">
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Dịch vụ đưa đón thuyền viên từ tàu đi bờ
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Dịch vụ khai báo thuyền viên đi bờ
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Dịch vụ trao đổi thuyền viên
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <Link
                          to="/transportation-services"
                          className="block font-bold text-white"
                          onClick={() => setShowNav(false)}
                        >
                          Dịch vụ Vận tải
                        </Link>
                        <ul className="pl-4 py-1">
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Cho thuê tàu vận tải
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <Link
                          to="/inspection-services"
                          className="block font-bold text-white"
                          onClick={() => setShowNav(false)}
                        >
                          Dịch vụ giám định
                        </Link>
                        <ul className="pl-4 py-1">
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Giám định hàng nhập
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Giám định hàng xuất
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="block py-1 text-white" onClick={() => setShowNav(false)}>
                              Giám định nhiên liệu tàu
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                <li className="border-b border-blue-800 pb-4">
                  <div
                    className="flex justify-between items-center no-highlight"
                    onClick={() => toggleMobileSubmenu("tech")}
                  >
                    <Link to="" className="block py-2 text-xl font-bold text-white underline">
                      {t('technical-information')}
                    </Link>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "tech" ? "rotate-180" : ""}`}
                    />
                  </div>
                  {activeMobileSubmenu === "tech" && (
                    <ul className="pl-4 py-2 mt-2">
                      <li className="py-2">
                        <Link
                          to="/technical-information"
                          className="block text-white"
                          onClick={() => setShowNav(false)}
                        >
                          THÔNG TIN KĨ THUẬT
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/anchorage-area-1"
                          className="block text-white"
                          onClick={() => setShowNav(false)}
                        >
                          KHU VỰC NEO ĐẬU SỐ 1
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/anchorage-area-2"
                          className="block text-white"
                          onClick={() => setShowNav(false)}
                        >
                          KHU VỰC NEO ĐẬU SỐ 2
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/area-map" className="block text-white" onClick={() => setShowNav(false)}>
                          BẢN ĐỒ KHU VỰC
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="pb-4">
                  <Link
                    to=""
                    className="block py-2 text-xl font-bold text-white underline"
                    onClick={() => setShowNav(false)}
                  >
                    {t('news')}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Footer links trong menu mobile */}
            <div className="pt-4 border-t border-blue-800">
              <ul className="space-y-4">
                <li>
                  <Link to="" className="block text-white">
                    {t('contact')}
                  </Link>
                </li>
                <li>
                  <div className="relative">
                    <button
                      className="text-white flex items-center gap-1 w-full justify-between content-font font-semibold no-highlight"
                      onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                    >
                      <span>{t('language')}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${showLanguageMenu ? "rotate-180" : ""}`}
                      />
                    </button>
                    {showLanguageMenu && (
                      <div className="mt-2 bg-blue-800 rounded py-2 px-4">
                        <button className="block w-full text-left py-2 text-white" onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
                        <button className="block w-full text-left py-2 text-white" onClick={() => changeLanguage('en')}>English</button>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
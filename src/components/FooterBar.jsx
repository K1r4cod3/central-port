import React from 'react'
import './FooterBar.css'
import logo from '../assets/logo1.png'


const FooterBar = () => {
  return (
    <div className='bg-blue-900 text-white py-8'>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
        {/* Cột 1: Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Logo" className="h-40" />
          </div>

          {/* Cột 2: Direct To */}
          <div>
            <h5 className="text-2xl font-bold mb-4">Direct To</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Technical Specifications</a></li>
              <li><a href="#" className="hover:underline">Anchorage Areas</a></li>
              <li><a href="#" className="hover:underline">Cargo Handling Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Cột 3: Contact Information */}
          <div>
            <h5 className="text-2xl font-bold mb-4">Contact Information</h5>
            <p>Central Deepwater Port</p>
            <p>Nghi Son Area, Nghi Son District, Thanh Hoa Province, Vietnam</p>
            <p>+84 (0) 123 456 789</p>
            <p>info@centraldeepwaterport.com</p>
          </div>

          {/* Cột 4: Social Media */}
          <div>
            <h5 className="text-2xl font-bold mb-4">Social Media</h5>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-blue-500"></a>
              <a href="#" className="hover:text-blue-400"></a>
              <a href="#" className="hover:text-blue-600"></a>
              <a href="#" className="hover:text-pink-500"></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FooterBar
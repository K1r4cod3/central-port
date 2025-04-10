import React from 'react'
import './FooterBar.css'
import logo from '../../assets/logo1.png'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'


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
            <p>Hotline: 024.9999.9889</p>
            <p>Fax: 023.6999.9889</p>
            <p>Email: cangnuocsaumientrung@gmail.com</p>
          </div>

          {/* Cột 4: Social Media */}
          <div>
            <h5 className="text-2xl font-bold mb-4">Social Media</h5>
            <div className="flex space-x-4">
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.facebook.com"><Facebook className='h-6 w-6 text-blue-600' /></a>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.instagram.com"><Instagram className='h-6 w-6 text-blue-600' /></a>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.linkedin.com"><Linkedin className='h-6 w-6 text-blue-600' /></a>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.twitter.com"><Twitter className='h-6 w-6 text-blue-600' /></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FooterBar
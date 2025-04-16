import React from 'react'
import { Link } from 'react-router-dom'
import './ContactBanner.css'
import { Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
const ContactBanner = () => {
  const { t } = useTranslation('inspection-services')
  return (
    <div className='py-16'>
       <div className='container mx-auto px-4 md:px-6'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4 title-font'>
                {t('contact.title')}
                </h2>
                <p className='text-lg mb-8 content-font'>
                {t('contact.content')}
                </p>
                <Link to='/contact' className='bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-4 px-6 transition-colors duration-300 text-base flex items-center justify-center gap-2 max-w-60 mx-auto'>
                    <Phone className='h-6 w-6' />
                    {t('contact.button')}
                </Link>
            </div>
        </div> 
    </div>
  )
}

export default ContactBanner
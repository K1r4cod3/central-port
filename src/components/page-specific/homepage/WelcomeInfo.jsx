import "./WelcomeInfo.css"
import { useTranslation } from 'react-i18next'

const WelcomeInfo = () => {
  const { t } = useTranslation('homepage')
  return (
    <div className="px-4 sm:px-6 md:px-0 py-6 sm:py-8 md:py-12">
      <p className="mx-auto max-w-[630px] mb-4 sm:mb-6 md:mb-8 text-left title-font text-xl sm:text-xl md:text-2xl font-bold text-blue-400 uppercase">
        {t('welcome-info.welcome-info-title')}
      </p>
      <p className="mx-auto max-w-[630px] mb-4 sm:mb-6 md:mb-8 text-left content-font text-base sm:text-base md:text-lg">
        {t('welcome-info.welcome-info-content1')}
      </p>
      <p className="mx-auto max-w-[630px] mb-4 sm:mb-6 md:mb-8 text-left content-font text-base sm:text-base md:text-lg">
        {t('welcome-info.welcome-info-content2')}
      </p>
    </div>
  )
}

export default WelcomeInfo

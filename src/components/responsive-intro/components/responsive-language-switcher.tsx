import { LanguageContext } from '@/context/LanguageContext'
import { Countries } from '@/settings/countries'
import { useContext } from 'react'

export default function ResponsiveLanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext)

  const handleClick = () => {
    let lang: string
    let flag: string
    language === 'es'
      ? ((lang = 'en'), (flag = Countries[0].flag))
      : ((lang = 'es'), (flag = Countries[2].flag))
    changeLanguage(lang, flag)
  }

  return (
    <div
      className='flex flex-col text-center justify-center w-full h-full font-secondary'
      onClick={handleClick}
    >
      <h1 className=' tracking-widest font-semibold text-gray-700 dark:text-white text-5xl'>
        {language}
      </h1>
      <div className='flex justify-center text-center text-lg gap-2 w-full pr-1 tracking-wider'>
        <p className={`${language === 'es' ? 'text-purple-400' : ''}`}>es</p>{' '}
        <p className={`${language === 'en' ? 'text-purple-400' : ''}`}>en</p>
      </div>
    </div>
  )
}
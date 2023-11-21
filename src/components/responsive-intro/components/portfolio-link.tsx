import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react'

interface TextI {
  allMyWork: { [index: string]: string }
  portfolio: { [index: string]: string }
}

const text: TextI = {
  allMyWork: {
    en: 'my work and projects',
    es: 'mi experiencia y proyectos',
    de: 'meine Arbeiten und Projekte',
  },
  portfolio: {
    en: 'portfolio',
    es: 'portafolios',
    de: 'portfolio',
  },
}

export default function PortfolioLink() {
  const { language } = useContext(LanguageContext)

  return (
    <div className='flex flex-col justify-center text-center items-center h-full'>
      <h2 className='font-secondary text-3xl tracking-wider text-gray-700 dark:text-white'>
        {text.portfolio[language]}
      </h2>
      <p className='font-secondary tracking-widest text-[13px] text-gray-700 dark:text-white'>
        {text.allMyWork[language]}
      </p>
    </div>
  )
}

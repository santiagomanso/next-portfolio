import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react'

interface TextI {
  years: {
    [index: string]: string
  }
  experience: {
    [index: string]: string
  }
  asDev: {
    [index: string]: string
  }
}

const text: TextI = {
  years: {
    en: '+2 years',
    es: '+2 años',
    de: '+2 jahre',
  },
  experience: {
    en: 'experience',
    es: 'experiencia',
    de: '+Erfahrung',
  },
  asDev: {
    en: 'as developer',
    es: 'como desarrollador',
    de: 'als Entwickler',
  },
}

export default function YearsOfExperience() {
  const { language } = useContext(LanguageContext)

  return (
    <div className='flex flex-col text-center justify-center items-center gap-0 h-full '>
      <h2 className='text-2xl  text-gray-700 dark:text-white'>
        {text.years[language]}
      </h2>
      <p className='text-[13px] tracking-widest  text-gray-700 dark:text-white'>
        {text.experience[language]}
      </p>
    </div>
  )
}

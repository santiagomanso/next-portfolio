'use client'
import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { Dictionary } from '@/settings/dictionary'

interface ContextI {
  language: string
  flag: string
  setLanguage: Dispatch<SetStateAction<string>>
  setFlag: Dispatch<SetStateAction<string>>
  changeLanguage: (language: string, flag: string) => void
}

const initialContext: ContextI = {
  language: 'es',
  flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png',
  setLanguage: () => console.log('not initialized'),
  setFlag: () => console.log('not initialized'),
  changeLanguage: (language: string, flag: string) =>
    console.log('not initialized'),
}

export const LanguageContext = createContext<ContextI>(initialContext)

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [language, setLanguage] = useState(initialContext.language)
  const [flag, setFlag] = useState(initialContext.flag)
  const [dictionary, setDictionary] = useState(Dictionary.es)

  const changeLanguage = (language: string, flag: string) => {
    console.log('INCOMING language => ', language)
    setLanguage(language)
    setFlag(flag)
    setDictionary(Dictionary[language])
  }

  const data = {
    language,
    flag,
    dictionary,
    setLanguage,
    setFlag,
    changeLanguage,
  }
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

'use client'
import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { Dictionary, DictionaryI } from '@/settings/dictionary'

interface ContextI {
  language: string
  flag: string
  setLanguage: Dispatch<SetStateAction<string>>
  setFlag: Dispatch<SetStateAction<string>>
  changeLanguage: (language: string, flag: string) => void
  dictionary: DictionaryI[string]
  setDictionary: Dispatch<SetStateAction<DictionaryI[string]>>
}

const initialContext: ContextI = {
  language: 'es',
  flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png',
  setLanguage: () => console.log('not initialized'),
  setFlag: () => console.log('not initialized'),
  changeLanguage: (language: string, flag: string) =>
    console.log('not initialized'),
  dictionary: Dictionary.es,
  setDictionary: () => console.log('not initialized'),
}

export const LanguageContext = createContext<ContextI>(initialContext)

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [language, setLanguage] = useState(initialContext.language)
  const [flag, setFlag] = useState(initialContext.flag)
  const [dictionary, setDictionary] = useState<DictionaryI[string]>(
    Dictionary.es,
  )

  const changeLanguage = (language: string, flag: string) => {
    setLanguage(language)
    setFlag(flag)
    setDictionary((prevDictionary) => ({
      ...prevDictionary,
      ...Dictionary[language],
    }))
  }

  const data: ContextI = {
    language,
    flag,
    dictionary,
    setLanguage,
    setFlag,
    changeLanguage,
    setDictionary,
  }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

'use client'
import { useEffect, useState, useContext, useRef } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { Countries, Country } from '@/settings/countries'

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false) //<ul>activation
  const [activeCountry, setActiveCountry] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

  const { language, flag, changeLanguage } = useContext(LanguageContext)

  const handleClick = (country: Country) => {
    changeLanguage(country.language, country.flag)
    setOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <div
      ref={menuRef}
      className='rounded-md z-50 group'
      onClick={() => setOpen(!open)}
    >
      <div className='flex relative items-center justify-start gap-2 duration-200  rounded-md px-2'>
        {/* eslint-disable-next-line */}
        <img
          src={flag}
          alt={language}
          className='w-[32px] max-w-[80px] h-[30px]'
        />
        <span className='text-zinc-700 dark:group-hover:text-white dark:text-gray-500'>
          {language}
        </span>
      </div>
      <ul
        className={`fixed duration-100 ${
          open ? ' scale-100' : 'scale-0'
        } bg-gradient-to-br  from-white via-gray-200 to-gray-400 dark:from-slate-800 dark:to-neutral-800 capitalize  flex flex-col  gap-2 rounded-sm border dark:border-zinc-600/80 border-zinc-400/60 overflow-hidden z-[999] mt-1 w-[150px] p-2`}
      >
        {Countries.map((country) => {
          return (
            <li
              key={country.id}
              onClick={() => handleClick(country)}
              className='gap-2 flex items-center justify-start hover:bg-gray-300 dark:hover:border-zinc-500 hover:border-slate-400 dark:hover:bg-slate-700 hover:translate-x-1 duration-200 border p-3 z-50 w-full hover:cursor-pointer group'
            >
              {/* eslint-disable-next-line */}
              <img
                src={country.flag}
                alt={country.name[language]}
                className='w-[40px] max-w-[80px] h-[40px]'
              />
              <span className='tracking-widest'>{country.name[language]}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LanguageSwitcher

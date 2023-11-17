'use client'
import { LanguageContext } from '@/context/LanguageContext'
import { navData } from '@/settings/navbarData'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function Navbar() {
  const { language } = useContext(LanguageContext)

  const router = useRouter()

  const handleNavigation = (path?: string) => {
    path && router.push(path)
  }

  return (
    <nav className='w-full justify-between flex items-center gap-5 font-secondary text-gray-800 dark:text-slate-400'>
      <div
        className='flex items-center gap-1 cursor-pointer'
        onClick={() => handleNavigation(navData.home.path)}
      >
        {navData.home.icon} <p>{navData.home.label[language]}</p>
      </div>
      <ul className='flex items-center gap-10'>
        {navData.links.map((item) => {
          return (
            <li
              onClick={() => handleNavigation(item.path)}
              className='flex items-center gap-1 cursor-pointer'
              key={item.id}
            >
              {item.icon && item.icon}
              <p>{item.label[language]}</p>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

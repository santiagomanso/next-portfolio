'use client'
import { LanguageContext } from '@/context/LanguageContext'
import { navData } from '@/settings/navbarData'
import { usePathname, useRouter } from 'next/navigation'
import { useContext } from 'react'
import PcNavbar from './pc-navbar'
import MobileNavbar from './mobile-navbar'

export default function Navbar() {
  const { language } = useContext(LanguageContext)

  const router = useRouter()
  const location = usePathname()

  const handleNavigation = (path: string | boolean, externalHref: boolean) => {
    if (externalHref && typeof path === 'string') {
      window.open(path, '_ blank')
    } else {
      typeof path === 'string' && router.push(path)
    }
  }

  return (
    <nav>
      <PcNavbar
        location={location}
        handleNavigation={handleNavigation}
        language={language}
        navData={navData}
      />
      <MobileNavbar
        location={location}
        handleNavigation={handleNavigation}
        language={language}
        navData={navData}
      />
    </nav>
  )
}

import {
  faBars,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import ThemeSwitcher from '../theme-switcher'
import LanguageSwitcher from '../language-switcher'
import { NavDataI } from '@/settings/navbarData'

interface Props {
  handleNavigation: (path: string | boolean, externalHref: boolean) => void
  navData: NavDataI
  language: string
  location: string
}

export default function MobileNavbar({
  location,
  handleNavigation,
  navData,
  language,
}: Props) {
  const [isOpen, setIsOpen] = useState(false) //aside control
  const menuRef = useRef<HTMLDivElement>(null) //capture outside click

  //this function is to filter out theme-switcher && language-switcher
  //they are being rendered outside of the .map
  const responsiveData = navData.links.filter(
    (item) => item.id !== 2 && item.id !== 3,
  )

  const handleClick = (path: string | boolean, externalHref: boolean) => {
    setIsOpen(!isOpen)
    handleNavigation(path, externalHref)
  }

  return (
    <div className='lg:hidden' ref={menuRef}>
      {/* OPEN aside button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen ? 'inline' : ''
        }  dark:text-gray-300 text-neutral-800 absolute top-3 sm:top-15 right-6 z-50`}
      >
        <FontAwesomeIcon icon={faBars} className='text-3xl sm:text-4xl' />
      </button>

      <aside
        className={`${
          isOpen ? 'translate-x-0' : ' translate-x-full'
        } bg-gradient-to-br from-gray-400 to-zinc-900 w-full md:w-3/5 h-screen fixed top-0 right-0 z-50 select-none ease-in-out duration-300`}
      >
        <article className={`text-secondary`}>
          <div className='flex justify-between items-center px-6 mt-2'>
            <ThemeSwitcher setOpen={setIsOpen} />

            <LanguageSwitcher />

            {/* CLOSE aside button */}
            <button onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon
                icon={faXmark}
                className='text-3xl sm:text-4xl'
              />
            </button>
          </div>
          <ul className='flex flex-col gap-12 pt-10 px-2 text-2xl tracking-wider sm:text-4xl font-secondary'>
            <li
              className='px-5 flex justify-between items-center group'
              onClick={() =>
                handleNavigation(navData.home.path, navData.home.externalHref)
              }
            >
              {navData.home.icon} {navData.home.label[language]}{' '}
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            {responsiveData.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => handleClick(item.path, item.externalHref)}
                  className='px-5 flex justify-between items-center group'
                >
                  {item.icon && item.icon}
                  {item.label[language]}
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              )
            })}
          </ul>
        </article>
        {/* <Footer displayOnPhones /> */}
      </aside>
    </div>
  )
}

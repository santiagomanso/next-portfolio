import { NavDataI } from '@/settings/navbarData'

interface Props {
  handleNavigation: (path: string | boolean, externalHref: boolean) => void
  navData: NavDataI
  language: string
  location: string
}

export default function PcNavbar({
  location,
  handleNavigation,
  navData,
  language,
}: Props) {
  return (
    <div className='hidden lg:flex w-full justify-between  items-center gap-5 font-secondary text-gray-700 dark:text-slate-300'>
      <div
        className='flex items-center gap-1 cursor-pointer'
        onClick={() =>
          handleNavigation(navData.home.path, navData.home.externalHref)
        }
      >
        {navData.home.icon} <p>{navData.home.label[language]}</p>
      </div>
      <ul className='flex items-center gap-16'>
        {navData.links.map((item) => {
          return (
            <li
              onClick={() => handleNavigation(item.path, item.externalHref)}
              className={`${
                location === item.path
                  ? ' dark:text-gray-100 opacity-100 scale-110'
                  : 'hover:-translate-y-1 hover:scale-105 text-gray-700 dark:text-secondary'
              } cursor-pointer  flex items-baseline gap-1 translate-y-0  transition-all ease-out duration-300 groupo hover:text-black dark:hover:text-gray-100`}
              key={item.id}
            >
              <div
                className={`text-xl 
                ${
                  location === item.path
                    ? 'text-black dark:text-gray-100 '
                    : 'group-hover:rotate-[-23deg] hover:text-black'
                } transition-all ease-in-out duration-300 dark:hover:text-gray-100`}
              >
                {item.icon && item.icon}
              </div>
              <p className={`text-gray-500/80`}>{item.label[language]}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

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
    <div className='hidden lg:flex w-full justify-between items-center gap-5 tracking-wider  font-primary'>
      <div
        className={`flex items-center gap-1 cursor-pointer group transition-all ease-in-out duration-150 ${
          location === navData.home.path
            ? ''
            : 'text-gray-700 dark:text-gray-500 dark:hover:text-white'
        }`}
        onClick={() =>
          handleNavigation(navData.home.path, navData.home.externalHref)
        }
      >
        <div
          className={`text-xl transition-all ease-in-out duration-150
                ${
                  location === navData.home.path
                    ? 'text-gray-700 dark:text-white scale-105'
                    : ''
                }`}
        >
          {navData.home.icon}
        </div>
        <p
          className={`${
            location === navData.home.path
              ? 'scale-105 text-gray-700 dark:text-white'
              : ''
          }`}
        >
          {navData.home.label[language]}
        </p>
      </div>
      <ul className='flex items-center gap-16'>
        {navData.links.map((item) => {
          return (
            <li
              onClick={() => handleNavigation(item.path, item.externalHref)}
              className={`${
                location === item.path
                  ? ' dark:text-white opacity-100 scale-110'
                  : ' text-gray-700 dark:text-gray-500 dark:hover:text-white'
              } cursor-pointer  flex items-baseline gap-1   transition-all ease-out duration-150 group  `}
              key={item.id}
            >
              <div
                className={`text-xl transition-all ease-in-out duration-150`}
              >
                <div
                  className={` dark:text-gray-400 ${
                    location === item.path
                      ? 'text-gray-700 dark:text-white'
                      : ''
                  }`}
                >
                  {item.icon && item.icon}
                </div>
              </div>
              <p
                className={`${
                  location === item.path
                    ? 'scale-105 text-gray-700 dark:text-white'
                    : ''
                }`}
              >
                {item.label[language]}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

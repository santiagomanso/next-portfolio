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
          location === navData.home.path ? '' : ''
        }`}
        onClick={() =>
          handleNavigation(navData.home.path, navData.home.externalHref)
        }
      >
        <div
          className={`text-xl transition-all ease-in-out duration-150
                ${
                  location === navData.home.path
                    ? 'text-zinc-700  dark:text-white '
                    : 'text-zinc-700 dark:group-hover:text-white dark:text-gray-500'
                }`}
        >
          {navData.home.icon}
        </div>
        <p
          className={`${
            location === navData.home.path
              ? ' text-zinc-700  dark:text-white'
              : 'text-zinc-700 dark:group-hover:text-white dark:text-gray-500'
          }`}
        >
          {navData.home.label[language]}
        </p>
      </div>
      <ul className='flex items-center gap-16'>
        {navData.links.map((item) => {
          console.log('item', typeof item)
          return (
            <li
              onClick={() => handleNavigation(item.path, item.externalHref)}
              className={`transition-all ease-in-out duration-150  group ${
                location === item.path ? '  ' : '  '
              } cursor-pointer  flex items-baseline gap-1   transition-all ease-out duration-150 group  `}
              key={item.id}
            >
              <div
                className={`transition-all duration-150 ${
                  location === item.path
                    ? 'text-slate-500 dark:text-white -rotate-[9deg] -translate-x-1 -translate-y-1 scale-125'
                    : item.path &&
                      'text-slate-500 dark:text-gray-500  group-hover:-rotate-[9deg] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-125'
                }`}
              >
                {item.icon && item.icon}
              </div>

              <p
                className={`transition-all duration-150 ${
                  location === item.path
                    ? 'text-slate-800 dark:text-white  -translate-y-1'
                    : item.path &&
                      'text-zinc-700 group-hover:-translate-y-1 dark:text-gray-500'
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

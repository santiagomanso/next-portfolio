import {
  faBars,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import ThemeSwitcher from '../theme-switcher';
import LanguageSwitcher from '../language-switcher';
import { NavDataI } from '@/settings/navbarData';
import { Button } from '../ui/button';
import { Assets } from '@/assets';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface Props {
  handleNavigation: (path: string | boolean, externalHref: boolean) => void;
  navData: NavDataI;
  language: string;
  location: string;
  router: AppRouterInstance;
}

interface Label {
  experience: { [index: string]: string; en: string; es: string; de: string };
  about: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  portfolio: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
}

const labels: Label = {
  experience: {
    en: 'Experience',
    es: 'Experiencia',
    de: 'Erfahrung',
  },
  about: {
    en: 'About',
    es: 'Sobre mí',
    de: 'Über mich',
  },
  portfolio: {
    en: 'Portfolio',
    es: 'Portafolio',
    de: 'Portfolio',
  },
};

export default function MobileNavbar({
  location,
  handleNavigation,
  navData,
  language,
  router,
}: Props) {
  const [isOpen, setIsOpen] = useState(false); //aside control
  const menuRef = useRef<HTMLDivElement>(null); //capture outside click

  //this function is to filter out theme-switcher && language-switcher
  //they are being rendered outside of the .map
  const responsiveData = navData.links.filter(
    (item) => item.id !== 2 && item.id !== 3,
  );

  const handleClick = (path: string | boolean, externalHref: boolean) => {
    setIsOpen(false);
    handleNavigation(path, externalHref);
  };

  function formatLocation(location: string): string {
    const formattedLocation = location.startsWith('/')
      ? location.slice(1)
      : location;
    const locationKey = formattedLocation.toLowerCase();

    // Type guard to check if locationKey is a valid key of Label
    if (locationKey in labels) {
      const key = locationKey as keyof Label;
      const translatedLocation = labels[key]?.[language] || formattedLocation;
      return (
        translatedLocation.charAt(0).toUpperCase() + translatedLocation.slice(1)
      );
    } else {
      // If locationKey is not a valid key, return the formattedLocation with the first letter capitalized
      return (
        formattedLocation.charAt(0).toUpperCase() + formattedLocation.slice(1)
      );
    }
  }

  return (
    <div
      className={`${
        location === '/'
          ? 'hidden'
          : 'bg-gradient-to-br from-white to-white dark:from-neutral-700 dark:to-neutral-900 flex justify-between items-center w-full h-full lg:hidden py-2 px-4'
      }`}
      ref={menuRef}
    >
      <Button
        variant='ghost'
        className='p-0  focus:bg-transparent'
        onClick={router.back}
      >
        <Assets.Icons.ArrowLeft
          className='dark:fill-white'
          height={30}
          width={30}
        />
      </Button>
      <h1>{formatLocation(location)}</h1>
      <button
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen ? 'inline' : ''
        }  dark:text-gray-300 text-neutral-800`}
      >
        <FontAwesomeIcon icon={faBars} className='text-2xl sm:text-4xl' />
      </button>
      <aside
        className={`${
          isOpen ? 'translate-x-0' : ' translate-x-full'
        } bg-gradient-to-br from-white to-white dark:from-neutral-900 dark:to-zinc-900 w-full md:w-3/5 h-screen fixed top-0 right-0 z-50 select-none ease-in-out duration-300`}
      >
        <article className={`text-secondary`}>
          <div className='flex items-center justify-between px-7 py-4 shadow'>
            <ThemeSwitcher />

            <LanguageSwitcher />

            {/* CLOSE aside button */}
            <button onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon
                icon={faXmark}
                className='text-3xl sm:text-4xl'
              />
            </button>
          </div>
          <ul className='flex flex-col gap-8 pt-5 px-2 text-  xl tracking-wider sm:text-4xl'>
            <li
              className='px-5 flex justify-between items-center group'
              onClick={() =>
                handleClick(navData.home.path, navData.home.externalHref)
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
              );
            })}
          </ul>
        </article>
        {/* <Footer displayOnPhones /> */}
      </aside>
    </div>
  );
}

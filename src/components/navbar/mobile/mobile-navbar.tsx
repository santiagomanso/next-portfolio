import {
  faBars,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ThemeSwitcher from '../../theme-switcher';
import LanguageSwitcher from '../../language-switcher';
import { NavDataI } from '@/components/navbar/navbarData';
import { Button } from '../../ui/button';
import { Assets } from '@/assets';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Menu } from 'lucide-react';
import { DrawerAside } from './drawer-aside';

interface Props {
  handleNavigation: (path: string | boolean, externalHref: boolean) => void;
  navData: NavDataI;
  language: string;
  location: string;
  router: AppRouterInstance;
  path?: string;
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
  navData,
  language,
  router,
  path,
  handleNavigation,
}: Props) {
  const [isOpen, setIsOpen] = React.useState(false); //aside control
  const menuRef = React.useRef<HTMLDivElement>(null); //capture outside click

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

    // If the location starts with "portfolio", return "Portfolio" (translated)
    if (formattedLocation.startsWith('portfolio')) {
      return labels.portfolio[language];
    }

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

  // Function to handle back navigation
  const handleBackNavigation = () => {
    if (location === '/portfolio') {
      // If you're on the main portfolio page, go to the homepage
      router.push('/');
    } else if (location.startsWith('/portfolio')) {
      // If you're in any portfolio detail, go to the portfolio page
      router.push('/portfolio');
    } else {
      // Otherwise, go to the homepage
      router.push('/');
    }
  };

  return (
    <div
      className={`${
        location === '/'
          ? 'hidden'
          : 'bg-gradient-to-br to-gray-200 via-gray-100 from-gray-400 shadow-lg dark:from-neutral-700 dark:to-neutral-900 flex justify-between items-center w-full h-full lg:hidden py-2 px-4'
      }`}
      ref={menuRef}
    >
      <Button
        variant='ghost'
        className='p-0  focus:bg-transparent'
        onClick={handleBackNavigation}
      >
        <Assets.Icons.ArrowLeft
          className='dark:fill-white'
          height={30}
          width={30}
        />
      </Button>
      <h1>{formatLocation(location)}</h1>
      <DrawerAside
        language={language}
        location={location}
        navData={navData}
        responsiveData={responsiveData}
        handleClick={handleClick}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

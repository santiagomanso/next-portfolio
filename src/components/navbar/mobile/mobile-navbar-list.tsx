import React from 'react';

import { ThemeSwitcher } from '@/app/_components/responsive/components';
import { NavDataI, singleLink } from '@/components/navbar/navbarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import LanguageSwitcher from '../../language-switcher';

interface Props {
  location: string;
  handleClick: (path: string | boolean, externalHref: boolean) => void;
  navData: NavDataI;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  language: string;
  responsiveData: singleLink[];
}

export default function MobileNavbarList({
  location,
  handleClick,
  navData,
  isOpen,
  setIsOpen,
  language,
  responsiveData,
}: Props) {
  return (
    <article className='text-muted-foreground'>
      <div className='flex items-center justify-between px-7 py-4'>
        <ThemeSwitcher border={false} />
        <LanguageSwitcher />
        {/* CLOSE aside button */}
        <button onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faXmark} className='text-3xl sm:text-4xl' />
        </button>
      </div>
      <ul className='flex flex-col gap-8 pt-5 px-2 text-xl tracking-wider sm:text-4xl'>
        <li
          className='px-5 flex justify-between items-center group'
          onClick={() =>
            handleClick(navData.home.path, navData.home.externalHref)
          }
        >
          {navData.home.icon} {navData.home.label[language]}{' '}
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        {responsiveData.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.path, item.externalHref)}
            className='px-5 flex justify-between items-center group'
          >
            {item.icon && item.icon}
            {item.label[language]}
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        ))}
      </ul>
    </article>
  );
}

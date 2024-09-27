import * as React from 'react';
import { Menu, Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import MobileNavbarList from './mobile-navbar-list';
import { NavDataI, singleLink } from '@/components/navbar/navbarData';

interface Props {
  handleClick: (path: string | boolean, externalHref: boolean) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  language: string;
  location: string;
  navData: NavDataI;
  responsiveData: singleLink[];
}

interface TextI {
  [index: string]: {
    [index: string]: string;
  };
}

const text: TextI = {
  close: {
    en: 'Close',
    es: 'Cerrar',
    de: 'Schließen',
  },
};

export function DrawerAside({
  handleClick,
  isOpen,
  setIsOpen,
  language,
  navData,
  location,
  responsiveData,
}: Props) {
  return (
    <Drawer onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant='ghost'
          size={'icon'}
          className='bg-transparent active:bg-transparent focus:bg-transparent'
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='dark:bg-neutral-950 p-4 dark:border-neutral-700'>
        <div className='mx-auto w-full max-w-sm'>
          <section className='px-6'>
            <MobileNavbarList
              handleClick={handleClick}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              language={language}
              location={location}
              navData={navData}
              responsiveData={responsiveData}
            />
          </section>
          <DrawerFooter className={`p-6`}>
            <DrawerClose asChild>
              <Button
                variant='outline'
                className='bg-gradient-to-br border-gray-500/30  from-neutral-300 to-neutral-300 dark:from-neutral-800 dark:to-stone-950 dark:border-stone-800'
              >
                {text.close[language]}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

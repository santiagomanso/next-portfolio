'use client';
import { LanguageContext } from '@/context/LanguageContext';
import { navData } from '@/components/navbar/navbarData';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';
import PcNavbar from './pc-navbar';
import MobileNavbar from './mobile/mobile-navbar';
import { NavigationContext } from '@/context/navigation-context';

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const { handlePath, path } = useContext(NavigationContext);

  const router = useRouter();
  const location = usePathname();

  const handleNavigation = (path: string | boolean, externalHref: boolean) => {
    if (externalHref && typeof path === 'string') {
      window.open(path, '_ blank');
    } else if (typeof path === 'string') {
      console.log('navbar location', location);
      console.log('navbar path', path);
      handlePath(location);
      router.push(path);
    }
  };

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
        path={path}
        language={language}
        navData={navData}
        router={router}
      />
    </nav>
  );
}

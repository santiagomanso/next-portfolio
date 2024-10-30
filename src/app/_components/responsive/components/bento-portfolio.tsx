import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import { useContext } from 'react';

interface TextI {
  title: {
    [index: string]: string;
  };
  subtitle: {
    [index: string]: string;
  };
}

const text: TextI = {
  title: {
    en: 'portfolio',
    es: 'portafolio',
    de: 'Portfolio',
  },
  subtitle: {
    en: 'my projects',
    es: 'mis proyectos',
    de: 'meine Projekte',
  },
};

export default function PortfolioLink() {
  const { language } = useContext(LanguageContext);

  return (
    <Link
      href='/portfolio'
      aria-label='Go to portfolio page'
      className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg   row-span-2'
    >
      <div className='flex flex-col text-center justify-center items-center gap-0 h-full '>
        <h2 className='text-2xl  text-gray-700 dark:text-white'>
          {text.title[language]}
        </h2>
        <p className='text-[13px] tracking-widest  text-gray-700 dark:text-white'>
          {text.subtitle[language]}
        </p>
      </div>
    </Link>
  );
}

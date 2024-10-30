import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import { useContext } from 'react';

interface TextI {
  subtitle: { [index: string]: string };
  title: { [index: string]: string };
}

const text: TextI = {
  title: {
    en: 'experience',
    es: 'experiencia',
    de: 'Erfahrung',
  },
  subtitle: {
    en: '+2 years, check it out',
    es: '+2 años, donde trabajé y qué hice',
    de: '+2 Jahre, wo ich gearbeitet habe',
  },
};

export default function ExperienceLink() {
  const { language } = useContext(LanguageContext);

  return (
    <Link
      href='/experience'
      className='w-full h-full'
      aria-label='Go to experience page'
    >
      <div className='flex flex-col justify-center text-center items-center h-full'>
        <h2 className='text-2xl tracking-wider text-gray-700 dark:text-white'>
          {text.title[language]}
        </h2>
        <p className=' tracking-widest text-[13px] text-gray-700 dark:text-gray-300'>
          {text.subtitle[language]}
        </p>
      </div>
    </Link>
  );
}

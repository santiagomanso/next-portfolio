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
    en: '+2 years, where I worked and what I did',
    es: '+2 años, donde trabajé y qué hice',
    de: '+2 Jahre, wo ich gearbeitet habe',
  },
};

export default function ExperienceLink() {
  const { language } = useContext(LanguageContext);

  return (
    <Link
      href='/experience'
      className='border-[1px] dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  col-span-2'
    >
      <div className='flex flex-col justify-center text-center items-center h-full'>
        <h2 className='text-3xl tracking-wider text-gray-700 dark:text-white'>
          {text.title[language]}
        </h2>
        <p className=' tracking-widest text-[13px] text-gray-700 dark:text-gray-300'>
          {text.subtitle[language]}
        </p>
      </div>
    </Link>
  );
}

import { LanguageContext } from '@/context/LanguageContext';
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
    en: 'where I worked and what I did',
    es: 'donde trabajé y qué hice',
    de: 'Meine Arbeitserfahrung',
  },
};

export default function ExperienceLink() {
  const { language } = useContext(LanguageContext);

  return (
    <div className='flex flex-col justify-center text-center items-center h-full'>
      <h2 className=' text-3xl tracking-wider text-gray-700 dark:text-white'>
        {text.title[language]}
      </h2>
      <p className=' tracking-widest text-[13px] text-gray-700 dark:text-gray-300'>
        {text.subtitle[language]}
      </p>
    </div>
  );
}

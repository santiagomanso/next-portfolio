import { LanguageContext } from '@/context/LanguageContext';
import { Countries } from '@/settings/countries';
import { useContext, useState } from 'react';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext);

  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    if (selected >= 2) {
      setSelected((prev) => prev - 2);
    } else {
      setSelected((prev) => prev + 1);
    }

    changeLanguage(Countries[selected].language, Countries[selected].flag);
  };

  return (
    <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg '>
      <div
        className='flex flex-col text-center justify-center w-full h-full '
        onClick={handleClick}
      >
        <h1 className=' tracking-widest font-semibold text-gray-700 dark:text-white text-5xl'>
          {language}
        </h1>
        <div className='flex justify-center text-center text-lg gap-2 w-full pr-1 tracking-wider'>
          <p
            className={`${
              language === 'es'
                ? 'text-purple-500'
                : 'text-gray-700 dark:text-white'
            }`}
          >
            es
          </p>
          <p
            className={`${
              language === 'en'
                ? 'text-purple-500'
                : 'text-gray-700 dark:text-white'
            }`}
          >
            en
          </p>
          <p
            className={`${
              language === 'de'
                ? 'text-purple-500'
                : 'text-gray-700 dark:text-white'
            }`}
          >
            de
          </p>
        </div>
      </div>
    </article>
  );
}

import { Assets } from '@/assets';
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
    <div
      className='flex flex-col text-center justify-center w-full h-full '
      onClick={handleClick}
    >
      <div className='flex justify-center'>
        {language === 'en' && <Assets.Icons.Usa className='w-12 h-12' />}
        {language === 'es' && <Assets.Icons.Spain className='w-12 h-12' />}
        {language === 'de' && <Assets.Icons.Germany className='w-12 h-12' />}
      </div>
      {/* <h1 className=' tracking-widest font-semibold text-gray-700 dark:text-white text-4xl'>
        {language}
      </h1> */}
      {/* <div className='flex justify-center text-center text-base gap-2 w-full pr-1 tracking-wider'>
        <Assets.Icons.Spain
          className={`w-6 h-6  ${
            language === 'es' ? 'opacity-100' : 'opacity-40'
          }`}
        />
        <Assets.Icons.Usa
          className={`w-6 h-6  ${
            language === 'en' ? 'opacity-100' : 'opacity-40'
          }`}
        />

        <Assets.Icons.Germany
          className={`w-6 h-6  ${
            language === 'de' ? 'opacity-100' : 'opacity-40'
          }`}
        />
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
      </div> */}
    </div>
  );
}

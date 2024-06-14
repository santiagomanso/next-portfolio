import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import { useContext } from 'react';

interface TextI {
  myCv: {
    [index: string]: string;
  };
  download: {
    [index: string]: string;
  };
}

const text: TextI = {
  myCv: {
    en: 'resume',
    es: 'curriculum',
    de: 'Lebenslauf',
  },
  download: {
    en: 'download',
    es: 'descargar',
    de: 'herunterladen',
  },
};

export default function MyCv() {
  const { language } = useContext(LanguageContext);

  const handleClick = () => {
    window.open(
      'https://santimanso.com/static/media/SantiagoMansoCastro_CV.8567079f951195ba615c.pdf',
      '_blank',
    );
  };

  return (
    <div
      onClick={handleClick}
      className='w-full h-full flex items-center justify-center flex-col'
    >
      <h2 className='text-xl tracking-wide text-gray-700 dark:text-white'>
        {text.myCv[language]}
      </h2>
      <p className='text-sm tracking-widest  text-gray-700 dark:text-gray-400'>
        {text.download[language]}
      </p>
    </div>
  );
}

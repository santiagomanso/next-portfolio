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
    en: 'my resume',
    es: 'mi curriculum',
    de: 'mein Lebenslauf',
  },
  download: {
    en: 'download',
    es: 'descargar',
    de: 'herunterladen',
  },
};

export default function CurriculumLink() {
  const { language } = useContext(LanguageContext);

  const handleClick = () => {
    window.open(
      'https://santimanso.com/static/media/SantiagoMansoCastro_CV.8567079f951195ba615c.pdf',
      '_blank',
    );
  };

  return (
    <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg col-span-2'>
      <div
        onClick={handleClick}
        className='w-full h-full flex items-center justify-center flex-col'
      >
        <h2 className='text-2xl tracking-wide text-gray-700 dark:text-white'>
          {text.myCv[language]}
        </h2>
        <p className='text-[13px] tracking-widest  text-gray-700 dark:text-white'>
          {text.download[language]}
        </p>
      </div>
    </article>
  );
}

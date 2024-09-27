import React from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Typewriter from 'typewriter-effect';

interface HeaderI {
  [index: string]: string;
}

const message: HeaderI = {
  en: "Hi, I'm santiago<br />manso castro",
  es: 'Hola, soy santiago<br />manso castro',
  de: 'Hallo, Ich bin<br />Santiago Manso Castro',
};

export default function TypeWritter() {
  const { language } = useContext(LanguageContext);

  return (
    <div className='text-center flex justify-center flex-col items-center z-10'>
      <div className='text-gray-500 dark:text-gray-300 mt-1 text-sm'>
        <Typewriter
          options={{
            strings: [
              'Frontend developer💻',
              'Typescript 💓',
              'Tailwind Css 💓',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <h1
        className='text-3xl text-gray-700 dark:text-gray-100 tracking-wide sm:text-4xl lg:text-5xl px-0 text-center w-full md:px-0'
        dangerouslySetInnerHTML={{ __html: message[language] }}
      />
    </div>
  );
}

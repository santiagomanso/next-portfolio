import React from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Typewriter from 'typewriter-effect';

interface HeaderI {
  [index: string]: string;
}

const message: HeaderI = {
  en: "Hi, I'm santiago\nmanso castro",
  es: 'Hola, soy santiago\nmanso castro',
  de: 'Hallo, Ich bin Santiago\nManso Castro',
};

export default function TypeWritter() {
  const { language } = useContext(LanguageContext);

  // Split the message at the marker and map to JSX elements with a line break
  const formattedMessage = message[language]
    .split('\n')
    .map((part, index, array) => (
      <React.Fragment key={index}>
        {part}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  col-span-3 row-span-2 flex flex-col justify-center'>
      <div className='text-center flex justify-center flex-col items-center'>
        <h1 className='text-3xl text-gray-700 dark:text-gray-100 tracking-wide sm:text-4xl lg:text-5xl px-10 md:px-0'>
          {formattedMessage}
        </h1>
        <div className='text-gray-500 dark:text-gray-300 mt-1 text-sm'>
          <Typewriter
            options={{
              strings: [
                'Fullstack developer💻',
                'Typescript 💓',
                'Tailwind Css 💓',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </article>
  );
}

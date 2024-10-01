import { Assets } from '@/assets';
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import React from 'react';

type LabelType = {
  [key: string]: string;
};

const label: LabelType = {
  es: 'Acerca<br />de mí',
  de: 'Über<br />mich',
  en: 'About<br />me',
};

export default function About() {
  const { language } = React.useContext(LanguageContext);
  return (
    <Link
      href='/about'
      className='w-full h-full flex flex-col items-center justify-center text-center gap-1'
    >
      <p
        dangerouslySetInnerHTML={{ __html: label[language] }}
        className='text-2xl text-gray-700 dark:text-white'
      />
    </Link>
  );
}

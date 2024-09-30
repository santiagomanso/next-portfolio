import { Assets } from '@/assets';
import { LanguageContext } from '@/context/LanguageContext';
import React from 'react';

type LabelType = {
  [key: string]: string;
};

const label: LabelType = {
  es: 'estudiando<br />También',
  de: 'Lernen<br />Auch',
  en: 'Also<br />Learning',
};

export default function AlsoLearning() {
  const { language } = React.useContext(LanguageContext);
  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-center gap-1'>
      <p
        dangerouslySetInnerHTML={{ __html: label[language] }}
        className='text-2xl text-gray-700 dark:text-white'
      />
      <Assets.Icons.Python className='w-12 h-12 ' />
    </div>
  );
}

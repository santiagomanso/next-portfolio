import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import { useContext } from 'react';
import Typewriter from 'typewriter-effect';

interface TextI {
  experience: {
    [index: string]: string;
  };
  projects: {
    [index: string]: string;
  };
}

const text: TextI = {
  experience: {
    en: 'experience',
    es: 'experiencia',
    de: 'Erfahrung',
  },
  projects: {
    en: 'projects',
    es: 'proyectos',
    de: 'Projekte',
  },
};

export default function LaptopHome() {
  const { language } = useContext(LanguageContext);
  return (
    <section
      className={`hidden font-primary animate-fade-up animate-duration-700  animate-ease-out lg:flex flex-col items-center tracking-wider gap-5`}
    >
      <div className='flex flex-col h-full justify-between items-center'>
        <div className='text-center flex flex-col gap-3'>
          <div className='text-gray-500 dark:text-gray-400'>
            <Typewriter
              options={{
                strings: [
                  'Frontend developer💻',
                  'Typescript 💓',
                  'Next.js / React / React-Native ⚛️',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h1 className='text-3xl text-gray-700 font-primary dark:text-gray-100 tracking-wide sm:text-4xl lg:text-5xl'>
            santiago manso castro
          </h1>
        </div>
      </div>

      <div className='flex justify-between gap-5 '>
        <Link
          href='/portfolio'
          className={`border-gray-300/90   animate-ease-out text-center text-xl lg:text-2xl dark:bg-neutral-800 text-gray-500 dark:text-gray-300 dark:hover:shadow-gray-700 tracking-wider  w-1/2  border-[1px] dark:border-neutral-900 ease-in-out px-8 py-2 rounded-sm select-none hover:shadow-md hover:shadow-gray-500 shadow-md dark:hover:shadow-lg hover:-translate-y-[0.15rem] transition-all duration-150  lg:active:translate-y-4 min-w-[270px]`}
        >
          {text.projects[language]}
        </Link>
        <Link
          href='/experience'
          className={`border-gray-300/90   animate-ease-out text-center text-xl lg:text-2xl bg-gradient-to-br dark:text-gray-300 dark:from-purple-600 dark:to-violet-950 from-white hover:shadow-md hover:shadow-gray-500 to-slate-300 tracking-wider  w-1/2 ease-in-out px-8 py-2 rounded-sm select-none border-[1px] text-gray-500 dark:border-purple-950 shadow-md dark:hovershadow-violet-600 dark:hover:shadow-violet-500 dark:hover:shadow-lg hover:-translate-y-[0.15rem] transition-all duration-150  lg:active:translate-y-3 min-w-[270px]`}
        >
          {text.experience[language]}
        </Link>
      </div>
    </section>
  );
}

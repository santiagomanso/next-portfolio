import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import { useContext } from 'react';

interface TextI {
  portfolioTitle: { [index: string]: string };
  portfolioSubtitle: { [index: string]: string };
  experienceTitle: { [index: string]: string };
  experienceSubtitle: { [index: string]: string };
}

const text: TextI = {
  portfolioTitle: {
    en: 'portfolio',
    es: 'portafolios',
    de: 'portfolio',
  },
  portfolioSubtitle: {
    en: 'showcase of my skills',
    es: 'Muestra de mis habilidades',
    de: 'Showcase meiner Fähigkeiten',
  },
  experienceTitle: { en: 'experience', es: 'experiencia', de: 'Erfahrung' },
  experienceSubtitle: {
    en: 'responsibilities and learning',
    es: 'responsabilidades y aprendizaje',
    de: 'Verantwortlichkeiten und Lernen',
  },
};

type Props = {
  link: 'experience' | 'portfolio';
};

export default function BentoLink({ link }: Props) {
  const { language } = useContext(LanguageContext);

  const switchContent = (link: string) => {
    switch (link) {
      case 'experience':
        return {
          title: text.experienceTitle[language],
          subtitle: text.experienceSubtitle[language],
        };
      case 'portfolio':
        return {
          title: text.portfolioTitle[language],
          subtitle: text.portfolioSubtitle[language],
        };
    }
  };

  return (
    <Link
      href={`/${link}`}
      className='border-[1px] dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  col-span-2 flex items-center justify-center flex-col'
    >
      <h2 className=' text-3xl tracking-wider text-gray-700 dark:text-white'>
        {switchContent(link)?.title}
      </h2>
      <p className=' tracking-widest text-[13px] text-gray-700 dark:text-gray-400'>
        {switchContent(link)?.subtitle}
      </p>
    </Link>
  );
}

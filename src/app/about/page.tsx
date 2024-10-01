'use client';
import { Assets } from '@/assets';
import Container from '@/components/container';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import React from 'react';
import AboutMe from './_components/about-me';

type LabelType = {
  title: { [key: string]: string };
  description: { [key: string]: string };
};

const labels: LabelType = {
  title: {
    en: 'About',
    es: 'Sobre mi',
    de: 'Über mich',
  },
  description: {
    en: 'I am a software developer with a passion for creating beautiful and functional websites. I have experience in web development, mobile development, and desktop development. I am a quick learner and I am always looking for new challenges.',
    es: 'Soy un desarrollador de software con pasión por crear sitios web hermosos y funcionales. Tengo experiencia en desarrollo web, desarrollo móvil y desarrollo de escritorio. Soy un aprendiz rápido y siempre estoy buscando nuevos desafíos.',
    de: 'Ich bin ein Softwareentwickler mit Leidenschaft für die Erstellung schöner und funktionaler Websites. Ich habe Erfahrung in der Webentwicklung, der mobilen Entwicklung und der Desktop-Entwicklung. Ich bin ein schneller Lerner und suche immer nach neuen Herausforderungen.',
  },
};

export default function About() {
  const { language } = React.useContext(LanguageContext);

  return (
    <Container border background padding='p-0'>
      {/* <section className='flex lg:flex-row flex-col gap-10 w-full lg:w-2/3 lg:items-center pt-7 lg:pt-0 justify-center lg:h-full'>
        <article className='animate-fade-left text-center mx-auto w-2/3 lg:w-[800px] lg:h-[320px] rounded-[70px] bg-gradient-to-br from-slate-500 to-stone-800 dark:to-stone-900 dark:from-slate-800 border border-gray-500 flex justify-center items-center  relative overflow-hidden '>
          <Image
            src={Assets.Images.Santi3}
            alt='about'
            className='lg:w-full lg:h-full'
            objectFit='cover'
          />
        </article>
        <article className='animate-fade-right flex justify-center items-center '>
          <div className='flex flex-col gap-2'>
            <p className='text-4xl lg:text-6xl font-primary tracking-wider text-center lg:text-start'>
              {labels.title[language]}
            </p>
            <p className='text-center lg:text-xl  dark:text-gray-300 lg:text-justify lg:w-5/6'>
              {labels.description[language]}
            </p>
          </div>
        </article>
      </section> */}
      <AboutMe />
    </Container>
  );
}

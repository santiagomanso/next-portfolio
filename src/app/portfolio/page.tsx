'use client';
import Image from 'next/image';
import Container from '@/components/container';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { labels } from './_data';
import { projectsArray } from './_data/projects';
import SingleProject from './_components/single-project';
import Link from 'next/link';

export default function Page() {
  const { language } = useContext(LanguageContext);
  return (
    <Container border background padding='p-0'>
      <section className='grid grid-cols-1 md:grid-cols-11 w-full flex-1'>
        {projectsArray.map((project, index) => (
          <article
            key={index}
            className={`${project.colSpan} relative group transition-all ease-in-out overflow-hidden `}
          >
            <div
              className={`h-full ${project.topBg} w-full absolute -top-1/2 left-0  group-hover:-translate-y-full ease-in-out transition-all duration-700 z-0 backdrop-blur-sm`}
            />
            <div
              className={`h-full ${project.bottomBg} w-full absolute top-1/2 left-0  group-hover:translate-y-full ease-in-out transition-all duration-700 z-0 backdrop-blur-sm`}
            />

            <header className='flex group-hover:top-3 group-hover:left-3 group-hover:translate-x-0 group-hover:-translate-y-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 duration-1000 justify-center items-center z-10'>
              <h2 className='text-sm md:text-xl font-primary text-gray-800 tracking-widest dark:border-stone-600 font-bold bg-gradient-to-br from-gray-100/90 to-slate-300/95 dark:from-zinc-800/95 dark:to-stone-700/95 dark:via-neutral-800/95 dark:text-white rounded p-1 border md:px-2 md:py-2'>
                {project.name}
              </h2>
            </header>

            {project.screenshots && (
              <Image
                src={project.screenshots[0]}
                alt={project.name}
                width={1000}
                height={1000}
                className='object-cover h-full -z-10 absolute top-0 left-0 w-full'
              />
            )}

            <div className='bg-gradient-to-b from-transparent to-black w-full h-full absolute bottom-0 translate-y-full transition-all ease-in-out duration-1000 group-hover:-translate-y-0 flex flex-col items-center p-4 justify-end gap-2 md:gap-3'>
              <p className='bg-black/90 text-white text-sm md:text-base truncate lg:overflow-visible lg:whitespace-normal lg:truncate-none w-full'>
                {project.descriptionShort[language]}
              </p>
              <Link
                href={`/portfolio/${project.id}`}
                className='text-gray-100 tracking-widest dark:border-stone-600 font-bold bg-gradient-to-br from-transparent to-transparent dark:from-transparent dark:to-transparent dark:transparent dark:text-white rounded border text-base px-3 md:px-3 md:py-1'
              >
                {labels.seeMore[language]}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}

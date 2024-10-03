'use client';
import { Assets } from '@/assets';
import Container from '@/components/container';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import React from 'react';
import { AwardIcon, LayoutGrid } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

type LabelType = {
  title: { [key: string]: string };
  description: { [key: string]: string };
  miscellanous: {
    title: { [key: string]: string };
    description: { [key: string]: string };
  };
  birthday: {
    label: { [key: string]: string };
    dateOfBirth: { [key: string]: string };
  };
  location: {
    title: { [key: string]: string };
    description: { [key: string]: string };
  };
  hobbies: {
    title: { [key: string]: string };
    description: { [key: string]: string };
  };
};

const labels: LabelType = {
  title: {
    en: 'About',
    es: 'Sobre mi',
    de: 'Über mich',
  },
  description: {
    en: "Hi! 👋🏼 I'm Santi, a software developer with expertise in frontend and backend technologies. I’ve worked with companies like Rocket Labs, building impactful mobile and web features using tools like React, Next.js, and Firebase. My experience includes AI-powered e-commerce features, robust authentication systems, and optimizing data rendering with pagination and infinite scroll. I prioritize clean, maintainable code, following best practices like the MVC pattern. Always eager for new challenges, my goal is to build software that works efficiently and delivers real value to users.",

    es: '¡Hola! 👋🏼 Soy Santi, un desarrollador de software con experiencia en tecnologías frontend y backend. He trabajado con empresas como Rocket Labs, creando funciones para aplicaciones móviles y web usando herramientas como React, Next.js y Firebase. Mi experiencia incluye funciones con IA para e-commerce, sistemas de autenticación robustos y optimización de datos con paginación y scroll infinito. Priorizo el código limpio y mantenible, siguiendo prácticas como el patrón MVC. Siempre listo para nuevos retos, mi objetivo es crear software eficiente y útil para los usuarios.',
    de: 'Hallo! 👋🏼 Ich bin Santi, ein Softwareentwickler mit Erfahrung in Frontend- und Backend-Technologien. Ich habe für Unternehmen wie Rocket Labs gearbeitet und mobile sowie Web-Funktionen mit React, Next.js und Firebase entwickelt. Meine Erfahrung umfasst KI-gestützte E-Commerce-Funktionen, robuste Authentifizierungssysteme und die Optimierung der Datendarstellung mit Paginierung und endlosem Scrollen. Ich lege Wert auf sauberen, wartbaren Code und befolge Best Practices wie das MVC-Muster. Ich freue mich auf neue Herausforderungen und darauf, Software zu entwickeln, die effizient ist und echten Mehrwert bietet.',
  },
  miscellanous: {
    title: { en: 'Miscellaneous', es: 'Curiosidades', de: 'Verschiedenes' },
    description: {
      en: 'Here are some additional details about me.',
      es: 'Aquí hay algunos detalles adicionales sobre mí.',
      de: 'Hier sind einige zusätzliche Details über mich.',
    },
  },
  birthday: {
    label: {
      en: 'Birthday',
      es: 'Cumpleaños',
      de: 'Geburtstag',
    },
    dateOfBirth: {
      es: '5 de Abril 🐏',
      en: 'April 5 🐏',
      de: '5. April 🐏',
    },
  },
  location: {
    title: { es: 'Ubicación', en: 'Location', de: 'Standort' },
    description: {
      es: 'Copenhague, Dinamarca 🇩🇰.',
      en: 'Copenhagen, Denmark 🇩🇰.',
      de: 'Kopenhagen, Dänemark 🇩🇰.',
    },
  },
  hobbies: {
    title: {
      es: 'Hobbies',
      en: 'Hobbies',
      de: 'Hobbys',
    },
    description: {
      es: 'Toco la guitarra 🎸 y juego tenis 🎾.',
      en: 'I play the guitar 🎸 and tennis 🎾.',
      de: 'Ich spiele Gitarre 🎸, Tennis 🎾.',
    },
  },
};

export default function About() {
  const { language } = React.useContext(LanguageContext);
  const [active, setActive] = React.useState('bio');

  return (
    <Container border background padding='p-0'>
      <Card className='w-full h-full gap-3 lg:gap-4 border-none flex flex-col lg:flex-row p-6 md:p-8 bg-transparent'>
        <div className='relative h-72 lg:min-w-[400px] lg:max-w-[400px] md:h-auto bg-gradient-to-br  from-slate-500 to-stone-800 dark:to-stone-900 dark:from-slate-800 border border-gray-500 rounded-full scale-[0.85] lg:-translate-y-5'>
          <Image
            src={Assets.Images.Santi3}
            width={300}
            height={400}
            alt='About Me'
            className='w-full h-full object-contain lg:object-cover scale-[1.28] lg:scale-[1.20]'
          />
        </div>
        <div className='grid gap-6 '>
          <Tabs
            defaultValue={active}
            value={active}
            onValueChange={setActive}
            className='gap-0 flex flex-col w-full rounded-sm'
          >
            <TabsList className='grid grid-cols-3 gap-2 w-full lg:min-w-[900px] rounded-sm dark:border-neutral-700 dark:bg-neutral-800'>
              <TabsTrigger
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
                value='bio'
              >
                Bio
              </TabsTrigger>
              <TabsTrigger
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
                value='media'
              >
                Media
              </TabsTrigger>
              <TabsTrigger
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
                value='certifications'
              >
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value='bio'
              className={`py-5 md:pb-0 w-full ring-0 outline-0 border-0 flex flex-col gap-10 ${
                active === 'bio' ? 'block animate-fade-right' : 'hidden'
              }`}
            >
              <div className='grid gap-4'>
                <div>
                  <h3 className='text-2xl font-semibold'>
                    {labels.title[language]}
                  </h3>
                  <p className='text-muted-foreground'>
                    {labels.description[language]}
                  </p>
                </div>
                <div>
                  <h4 className='text-2xl font-semibold mb-2'>Skills</h4>
                  <div className='flex flex-wrap gap-x-4 gap-y-2'>
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>NodeJS</Badge>
                    <Badge>React</Badge>
                    <Badge>NextJS</Badge>
                    <Badge>React Native</Badge>
                    <Badge>Redux</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Firebase</Badge>
                    <Badge>Android</Badge>
                    <Badge>iOS</Badge>
                    <Badge>Figma</Badge>
                    <Badge>Python</Badge>
                    <Badge>SQL</Badge>
                    <Badge>Express</Badge>
                    <Badge>Docker</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>English</Badge>
                    <Badge>Spanish</Badge>
                    <Badge>German</Badge>
                  </div>
                </div>
              </div>
              <div className='grid gap-4 mt-5'>
                <div>
                  <h3 className='text-2xl font-semibold'>
                    {labels.miscellanous.title[language]}
                  </h3>
                  <p className='text-muted-foreground'>
                    {labels.miscellanous.description[language]}
                  </p>
                </div>
                <div className='flex flex-col gap-2 md:flex-row justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-gradient-to-br shadow rounded-md flex items-center justify-center aspect-square w-12'>
                      <CalendarDaysIcon className='w-6 h-6' />
                    </div>
                    <div>
                      <div className='font-semibold'>
                        {labels.birthday.label[language]}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {labels.birthday.dateOfBirth[language]}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='bg-gradient-to-br shadow rounded-md flex items-center justify-center aspect-square w-12'>
                      <LocateIcon className='w-6 h-6' />
                    </div>
                    <div>
                      <div className='font-semibold'>
                        {labels.location.title[language]}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {labels.location.description[language]}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='bg-gradient-to-br shadow rounded-md flex items-center justify-center aspect-square w-12'>
                      <LayoutGrid className='w-6 h-6' />
                    </div>
                    <div>
                      <div className='font-semibold'>
                        {labels.miscellanous.title[language]}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {labels.hobbies.description[language]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value='media'
              className={`py-5 md:pb-0 w-full ring-0 outline-0 border-0 flex flex-col gap-5 ${
                active === 'media' ? 'block animate-fade-right' : 'hidden'
              }`}
            >
              <div className='grid gap-4'>
                <div>
                  <h3 className='text-2xl font-semibold'>Media</h3>
                  <p className='text-muted-foreground'>
                    Check out some of my recent photos and videos.
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <img
                    src='/placeholder.svg'
                    width={300}
                    height={200}
                    alt='Media 1'
                    className='rounded-lg'
                    style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                  />
                  <img
                    src='/placeholder.svg'
                    width={300}
                    height={200}
                    alt='Media 2'
                    className='rounded-lg'
                    style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                  />
                  <img
                    src='/placeholder.svg'
                    width={300}
                    height={200}
                    alt='Media 3'
                    className='rounded-lg'
                    style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                  />
                  <img
                    src='/placeholder.svg'
                    width={300}
                    height={200}
                    alt='Media 4'
                    className='rounded-lg'
                    style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value='certifications'
              className={`py-5 md:pb-0 w-full ring-0 outline-0 border-0 flex flex-col gap-5 ${
                active === 'certifications'
                  ? 'block animate-fade-right'
                  : 'hidden'
              }`}
            >
              <div className='grid gap-4'>
                <div>
                  <h3 className='text-2xl font-semibold'>Certifications</h3>
                  <p className='text-muted-foreground'>
                    Here are some of the certifications I`&apos;`ve earned.
                  </p>
                </div>
                <div className='grid gap-4'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-gradient-to-br shadow rounded-md flex items-center justify-center aspect-square w-12'>
                      <AwardIcon className='w-6 h-6' />
                    </div>
                    <div>
                      <div className='font-semibold'>
                        AWS Certified Solutions Architect - Associate
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Issued May 2022 · Expires May 2025
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='bg-gradient-to-br shadow rounded-md flex items-center justify-center aspect-square w-12'>
                      <AwardIcon className='w-6 h-6' />
                    </div>
                    <div>
                      <div className='font-semibold'>
                        Google Cloud Certified Professional Data Engineer
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Issued September 2021 · Expires September 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </Container>
  );
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
      <path d='M8 14h.01' />
      <path d='M12 14h.01' />
      <path d='M16 14h.01' />
      <path d='M8 18h.01' />
      <path d='M12 18h.01' />
      <path d='M16 18h.01' />
    </svg>
  );
}

function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='2' x2='5' y1='12' y2='12' />
      <line x1='19' x2='22' y1='12' y2='12' />
      <line x1='12' x2='12' y1='2' y2='5' />
      <line x1='12' x2='12' y1='19' y2='22' />
      <circle cx='12' cy='12' r='7' />
    </svg>
  );
}

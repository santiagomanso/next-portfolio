'use client';
import React from 'react';
import Image from 'next/image';
import { AwardIcon, LayoutGrid } from 'lucide-react';

import { Assets } from '@/assets';
import { ImageModal } from './image-modal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/container';
import { LanguageContext } from '@/context/LanguageContext';
import { certificatesData, labels, mediaData } from '../data';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

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
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white capitalize'
                value='bio'
              >
                {labels.tabTriggers.bio[language]}
              </TabsTrigger>
              <TabsTrigger
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white capitalize'
                value='certifications'
              >
                {labels.tabTriggers.certifications[language]}
              </TabsTrigger>
              <TabsTrigger
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white capitalize'
                value='media'
              >
                {labels.tabTriggers.media[language]}
              </TabsTrigger>
            </TabsList>

            {/* BIO */}
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

            {/* MEDIA */}
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
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full'>
                  {mediaData.map((item, index) => (
                    <ImageModal language={language} key={index} item={item} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* CERTIFICATIONS */}
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
                  <h3 className='text-2xl font-semibold capitalize'>
                    {labels.tabTriggers.certifications[language]}
                  </h3>
                  <p className='text-muted-foreground'>
                    {labels.certificationsDescription[language]}
                  </p>
                </div>
                <ul className='grid gap-4'>
                  {certificatesData.map((certificate, index) => (
                    <li
                      key={index}
                      className='flex items-center gap-4 cursor-pointer'
                      onClick={() => window.open(certificate.link)}
                    >
                      <div className='bg-gradient-to-br shadow rounded-md flex items-center justify-center aspect-square w-12'>
                        <AwardIcon className='w-6 h-6' />
                      </div>
                      <div>
                        <p className='font-semibold'>
                          {certificate.title[language]}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          {certificate.issuedAt[language]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
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

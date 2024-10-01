/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MPvsJ18pwJB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Assets } from '@/assets';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('bio');
  return (
    <Card className='w-full h-full gap-3 lg:gap-4 flex flex-col lg:flex-row p-6 md:p-8 bg-transparent'>
      <div className='relative h-72 lg:min-w-[400px] lg:max-w-[400px] md:h-auto bg-gradient-to-br  from-slate-500 to-stone-800 dark:to-stone-900 dark:from-slate-800 border border-gray-500'>
        <Image
          src={Assets.Images.Santi3}
          width={300}
          height={400}
          alt='About Me'
          className='w-full h-full object-cover rounded-lg'
          style={{ aspectRatio: '300/400', objectFit: 'cover' }}
        />
      </div>
      <div className='grid gap-6 '>
        <Tabs
          defaultValue='bio'
          className='gap-0 flex flex-col w-full'
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className='grid grid-cols-3 gap-2 w-full lg:min-w-[900px]'>
            <TabsTrigger value='bio'>Bio</TabsTrigger>
            <TabsTrigger value='media'>Media</TabsTrigger>
            <TabsTrigger value='certifications'>Certifications</TabsTrigger>
          </TabsList>
          <TabsContent
            value='bio'
            className=' m-0 w-full ring-0 outline-0 border-0 flex flex-col gap-5'
          >
            <div className='grid gap-4'>
              <div>
                <h3 className='text-2xl font-semibold'>About Me</h3>
                <p className='text-muted-foreground'>
                  Hi, I`&apos;`m John Doe, a passionate software engineer with a
                  strong background in full-stack development. I love building
                  innovative solutions that solve real-world problems.
                </p>
              </div>
              <div>
                <h4 className='text-lg font-semibold mb-2'>Skills</h4>
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
            <div className='grid gap-4'>
              <div>
                <h3 className='text-2xl font-semibold'>Miscellaneous</h3>
                <p className='text-muted-foreground'>
                  Here are some additional details about me.
                </p>
              </div>
              <div className='grid gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='bg-muted rounded-md flex items-center justify-center aspect-square w-12'>
                    <CalendarDaysIcon className='w-6 h-6' />
                  </div>
                  <div>
                    <div className='font-semibold'>Birthday</div>
                    <div className='text-sm text-muted-foreground'>
                      May 15, 1990
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-muted rounded-md flex items-center justify-center aspect-square w-12'>
                    <LocateIcon className='w-6 h-6' />
                  </div>
                  <div>
                    <div className='font-semibold'>Location</div>
                    <div className='text-sm text-muted-foreground'>
                      San Francisco, CA
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-muted rounded-md flex items-center justify-center aspect-square w-12'>
                    <LinkIcon className='w-6 h-6' />
                  </div>
                  <div>
                    <div className='font-semibold'>Website</div>
                    <div className='text-sm text-muted-foreground'>
                      <Link href='#' prefetch={false}>
                        johndoe.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value='media'
            className=' m-0 w-full ring-0 outline-0 border-0'
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
            className=' m-0 w-full ring-0 outline-0 border-0'
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
                  <div className='bg-muted rounded-md flex items-center justify-center aspect-square w-12'>
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
                  <div className='bg-muted rounded-md flex items-center justify-center aspect-square w-12'>
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
  );
}

function AwardIcon(props: any) {
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
      <path d='m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526' />
      <circle cx='12' cy='8' r='6' />
    </svg>
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

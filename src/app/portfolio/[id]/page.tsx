'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { labels } from '../_data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, Monitor, Smartphone, Tablet } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import { projectsArray } from '../_data/projects';
import { notFound, useRouter } from 'next/navigation';
import Container from '@/components/container';
import { MediaInterface } from '@/app/data';
import { ImageModal } from '@/components/image-modal';
import ImageGallery from './_components/image-gallery';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  const { id } = params;
  const { language } = useContext(LanguageContext);

  const project = projectsArray.find((p) => p.id.toString() === id);
  const router = useRouter();

  const handleGoBack = React.useCallback(() => {
    router.push('/portfolio');
  }, [router]);

  const handleClick = React.useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

  if (!project) {
    return notFound(); // Returns a 404 page if project not found
  }

  return (
    <Container background border padding='p-0'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl lg:flex lg:gap-2 lg:items-center lg:text-5xl font-bold mb-6 font-primary text-gray-800 dark:text-white tracking-wide'>
          <Button
            variant='ghost'
            className='bg-transparent p-0 m-0 hidden lg:block'
            onClick={handleGoBack}
          >
            <ChevronLeft className='h-10 w-10' />
          </Button>
          {project.name}
        </h1>

        <div className='grid md:grid-cols-2 gap-8 mb-0 '>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>
              {labels.tabTriggers.description[language]}
            </h2>
            <p className='text-muted-foreground mb-4'>
              {project.description[language]}
            </p>
            <h3 className='text-xl font-semibold mb-2'>
              {labels.keyFeatures[language]}:
            </h3>
            <ul className='list-disc list-inside text-muted-foreground mb-4 grid grid-cols-2'>
              {project.keyFeatures[language].map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className='flex gap-5'>
              <Button
                variant='secondary'
                className='border-gray-300/90   animate-ease-out text-center  dark:bg-neutral-800 text-gray-600 dark:text-gray-300 dark:hover:shadow-gray-700   border-[1px] dark:border-neutral-900 ease-in-out rounded-sm select-none hover:shadow-md hover:shadow-gray-500 shadow-md dark:hover:shadow-lg hover:-translate-y-[0.15rem] transition-all duration-150  lg:active:translate-y-4'
                onClick={() => handleClick(project.urlCode)}
              >
                {labels.buttons.sourceCode[language]}
              </Button>
              <Button
                onClick={() => handleClick(project.urlDemo)}
                className='border-gray-300/90   animate-ease-out bg-gradient-to-br text-gray-300 from-purple-600 to-violet-950  ease-in-out  rounded-sm select-none border-[1px] border-purple-950 shadow-md hover:shadow-lg hover:shadow-violet-500 dark:hover:shadow-violet-500 dark:hover:shadow-lg hover:-translate-y-[0.15rem] transition-all duration-150  lg:active:translate-y-3'
              >
                {labels.buttons.cta[language]}
              </Button>
            </div>
          </div>
          <div>
            <Tabs defaultValue='desktop' className='w-full'>
              <TabsList className='grid w-full grid-cols-3 mb-4 dark:border-neutral-700 dark:bg-neutral-800'>
                <TabsTrigger
                  value='desktop'
                  className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
                >
                  <Monitor className='mr-2 h-4 w-4' /> Desktop
                </TabsTrigger>
                <TabsTrigger
                  value='tablet'
                  className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
                >
                  <Tablet className='mr-2 h-4 w-4' /> Tablet
                </TabsTrigger>
                <TabsTrigger
                  value='mobile'
                  className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
                >
                  <Smartphone className='mr-2 h-4 w-4' /> Mobile
                </TabsTrigger>
              </TabsList>
              <TabsContent className='h-[450px] ' value='desktop'>
                <ImageModal
                  alt={project.mockup.desktop.alt}
                  description={project.mockup.desktop.description}
                  img={project.mockup.desktop.img}
                  language={language}
                />
              </TabsContent>
              <TabsContent className='h-[450px] ' value='tablet'>
                <ImageModal
                  alt={project.mockup.tablet.alt}
                  description={project.mockup.tablet.description}
                  img={project.mockup.tablet.img}
                  language={language}
                />
              </TabsContent>
              <TabsContent className='h-[450px] ' value='mobile'>
                <ImageModal
                  alt={project.mockup.mobile.alt}
                  description={project.mockup.mobile.description}
                  img={project.mockup.mobile.img}
                  language={language}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {project.screenshots && (
          <div className='mb-4'>
            <h2 className='text-2xl font-semibold mb-4'>
              {labels.imageGallery[language]}
            </h2>
            <ImageGallery
              images={[
                ...project.screenshots,
                ...(project.challenges ? project.challenges : []),
              ]}
            />
          </div>
        )}

        {project.video && (
          <div className='mb-12'>
            <h2 className='text-2xl font-semibold mb-4'>
              {labels.video[language]}
            </h2>
            <div className='aspect-w-16 aspect-h-9'>
              <iframe
                src={`https://www.youtube.com/embed/${project.video}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='rounded-lg shadow-xl shadow-stone-900 w-full h-[450px]'
              ></iframe>
            </div>
          </div>
        )}

        <section>
          <h2 className='text-2xl font-semibold mb-4'>Tech Stack</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {project.stack.map((tech, index) => (
              <Card
                key={tech.name}
                className={`${
                  index % 2 === 0 ? 'bg-gradient-to-bl' : 'bg-gradient-to-br'
                } border-0 shadow-md dark:shadow-stone-900 shadow-gray-300`}
              >
                <CardContent className='p-4'>
                  <h3 className='font-semibold mb-1'>{tech.name}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {tech.description[language]}{' '}
                    {/* `language` would be a variable storing the current language code */}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

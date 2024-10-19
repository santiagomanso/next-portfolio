import { Button } from '@/components/ui/button';
import { labels } from '../_data';
import { Project } from '../_data/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  language: string;
  project: Project;
}

export default function SingleProject({ language, project }: Props) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl lg:text-5xl font-bold mb-6 font-primary text-gray-800 dark:text-white tracking-wide'>
        rich simulator
      </h1>

      <div className='grid md:grid-cols-2 gap-8 mb-12'>
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
          <ul className='list-disc list-inside text-muted-foreground mb-4'>
            {project.keyFeatures[language].map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className='flex gap-5'>
            <Button variant='secondary' className=''>
              {labels.buttons.sourceCode[language]}
            </Button>
            <Button>{labels.buttons.cta[language]}</Button>
          </div>
        </div>
        <div>
          <Tabs defaultValue='desktop' className='w-full'>
            <TabsList className='grid w-full grid-cols-3 mb-4'>
              <TabsTrigger value='desktop'>
                <Monitor className='mr-2 h-4 w-4' /> Desktop
              </TabsTrigger>
              <TabsTrigger value='tablet'>
                <Tablet className='mr-2 h-4 w-4' /> Tablet
              </TabsTrigger>
              <TabsTrigger value='mobile'>
                <Smartphone className='mr-2 h-4 w-4' /> Mobile
              </TabsTrigger>
            </TabsList>
            <TabsContent className='h-[450px] ' value='desktop'>
              <Image
                src='https://g-mqbvoufpguu.vusercontent.net/placeholder.svg'
                alt='Desktop Screenshot'
                height={300}
                width={300}
                className='rounded-lg shadow-lg max-h-[400px] h-full w-full'
              />
            </TabsContent>
            <TabsContent className='h-[450px] ' value='tablet'>
              <Image
                src='https://g-mqbvoufpguu.vusercontent.net/placeholder.svg'
                alt='Tablet Screenshot'
                height={300}
                width={300}
                className='rounded-lg shadow-lg max-h-[400px] h-full w-full'
              />
            </TabsContent>
            <TabsContent className='h-[450px] ' value='mobile'>
              <Image
                src='https://g-mqbvoufpguu.vusercontent.net/placeholder.svg'
                alt='Mobile Screenshot'
                height={300}
                width={300}
                className='rounded-lg shadow-lg mx-auto max-h-[400px] h-full w-full'
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>
          Challenges and Solutions
        </h2>
        <Card>
          <CardContent className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>
              Challenge 1: Real-time Synchronization
            </h3>
            <p className='text-muted-foreground mb-4'>
              Implementing real-time updates across multiple clients proved
              challenging due to race conditions and data consistency issues.
            </p>
            <h4 className='font-semibold mb-2'>Solution:</h4>
            <p className='text-muted-foreground mb-4'>
              We implemented a robust WebSocket architecture with a custom
              conflict resolution algorithm. This ensured that all clients
              remained in sync while providing a smooth user experience, even
              under high concurrency scenarios.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>Project Demo Video</h2>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='rounded-lg shadow-lg'
          ></iframe>
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-semibold mb-4'>Tech Stack</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {[
            { name: 'React', description: 'Frontend framework' },
            { name: 'Node.js', description: 'Backend runtime' },
            { name: 'MongoDB', description: 'Database' },
            { name: 'WebSocket', description: 'Real-time communication' },
            { name: 'Docker', description: 'Containerization' },
            { name: 'Redux', description: 'State management' },
            { name: 'Express', description: 'Backend framework' },
            { name: 'Jest', description: 'Testing framework' },
          ].map((tech) => (
            <Card key={tech.name}>
              <CardContent className='p-4'>
                <h3 className='font-semibold mb-1'>{tech.name}</h3>
                <p className='text-sm text-muted-foreground'>
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

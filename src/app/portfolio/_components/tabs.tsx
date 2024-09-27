'use client';

import { TabsList, Tabs, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import { useContext } from 'react';

type Labels = {
  description: {
    [key: string]: string;
    en: string;
    es: string;
    de: string;
  };
  developmentChallenges: {
    [key: string]: string;
    en: string;
    es: string;
    de: string;
  };
  screenshots: {
    [key: string]: string;
    en: string;
    es: string;
    de: string;
  };
  video: {
    [key: string]: string;
    en: string;
    es: string;
    de: string;
  };
};

const labels: Labels = {
  description: {
    en: 'description',
    es: 'descripción',
    de: 'Beschreibung',
  },
  developmentChallenges: {
    en: 'Development Challenges',
    es: 'Desafíos de desarrollo',
    de: 'Entwicklungsherausforderungen',
  },
  screenshots: {
    en: 'Screenshots',
    es: 'Capturas de pantalla',
    de: 'Screenshots',
  },
  video: {
    en: 'Video',
    es: 'Vídeo',
    de: 'Video',
  },
};

type Props = {
  description: {
    [key: string]: string;
    en: string;
    es: string;
    de: string;
  };
  challenges?: string[];
  screenshots: string[];
  video?: string;
};

export default function PortfolioTabs({
  description,
  challenges,
  screenshots,
  video,
}: Props) {
  const { language } = useContext(LanguageContext);
  return (
    <Tabs defaultValue='description' className='bg-red-500 max-h-full'>
      <TabsList>
        <TabsTrigger value='description'>
          {labels.description[language]}
        </TabsTrigger>
        <TabsTrigger value='challenges'>
          {labels.developmentChallenges[language]}
        </TabsTrigger>
        <TabsTrigger value='screenshots'>
          {labels.screenshots[language]}
        </TabsTrigger>
        <TabsTrigger value='video'>{labels.video[language]}</TabsTrigger>
      </TabsList>
      <TabsContent value='description'>{description[language]}</TabsContent>
      <TabsContent value='challenges' className='h-full overflow-auto'>
        {challenges?.map((challenge, index) => (
          <Image
            alt='challenge'
            height={100}
            width={200}
            className='h-5/6 w-full'
            src={challenge}
            key={index}
          />
        ))}
      </TabsContent>
      <TabsContent value='screenshots'>{screenshots}</TabsContent>
      <TabsContent value='video'>{video}</TabsContent>
    </Tabs>
  );
}

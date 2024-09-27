import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { LanguageContext } from '@/context/LanguageContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Youtube } from 'lucide-react';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

type LabelType = {
  trigger: { [key: string]: string };
  title: { [key: string]: string };
  description: { [key: string]: string };
  close: { [key: string]: string };
};

const labels: LabelType = {
  trigger: {
    es: 'Como<br />Programo?',
    de: 'Wie ich<br />code?',
    en: 'How I code?',
  },
  title: {
    es: 'Mi ultimo video',
    de: 'Mein letztes Video',
    en: 'My lastest video',
  },
  description: {
    es: 'Aqui puedes como programo.',
    de: 'Hier kannst du sehen, wie ich code.',
    en: 'Here you can see how I code.',
  },
  close: {
    es: 'Cerrar',
    de: 'Schließen',
    en: 'Close',
  },
};

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  // access to player in all event handlers via event.target
  event.target.playVideo();
};

const opts: YouTubeProps['opts'] = {
  height: '380',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export default function HowICode() {
  const { language } = React.useContext(LanguageContext);
  const isSmall = useMediaQuery('(max-width: 375px)');

  return (
    <Drawer>
      <DrawerTrigger className='text-2xl text-gray-700 dark:text-white font-secondary tracking-wide w-full h-full flex items-center justify-center flex-col gap-0 text-center'>
        <span dangerouslySetInnerHTML={{ __html: labels.trigger[language] }} />
        <Youtube className='p-0 m-0 h-7 w-7 fill-white dark:fill-transparent stroke-sky-900 dark:stroke-gray-300' />
      </DrawerTrigger>
      <DrawerContent
        className={`bg-gray-100 dark:border-neutral-700 dark:bg-neutral-950
           `}
      >
        <DrawerHeader>
          <DrawerTitle>{labels.title[language]}</DrawerTitle>
          <DrawerDescription>{labels.description[language]}</DrawerDescription>
        </DrawerHeader>
        <YouTube videoId='6fKXd3KspQY' opts={opts} onReady={onPlayerReady} />
        <DrawerFooter className={`${isSmall ? 'p-3' : 'p-4'}`}>
          <DrawerClose asChild>
            <Button
              variant='outline'
              className='bg-gradient-to-br border-gray-500/30  from-neutral-300 to-neutral-300 dark:from-neutral-800 dark:to-stone-950 dark:border-stone-800'
            >
              {labels.close[language]}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

import * as React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import { Label } from '@/components/ui/label';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { LanguageContext } from '@/context/LanguageContext';
import { Assets } from '@/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type LabelType = {
  trigger: { [key: string]: string };
  title: { [key: string]: string };
  description: { [key: string]: string };
  close: { [key: string]: string };
};

const labels: LabelType = {
  close: {
    en: 'Close',
    es: 'Cerrar',
    de: 'Schließen',
  },
  description: {
    en: 'As a web developer, I have expertise in a wide range of technologies and tools.',
    es: 'Como desarrollador web, tengo experiencia en una amplia gama de tecnologías y herramientas.',
    de: 'Als Webentwickler habe ich Erfahrung in einer Vielzahl von Technologien und Tools.',
  },

  title: {
    en: 'Skills',
    es: 'Skills',
    de: 'Skills',
  },
  trigger: {
    en: 'Skills',
    es: 'Skills',
    de: 'Skills',
  },
};

export default function Skills() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { language } = React.useContext(LanguageContext);
  const isSmall = useMediaQuery('(max-width: 375px)');

  const handleClick = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className='transition-none w-full h-full'>
        <Button
          variant='ghost'
          className='text-2xl tracking-wider text-gray-700 dark:text-white'
        >
          {labels.trigger[language]}
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className={`bg-gray-100 dark:border-neutral-700 dark:bg-neutral-950`}
      >
        <DrawerHeader className='text-left'>
          <DrawerTitle>{labels.trigger[language]}</DrawerTitle>
          <DrawerDescription>{labels.description[language]}</DrawerDescription>
        </DrawerHeader>
        <div className='px-4'>
          <SkillSet />
        </div>
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

const SkillSet = () => (
  <section className='grid grid-cols-3 gap-x-3 gap-y-2 text-[12px]'>
    {/* HTML */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Html
        alt='HTML'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      HTML
    </span>

    {/* CSS */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Css
        alt='CSS'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      CSS
    </span>

    {/* JavaScript */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.JavaScript
        alt='JavaScript'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      JavaScript
    </span>

    {/* TypeScript */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.TypeScript
        alt='TypeScript'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      TypeScript
    </span>

    {/* NodeJS */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.NodeJs
        alt='NodeJS'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      NodeJS
    </span>

    {/* React */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.React
        alt='React'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      React
    </span>

    {/* NextJS */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.NextJs
        alt='NextJS'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      NextJS
    </span>

    {/* React Native */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.ReactNative
        alt='React Native'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      <span className='truncate'>React Native</span>
    </span>

    {/* Redux */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Redux
        alt='Redux'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Redux
    </span>

    {/* Tailwind CSS */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Tailwind
        alt='Tailwind CSS'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      <span className='truncate'>Tailwind CSS</span>
    </span>

    {/* Git */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Git
        alt='Git'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Git
    </span>

    {/* GitHub */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.GitHub
        alt='GitHub'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      GitHub
    </span>

    {/* Firebase */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Firebase
        alt='Firebase'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Firebase
    </span>

    {/* Android */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Android
        alt='Android'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Android
    </span>

    {/* iOS */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Ios
        alt='iOS'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      iOS
    </span>

    {/* Figma */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Figma
        alt='Figma'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Figma
    </span>

    {/* Python */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Python
        alt='Python'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Python
    </span>

    {/* SQL */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Sql
        alt='SQL'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      SQL
    </span>

    {/* Express */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Express
        alt='Express'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Express
    </span>

    {/* Docker */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Docker
        alt='Docker'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Docker
    </span>

    {/* MongoDB */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.MongoDB
        alt='MongoDB'
        className='h-4 w-4 min-h-[16px] min-w-[16px]  sm:h-6 sm:w-6'
      />
      MongoDB
    </span>

    {/* English */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Usa
        alt='English'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      English
    </span>

    {/* Spanish */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Spain
        alt='Spanish'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      Spanish
    </span>

    {/* German */}
    <span className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-2 py-1 font-medium dark:bg-neutral-800'>
      <Assets.Icons.Germany
        alt='German'
        className='h-4 w-4 min-h-[16px] min-w-[16px] sm:h-6 sm:w-6'
      />
      German
    </span>
  </section>
);

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { JobType } from '../data/jobs';
import { Assets } from '@/assets';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
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
import { Button } from '@/components/ui/button';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  state: JobType;
  language: string;
};
type LabelsTypes = {
  duration: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  months: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  jobType: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  technologiesTools: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  responsabilities: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  whatILearned: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  close: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  currentDate: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  dates: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
};

const labels: LabelsTypes = {
  duration: {
    en: 'Duration',
    es: 'Duración',
    de: 'Dauer',
  },
  months: {
    en: 'months',
    es: 'meses',
    de: 'Monate',
  },
  jobType: {
    en: 'Job Type',
    es: 'Tipo de Trabajo',
    de: 'Jobtyp',
  },
  technologiesTools: {
    en: 'Technologies & Tools',
    es: 'Tecnologías y Herramientas',
    de: 'Technologien & Werkzeuge',
  },
  responsabilities: {
    en: 'Responsabilities',
    es: 'Responsabilidades',
    de: 'Verantwortlichkeiten',
  },
  whatILearned: {
    en: "What I've Learned",
    es: 'Que Aprendí',
    de: 'Was ich gelernt habe',
  },
  close: {
    en: 'Close',
    es: 'Cerrar',
    de: 'Schließen',
  },
  currentDate: {
    en: 'Current Date',
    es: 'Fecha Actual',
    de: 'Aktuelles Datum',
  },
  dates: {
    en: 'Dates',
    es: 'Fechas',
    de: 'Daten',
  },
};

export default function JobModal({ open, setOpen, state, language }: Props) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isSmall = useMediaQuery('(max-width: 375px)');
  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='dark:bg-neutral-900 w-full h-full md:h-auto max-w-2xl overflow-auto'>
        <DialogHeader>
          <div className='flex items-center gap-4'>
            <Image
              src={state.picture}
              width={48}
              height={48}
              alt={state.company}
              className='rounded-full p-1 bg-neutral-600 h-20 w-20'
            />
            <div className='grid gap-1'>
              <DialogTitle>{state.position[language]}</DialogTitle>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                @{state.company}
              </p>
            </div>
          </div>
        </DialogHeader>
        <div className='grid gap-6 '>
          <Tabs defaultValue='responsabilities' className='text-justify '>
            <TabsList className=' rounded-sm dark:border-neutral-700 dark:bg-neutral-800 '>
              <TabsTrigger
                value='responsabilities'
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
              >
                {labels.responsabilities[language]}
              </TabsTrigger>
              <TabsTrigger
                value="What I've Learned"
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
              >
                {labels.whatILearned[language]}
              </TabsTrigger>
            </TabsList>
            <TabsContent value='responsabilities'>
              <ul className='list-disc'>
                {state.responsabilities[language].map((item, index) => {
                  return (
                    <li className='text-sm dark:text-gray-300' key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent value="What I've Learned">
              <ul className='list-disc'>
                {state.whatILearned[language].map((item, index) => {
                  return (
                    <li className='text-sm dark:text-gray-300' key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </Tabs>

          <div className='grid gap-2 grid-cols-3 '>
            <article className='flex flex-col  '>
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                {labels.dates[language]}
              </p>
              <p className='text-base'>{`${state.startDate} - ${
                state.endDate ? state.endDate : labels.currentDate[language]
              }`}</p>
            </article>
            <article className='flex flex-col  items-center'>
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                {labels.duration[language]}
              </p>
              <p className='text-base'>{`${state.duration} ${labels.months[language]}`}</p>
            </article>
            <article className='  self-end flex flex-col items-end'>
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                {labels.jobType[language]}
              </p>
              <p className='text-base'>{state.jobType}</p>
            </article>
          </div>
          <div className='grid gap-2'>
            <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              {labels.technologiesTools[language]}
            </p>
            <div className='flex flex-wrap gap-2'>
              {state.skills.map((item) => {
                return item;
              })}
            </div>
          </div>
        </div>
        <DialogFooter>
          <button
            className='dark:bg-neutral-800 bg-slate-100 border-slate-300 border transition-all duration-150 ease-in-out active:translate-y-3 dark:border-neutral-950 px-3 py-1 sm:px-5 sm:py-2 rounded'
            onClick={() => setOpen(false)}
          >
            {labels.close[language]}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent
        className={`bg-gray-100 dark:border-neutral-700 dark:bg-neutral-950
           ${isSmall ? 'h-full ' : 'h-full'} `}
      >
        <DrawerHeader className='text-left'>
          <div className='flex items-center gap-4'>
            <Image
              src={state.picture}
              width={48}
              height={48}
              alt={state.company}
              className='rounded-full p-1 bg-neutral-600 h-20 w-20'
            />
            <div className='grid gap-1'>
              <DrawerTitle>{state.position[language]}</DrawerTitle>
              <DrawerDescription className='text-sm text-gray-500 dark:text-gray-400'>
                @{state.company}
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        <div
          className={`grid ${isSmall ? 'gap-2' : 'gap-6'} px-4 overflow-auto`}
        >
          <Tabs defaultValue='responsabilities' className='text-justify '>
            <TabsList className=' rounded-sm dark:border-neutral-700 dark:bg-neutral-800 '>
              <TabsTrigger
                value='responsabilities'
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
              >
                {labels.responsabilities[language]}
              </TabsTrigger>
              <TabsTrigger
                value="What I've Learned"
                className='data-[state=active]:dark:bg-neutral-700 data-[state=active]:text-gray-800 data-[state=active]:dark:text-white'
              >
                {labels.whatILearned[language]}
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value='responsabilities'
              className='h-[300px] overflow-auto animate-fade'
            >
              <ul>
                {state.responsabilities[language].map((item, index) => {
                  return (
                    <li className='text-sm dark:text-gray-300 py-1' key={index}>
                      - {item}
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent
              value="What I've Learned"
              className='h-[300px] overflow-auto animate-fade'
            >
              <ul>
                {state.whatILearned[language].map((item, index) => {
                  return (
                    <li className='text-sm dark:text-gray-300 py-1' key={index}>
                      - {item}
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </Tabs>

          <div className='grid gap-2 grid-cols-3'>
            <article className='flex flex-col col-span-2'>
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                {labels.duration[language]}
              </p>
              <p className='text-base'>{`${state.startDate} - ${
                state.endDate ? state.endDate : labels.currentDate[language]
              }`}</p>
              <p className='text-base'>{`${state.duration} ${labels.months[language]}`}</p>
            </article>
            <article className='self-end flex flex-col items-end'>
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                {labels.jobType[language]}
              </p>
              <p className='text-base whitespace-break-spaces text-end'>
                {state.jobType}
              </p>
            </article>
          </div>
          <div className='grid gap-2'>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              {labels.technologiesTools[language]}
            </div>
            <div className='flex flex-wrap gap-2'>
              {state.skills.map((item) => item)}
            </div>
          </div>
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

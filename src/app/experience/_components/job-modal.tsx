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
};

const labels: LabelsTypes = {
  duration: {
    en: 'Duration',
    es: 'Duración',
    de: 'Dauer',
  },
  months: {
    en: 'months)',
    es: 'meses)',
    de: 'Monate)',
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
};

export default function JobModal({ open, setOpen, state, language }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='dark:bg-neutral-900 w-full h-full md:h-auto max-w-2xl overflow-auto'>
        <DialogHeader>
          <div className='flex items-center gap-4'>
            <img
              src={state.picture}
              width={48}
              height={48}
              alt='GetRegulars Logo'
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

          <div className='grid gap-2 grid-cols-2 '>
            <article className='flex flex-col'>
              <div className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                {labels.duration[language]}
              </div>
              <div className='text-base'>{`${state.duration} ${labels.months[language]}`}</div>
            </article>
            <article className='self-end flex flex-col items-end'>
              <div className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                {labels.jobType[language]}
              </div>
              <div className='text-base'>{state.jobType}</div>
            </article>
          </div>
          <div className='grid gap-2'>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              {labels.technologiesTools[language]}
            </div>
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
  );
}

{
  /* <DialogContent className="sm:max-w-[650px]">

        
      </DialogContent> */
}

'use client';
import React, { useContext } from 'react';
import Container from '@/components/container';
import { Badge } from '@/components/ui/badge';

import JobModal from './_components/job-modal';
import { jobs, JobType } from './data/jobs';
import { LanguageContext } from '@/context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const initialState = {
  id: 0,
  picture: '',
  responsabilities: {
    en: [],
    es: [],
    de: [],
  },
  skills: [],
  link: '',
  position: {
    en: '',
    es: '',
    de: '',
  },
  company: '',
  startDate: '',
  endDate: '',
  duration: '',
  jobType: '',
  whatILearned: {
    en: [],
    es: [],
    de: [],
  },
};

type LabelType = {
  actual: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
};

const label: LabelType = {
  actual: {
    en: 'current',
    es: 'actual',
    de: 'aktuell',
  },
};

export default function Page() {
  const { language } = useContext(LanguageContext);
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState<JobType>(initialState);

  const handleChangeJob = (job: JobType) => {
    setState(job);
    setOpen(true);
    // Push a new entry into the history stack.
    // This ensures that the "back" gesture has a state to pop to,
    // which we intercept to close the modal instead.
    window.history.pushState({ modalOpen: true }, '');
  };

  return (
    <Container border background justifyCenter>
      <JobModal
        language={language}
        open={open}
        setOpen={setOpen}
        state={state}
      />
      <section className='flex flex-col lg:flex-row w-full justify-center gap-5 items-center font-primary'>
        <button
          onClick={() => handleChangeJob(jobs[0])}
          className='order-5 lg:order-1 flex flex-col cursor-pointer items-center gap-2 relative'
        >
          <div className='p-1 bg-gray-500 dark:bg-slate-600 rounded-full'>
            <Image
              height={100}
              width={100}
              src={jobs[0].picture}
              alt=''
              className='rounded-full h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32'
            />
          </div>
          <p className='lg:absolute lg:-bottom-12 bg-gray-300/40  border-slate-400/40 text-gray-700 dark:bg-gradient-to-b dark:from-neutral-800 dark:text-gray-200 dark:to-neutral-900 px-5 py-2 rounded border-[0.10rem] dark:border-neutral-900/40'>
            {jobs[0].company}
          </p>
        </button>
        <div className='order-3 lg:w-1/4 h-10 lg:h-0 border-[1px] border-slate-400 relative bg-red-500'>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-slate-400 absolute -top-[0.45rem] lg:-right-1 -rotate-90 lg:rotate-0 -left-[0.30rem] lg:left-auto'
          />
        </div>
        <button
          onClick={() => handleChangeJob(jobs[1])}
          className='order-3 flex flex-col cursor-pointer items-center gap-2 relative'
        >
          <div className='p-1 bg-gray-500 dark:bg-slate-600 rounded-full'>
            <Image
              height={100}
              width={100}
              src={jobs[1].picture}
              alt=''
              className='rounded-full h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32'
            />
          </div>
          <p className='lg:absolute lg:-bottom-12 bg-gray-300/40  border-slate-400/40 text-gray-700 dark:bg-gradient-to-b dark:from-neutral-800 dark:text-gray-200 dark:to-neutral-900 px-5 py-2 rounded border-[0.10rem] dark:border-neutral-900/40'>
            {jobs[1].company}
          </p>
        </button>
        <div className='order-3 lg:w-1/4 h-10 lg:h-0 border-[1px] border-slate-400 relative bg-red-500'>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-slate-400 absolute -top-[0.45rem] lg:-right-1 -rotate-90 lg:rotate-0 -left-[0.30rem] lg:left-auto'
          />
        </div>
        <button
          onClick={() => handleChangeJob(jobs[2])}
          className='order-1 lg:order-5 flex flex-col relative cursor-pointer justify-center items-center gap-2'
        >
          <div className='p-1 bg-gray-500 dark:bg-slate-600 rounded-full relative'>
            <Image
              height={100}
              width={100}
              src={jobs[2].picture}
              alt=''
              className='rounded-full h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32'
            />
            <Badge className='absolute bg-purple-700 dark:text-white font-thin tracking-wider font-secondary top-1/2 -translate-y-1/2 lg:-top-4 -right-16 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 hover:bg-purple-700'>
              {label.actual[language]}
            </Badge>
          </div>
          <p className='lg:absolute lg:-bottom-12 bg-gray-300/40  border-slate-400/40 text-gray-700 dark:bg-gradient-to-b dark:from-neutral-800 dark:text-gray-200 dark:to-neutral-900 px-5 py-2 rounded border-[0.10rem] dark:border-neutral-900/40 transition-none'>
            {jobs[2].company}
          </p>
        </button>
      </section>
    </Container>
  );
}

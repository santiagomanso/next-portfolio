import Link from 'next/link';
import ResponsiveLanguageSwitcher from './components/responsive-language-switcher';
import YearsOfExperience from './components/experience-years';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import MyCv from './components/my-curriculum';
import { SkillsSection } from './components/skills';
import BentoTypewritter from './components/header-typewritter';
import ExperienceLink from './components/portfolio-link';
import BentoThemeSwitcher from './components/bento-theme-switcher';

export default function BentoGrid() {
  return (
    <section className='lg:hidden h-full w-full grid grid-cols-3 grid-rows-12 gap-2 overflow-auto font-primary sm:max-w-2xl'>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  col-span-3 row-span-2 flex flex-col justify-center'>
        <BentoTypewritter />
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg '>
        <ResponsiveLanguageSwitcher />
      </article>
      <Link
        href='/experience'
        className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  col-span-2'
      >
        <ExperienceLink />
      </Link>

      <SkillsSection />

      <BentoThemeSwitcher />

      <a
        href='https://www.linkedin.com/in/santimanso/'
        target='_blank'
        rel='noreferrer'
        className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg relative z-0'
      >
        <p className='hidden'>linkedin</p>
        <p className='hidden'>linked in</p>
        <p className='hidden'>linked-in</p>
        <FontAwesomeIcon
          icon={faLinkedin}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-700 dark:text-white'
        />
      </a>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg col-span-2'>
        <MyCv />
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg   row-span-2'>
        <YearsOfExperience />
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg   '>
        10
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  row-span-2'>
        11
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  '>
        12
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  '>
        12
      </article>
    </section>
  );
}

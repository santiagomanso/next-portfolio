import Link from 'next/link';

import ThemeSwitcher from '../../components/theme-switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import ResponsiveHeaderTypewritter from './header-typewritter';
import ResponsiveLanguageSwitcher from './responsive-language-switcher';
import SkillsSection from './skills';
import MyCv from './my-curriculum';
import BentoLink from './bento-link';
import Skills from './skills';
import ResponsiveModal from './responsive-modal';

export default function ResponsiveIntroHome() {
  const [isClickedTheme, setIsClickedTheme] = useState(false);

  return (
    <section className='lg:hidden h-full w-full grid grid-cols-3 grid-rows-12 gap-2 overflow-auto font-primary sm:max-w-2xl'>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md  col-span-3 row-span-2 flex flex-col justify-center'>
        <ResponsiveHeaderTypewritter />
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md '>
        <ResponsiveLanguageSwitcher />
      </article>
      <BentoLink link='experience' />
      <ResponsiveModal
        title='skills'
        subtitle='technologies & tools im comfortable with'
      />
      <article
        onClick={() => setIsClickedTheme(!isClickedTheme)}
        className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md  h-full justify-center items-center flex'
      >
        <ThemeSwitcher isResponsive isClicked={isClickedTheme} />
      </article>
      <a
        href='https://www.linkedin.com/in/santimanso/'
        target='_blank'
        rel='noreferrer'
        className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md relative z-0'
      >
        <p className='hidden'>linkedin</p>
        <p className='hidden'>linked in</p>
        <p className='hidden'>linked-in</p>
        <FontAwesomeIcon
          icon={faLinkedin}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-700 dark:text-white'
        />
      </a>
      <BentoLink link='portfolio' />
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md   row-span-2'>
        <MyCv />
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md   '>
        10
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md  row-span-2'>
        11
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md  '>
        12
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-md  '>
        12
      </article>
    </section>
  );
}

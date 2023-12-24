import Link from 'next/link'
import ResponsiveHeaderTypewritter from './components/header-typewritter'
import ResponsiveLanguageSwitcher from './components/responsive-language-switcher'
import PortfolioLink from './components/portfolio-link'
import YearsOfExperience from './components/experience-years'
import ThemeSwitcher from '../theme-switcher'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillsSection from './components/skills'
import { useState } from 'react'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import MyCv from './components/my-curriculum'

export default function ResponsiveIntroHome() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <section className='lg:hidden h-full w-full grid grid-cols-3 grid-rows-12 gap-2 overflow-auto font-primary sm:max-w-2xl'>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  col-span-3 row-span-2 flex flex-col justify-center'>
        <ResponsiveHeaderTypewritter />
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg '>
        <ResponsiveLanguageSwitcher />
      </article>
      <Link
        href='/portfolio'
        className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  col-span-2'
      >
        <PortfolioLink />
      </Link>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  h-full overflow-hidden row-span-1'>
        <SkillsSection />
      </article>
      <article
        onClick={() => setIsClicked(!isClicked)}
        className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-purple-400/60 rounded-lg  h-full justify-center items-center flex'
      >
        <ThemeSwitcher isResponsive isClicked={isClicked} />
      </article>
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
  )
}

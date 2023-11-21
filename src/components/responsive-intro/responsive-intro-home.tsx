import Link from 'next/link'
import LanguageSwitcher from '../language-switcher'
import ResponsiveHeaderTypewritter from './components/header-typewritter'
import MyExperience from './components/portfolio-link'
import ResponsiveLanguageSwitcher from './components/responsive-language-switcher'
import PortfolioLink from './components/portfolio-link'
import YearsOfExperience from './components/experience-years'
import ThemeSwitcher from '../theme-switcher'

export default function ResponsiveIntroHome() {
  return (
    <section className='lg:hidden h-full w-full grid grid-cols-3 grid-rows-12 gap-2 overflow-auto'>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 col-span-3 row-span-3 flex flex-col justify-center'>
        <ResponsiveHeaderTypewritter />
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20'>
        <ResponsiveLanguageSwitcher />
      </article>
      <Link
        href='/portfolio'
        className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 col-span-2'
      >
        <PortfolioLink />
      </Link>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 '>
        4
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 h-full justify-center items-center flex'>
        <ThemeSwitcher isResponsive />
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20  row-span-2'>
        <YearsOfExperience />
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 0  col-span-2'>
        7
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20  row-span-2'>
        9
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20  '>
        10
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 '>
        11
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 '>
        12
      </article>
      <article className='border border-purple-400/30 rounded-lg bg-gradient-to-br from-slate-100 to-gray-400 dark:from-purple-500/20 '>
        12
      </article>
    </section>
  )
}

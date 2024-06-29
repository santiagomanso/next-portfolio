import {
  CurriculumLink,
  ExperienceLink,
  LanguageSwitcher,
  LinkedInLink,
  PortfolioLink,
  Skills,
  ThemeSwitcher,
  TypeWritter,
} from './components';

export default function ResponsiveHome() {
  return (
    <section className='lg:hidden h-full w-full grid grid-cols-3 grid-rows-12 gap-2 overflow-auto font-primary sm:max-w-2xl'>
      <TypeWritter />

      <LanguageSwitcher />

      <ExperienceLink />

      <Skills />

      <ThemeSwitcher />

      <LinkedInLink />

      <CurriculumLink />

      <PortfolioLink />

      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg   '>
        10
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  row-span-2'>
        11
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  '>
        12
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  '>
        12
      </article>
    </section>
  );
}

import Image from 'next/image';
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
import { Assets } from '@/assets';
import { MapPin, Youtube } from 'lucide-react';
import HowICode from './components/bento-how-i-code';
import AlsoLearning from './components/bento-also-learning';

export default function ResponsiveHome() {
  return (
    <section className='lg:hidden h-full w-full grid grid-cols-3 grid-rows-12 gap-2 overflow-auto font-primary sm:max-w-2xl'>
      <article className='border-[1px] relative dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  col-span-3 row-span-2 flex flex-col justify-center overflow-hidden'>
        <TypeWritter />
        <Image
          alt='santi'
          src={Assets.Images.Santi2}
          className='absolute -bottom-5 drop-shadow-[0_35px_35px_rgba(107,114,128,0.7)] dark:drop-shadow-[0_35px_35px_rgba(229,231,235,0.3)] right-0 w-1/5 z-0'
        />
      </article>

      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg '>
        <LanguageSwitcher />
      </article>

      <article className='border-[1px] dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  col-span-2'>
        <ExperienceLink />
      </article>

      <article className='border-[1px] flex items-center justify-center  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  h-full overflow-hidden row-span-1'>
        <Skills />
      </article>

      <ThemeSwitcher />

      <LinkedInLink />

      <CurriculumLink />

      <PortfolioLink />

      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  row-span-2'>
        <AlsoLearning />
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 rounded-lg  '>
        <a
          href='https://www.google.com/maps/place/Pac%C3%ADfico,+Retiro,+Madrid,+Spain/@40.4034133,-3.6845417,16z/data=!3m1!4b1!4m6!3m5!1s0xd42261762bac5b3:0xf037d868b9914bee!8m2!3d40.4041447!4d-3.6779406!16s%2Fg%2F1218lnm1?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D'
          target='_blank'
          className=' w-full h-full flex items-center justify-center flex-col gap-0'
        >
          <p className='text-2xl text-gray-700 dark:text-white tracking-wide'>
            MADRID
          </p>
          <MapPin className='p-0 m-0 fill-white dark:fill-transparent stroke-sky-900 dark:stroke-gray-300' />
        </a>
      </article>
      <article className='border-[1px]  dark:bg-transparent border-sky-900 dark:border-gray-400/60 col-span-2 rounded-lg '>
        <HowICode />
      </article>
    </section>
  );
}

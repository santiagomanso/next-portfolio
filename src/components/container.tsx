'use client';
import { Assets } from '@/assets';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  border?: boolean;
  gap?: boolean;
  justifyCenter?: boolean;
  padding?: string;
  background?: boolean;
  withImage?: boolean;
}

const Container = ({
  children,
  border,
  gap,
  justifyCenter,
  padding,
  background,
  withImage = false,
}: Props) => {
  return (
    <section
      className={`animate-fade animate-duration-400 animate-ease-out  lg:rounded-sm  transition-colors ease-in-out duration-500 flex flex-col h-full lg:w-full lg:h-3/4 lg:p-0 -z-1 overflow-auto items-center
       ${
         background
           ? 'bg-gradient-to-br dark:bg-gradient-to-tl to-white via-gray-50 from-gray-400 dark:from-zinc-900/70 dark:to-neutral-700'
           : ''
       }
       ${padding ? padding : 'px-2 py-5 lg:px-5 lg:py-4'}
      ${
        border
          ? 'lg:border shadow-lg dark:shadow-neutral-900 lg:border-gray-500 lg:dark:border-neutral-700'
          : ''
      }
      ${gap ? gap : 'gap-10'}
      ${justifyCenter ? ' justify-center' : 'justify-start'}
      ${withImage && 'relative overflow-hidden'}
      `}
    >
      {withImage && (
        <Image
          src={Assets.Images.SantiBG}
          alt='santi'
          className='animate-fade-left absolute bottom-0 right-0 w-[10%] hidden lg:block drop-shadow-[0_35px_35px_rgba(107,114,128,0.7)] dark:drop-shadow-[0_35px_35px_rgba(229,231,235,0.1)]'
        />
      )}
      {children}
    </section>
  );
};

export default Container;

import Link from 'next/link'
import Typewriter from 'typewriter-effect'

export default function PcIntroHome() {
  return (
    <section
      className={`hidden font-secondary animate-fade-up lg:flex flex-col items-center tracking-wider gap-5`}
    >
      <div className='flex flex-col h-full justify-between items-center'>
        <div className='text-center'>
          <h1 className='text-3xl text-gray-700 font-secondary dark:text-gray-100 tracking-wide sm:text-4xl lg:text-5xl'>
            santiago manso castro
          </h1>
          <div className='text-gray-500'>
            <Typewriter
              options={{
                strings: [
                  'Fullstack developer💻',
                  'Typescript 💓',
                  'Tailwind Css 💓',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>

      <Link
        href='/portfolio'
        className={`animate-fade-up animate-duration-400 animate-delay-[400ms] animate-ease-out text-center text-xl lg:text-3xl bg-purple-600 text-gray-200 tracking-wide group-hover:-translate-y-2 w-1/2 ease-in-out px-8 py-2 rounded-md select-none border-2 border-purple-500 shadow-md shadow-violet-950 dark:shadow-sky-900 hover:translate-y-1 transition-all duration-150 lg:hover:translate-y-0 lg:active:translate-y-3`}
      >
        My Work
      </Link>
    </section>
  )
}

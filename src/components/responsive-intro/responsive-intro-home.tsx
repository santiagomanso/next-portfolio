import LanguageSwitcher from '../language-switcher'
import ResponsiveHeaderTypewritter from './components/header-typewritter'
import ResponsiveLanguageSwitcher from './components/responsive-language-switcher'

export default function ResponsiveIntroHome() {
  return (
    <section className='lg:hidden h-full w-full grid grid-cols-3 grid-rows-12 gap-2 overflow-auto'>
      <article className='rounded-lg bg-purple-600/40 col-span-3 row-span-3 flex flex-col justify-center'>
        <ResponsiveHeaderTypewritter />
      </article>
      <article className='rounded-lg bg-purple-600/40'>
        <ResponsiveLanguageSwitcher />
      </article>
      <article className='rounded-lg bg-sky-500 col-span-2'>3</article>
      <article className='rounded-lg bg-rose-500'>4</article>
      <article className='rounded-lg bg-teal-500'>5</article>
      <article className='rounded-lg bg-gray-500 row-span-2'>6</article>
      <article className='rounded-lg bg-amber-200 col-span-2'>7</article>
      <article className='rounded-lg bg-red-500 row-span-2'>9</article>
      <article className='rounded-lg bg-stone-500'>10</article>
      <article className='rounded-lg bg-green-500'>11</article>
      <article className='rounded-lg bg-indigo-500'>12</article>

      <article className='rounded-lg bg-indigo-500'>12</article>
    </section>
  )
}

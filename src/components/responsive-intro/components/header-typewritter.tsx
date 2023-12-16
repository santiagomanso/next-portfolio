import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import { useContext } from 'react'
import Typewriter from 'typewriter-effect'

interface HeaderI {
  [index: string]: string
}

const message: HeaderI = {
  en: "👋🏻Hi, I'm santiago manso castro",
  es: '👋🏻Hola, soy santiago manso castro',
  de: '👋🏻Hallo, Ich bin Santiago Manso Castro',
}

export default function ResponsiveHeaderTypewritter() {
  const { language } = useContext(LanguageContext)

  return (
    <div className='text-center'>
      <h1 className='text-3xl text-gray-700  dark:text-gray-100 tracking-wide sm:text-4xl lg:text-5xl px-3 md:px-0'>
        {message[language]}
      </h1>
      <div className='text-gray-500 dark:text-white'>
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
  )
}

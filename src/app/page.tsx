'use client'
import Container from '@/components/container'
import PcIntroHome from '@/components/pc-intro'
import ResponsiveIntroHome from '@/components/responsive-intro/responsive-intro-home'
import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import { useContext } from 'react'
import Typewriter from 'typewriter-effect'

export default function Home() {
  const { language } = useContext(LanguageContext)

  return (
    <Container border justifyCenter padding='p-2 lg:px-5 lg:py-4'>
      <PcIntroHome />
      <ResponsiveIntroHome />
    </Container>
  )
}

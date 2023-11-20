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
    <Container border justifyCenter>
      <PcIntroHome />
      <ResponsiveIntroHome />
    </Container>
  )
}

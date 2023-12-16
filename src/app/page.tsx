'use client'
import Container from '@/components/container'
import PcIntroHome from '@/components/pc-intro'
import ResponsiveIntroHome from '@/components/responsive-intro/responsive-intro-home'

export default function Home() {
  return (
    <Container border justifyCenter padding='p-2 lg:px-5 lg:py-4'>
      <PcIntroHome />
      <ResponsiveIntroHome />
    </Container>
  )
}

'use client';
import BentoGrid from '@/components/bentoGrid';
import Container from '@/components/container';
import PcIntroHome from '@/components/pc-intro';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Container border background justifyCenter padding='p-2 lg:px-5 lg:py-4'>
      {isDesktop ? <PcIntroHome /> : <BentoGrid />}
    </Container>
  );
}

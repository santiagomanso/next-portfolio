'use client';
import Container from '@/components/container';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import LaptopHome from './_components/laptop';
import ResponsiveHome from './_components/responsive';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Container border background justifyCenter padding='p-2 lg:px-5 lg:py-4'>
      {isDesktop ? <LaptopHome /> : <ResponsiveHome />}
    </Container>
  );
}

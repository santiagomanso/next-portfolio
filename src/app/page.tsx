'use client';
import Container from '@/components/container';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import LaptopHome from './_components/laptop';
import ResponsiveHome from './_components/responsive';
import Head from 'next/head';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Head>
        <meta property='og:image' content='/og/og.png' />
      </Head>
      <Container
        border
        background
        justifyCenter
        padding='p-2 lg:px-5 lg:py-4'
        withImage //NOTE image on bottom right only on desktop
      >
        {isDesktop ? <LaptopHome /> : <ResponsiveHome />}
      </Container>
    </>
  );
}

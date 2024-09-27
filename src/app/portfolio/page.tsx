'use client';
import * as React from 'react';

import './styles.css';
import Container from '@/components/container';
import { Assets } from '@/assets';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@radix-ui/react-tabs';

export default function Page() {
  return (
    <Container padding='p-0' border background>
      <Tabs value='zombiemarkt' className='self-start pt-3'>
        <TabsList className='flex gap-2'>
          <TabsTrigger value='zombiemarkt'>zombiemarkt</TabsTrigger>
          <TabsTrigger value='inventoryManager'>inventory manager</TabsTrigger>
          <TabsTrigger value='richSimulator'>rich simulator</TabsTrigger>
          <TabsTrigger value='deliveryFee'>delivery calculator</TabsTrigger>
        </TabsList>
        <TabsContent value='zombiemarkt'>ZOMBIE</TabsContent>
        <TabsContent value='inventoryManager'>inventory manager</TabsContent>
        <TabsContent value='richSimulator'>rich simulator</TabsContent>
        <TabsContent value='deliveryFee'>delivery calculator</TabsContent>
      </Tabs>
    </Container>
  );
}

const skills = [
  <span
    className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
    key={1}
  >
    <Assets.Icons.React alt='React' className='h-4 w-4 sm:h-6 sm:w-6' />
    React
  </span>,
  <span
    className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
    key={2}
  >
    <Assets.Icons.NextJs
      alt='NextJs'
      className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white'
    />
    NextJs
  </span>,
  <span
    className='inline-flex items-center gap-1 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800 justify-start'
    key={3}
  >
    <Assets.Icons.Tailwind
      alt='Tailwind'
      className='h-4 w-4 sm:h-6 sm:w-6 flex'
    />
    <span>Tailwind</span> <span>CSS</span>
  </span>,
  <span
    className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
    key={4}
  >
    <Assets.Icons.TypeScript
      alt='TypeScript'
      className='h-4 w-4 sm:h-6 sm:w-6'
    />
    TypeScript
  </span>,
  <span
    className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
    key={5}
  >
    <Assets.Icons.JavaScript
      alt='JavaScript'
      className='h-3 w-3 sm:h-5 sm:w-5'
    />
    JavaScript
  </span>,
  <span
    className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
    key={6}
  >
    <Assets.Icons.NodeJs alt='NodeJs' className='h-4 w-4 sm:h-6 sm:w-6' />
    NodeJs
  </span>,
  <span
    className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
    key={7}
  >
    <Assets.Icons.Git alt='Git' className='h-4 w-4 sm:h-6 sm:w-6' />
    Git
  </span>,
  <span
    className='inline-flex items-center gap-2 rounded bg-gray-200 border border-gray-300 dark:border-neutral-700 px-3 py-1 text-sm font-medium dark:bg-neutral-800'
    key={8}
  >
    <Assets.Icons.GitHub
      alt='Github'
      className='h-3 w-3 sm:h-5 sm:w-5 dark:fill-white fill-slate-800'
    />
    Github
  </span>,
];
